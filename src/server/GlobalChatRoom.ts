import { GameEnv } from "@openfront/shared/configuration/Env";
import { randomBytes, randomUUID, timingSafeEqual } from "crypto";
import { WebSocket, WebSocketServer } from "ws";
import { z } from "zod";
import { getUserMe, verifyClientToken } from "./jwt";
import { ServerEnv } from "./ServerEnv";

const MAX_CHAT_CLIENTS = 500;
const MAX_HISTORY = 80;
const MAX_WHISPER_CONVERSATIONS = 1000;
const MAX_MESSAGE_LENGTH = 280;
const MAX_BUFFERED_BYTES = 64 * 1024;
const MESSAGE_INTERVAL_MS = 1000;
const REPORT_INTERVAL_MS = 10_000;
const MAX_REPORTS = 1000;
const TEST_SESSION_TTL_MS = 12 * 60 * 60 * 1000;
const TEST_ACCOUNTS: Readonly<Record<string, GlobalChatIdentity>> = {
  arezoad: { publicId: "dev-chat-arezo-ad", username: "arezoAD" },
  azizad: { publicId: "dev-chat-aziz-ad", username: "AzizAD" },
};
const TEST_PASSWORD = "32983298";

const ClientMessageSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("auth"), token: z.string().min(1).max(4096) }),
  z.object({
    type: z.literal("test_login"),
    username: z.string().trim().min(1).max(80),
    password: z.string().min(1).max(256),
  }),
  z.object({
    type: z.literal("test_auth"),
    token: z.string().min(1).max(128),
  }),
  z.object({
    type: z.literal("send"),
    text: z.string().trim().min(1).max(MAX_MESSAGE_LENGTH),
  }),
  z.object({
    type: z.literal("report"),
    messageId: z.string().uuid(),
    reason: z.enum(["abusive_language", "harassment", "spam", "other"]),
  }),
  z.object({
    type: z.literal("whisper_history"),
    targetPublicId: z.string().trim().min(1).max(128),
  }),
  z.object({
    type: z.literal("whisper"),
    targetPublicId: z.string().trim().min(1).max(128),
    text: z.string().trim().min(1).max(MAX_MESSAGE_LENGTH),
  }),
  z.object({ type: z.literal("friend_state") }),
  z.object({
    type: z.literal("friend_request"),
    targetPublicId: z.string().trim().min(1).max(128),
  }),
  z.object({
    type: z.literal("friend_request_action"),
    targetPublicId: z.string().trim().min(1).max(128),
    action: z.enum(["accept", "reject"]),
  }),
]);

export type GlobalChatIdentity = {
  publicId: string;
  username: string;
};

export type GlobalChatMessage = GlobalChatIdentity & {
  id: string;
  text: string;
  sentAt: number;
};

export type GlobalWhisperMessage = {
  id: string;
  from: GlobalChatIdentity;
  toPublicId: string;
  text: string;
  sentAt: number;
};

type TestFriendRequest = {
  from: GlobalChatIdentity;
  toPublicId: string;
};

export type GlobalChatReport = {
  id: string;
  messageId: string;
  reportedBy: GlobalChatIdentity;
  reported: GlobalChatIdentity;
  message: string;
  reason: "abusive_language" | "harassment" | "spam" | "other";
  createdAt: number;
};

type ClientIdentityVerifier = (
  token: string,
) => Promise<GlobalChatIdentity | null>;

type ChatClient = {
  identity: GlobalChatIdentity | null;
  lastMessageAt: number;
  lastReportAt: number;
  reportIds: Set<string>;
};

export class GlobalChatRoom {
  private readonly wss = new WebSocketServer({
    noServer: true,
    maxPayload: 8192,
  });
  private readonly clients = new Map<WebSocket, ChatClient>();
  private readonly history: GlobalChatMessage[] = [];
  private readonly whisperHistory = new Map<string, GlobalWhisperMessage[]>();
  private readonly testFriendRequests = new Map<string, TestFriendRequest>();
  private readonly testFriendships = new Set<string>();
  private readonly reports: GlobalChatReport[] = [];
  private readonly verifyIdentity: ClientIdentityVerifier;
  private readonly testSessions = new Map<
    string,
    { identity: GlobalChatIdentity; expiresAt: number }
  >();
  private readonly testAccountsEnabled: boolean;

  constructor(
    verifyIdentity: ClientIdentityVerifier = verifyRegisteredIdentity,
    testAccountsEnabled = ServerEnv.env() === GameEnv.Dev,
  ) {
    this.verifyIdentity = verifyIdentity;
    this.testAccountsEnabled = testAccountsEnabled;
    this.wss.on("connection", (client: WebSocket) => {
      if (this.clients.size >= MAX_CHAT_CLIENTS) {
        client.close(1013, "Chat is full");
        return;
      }
      this.clients.set(client, {
        identity: null,
        lastMessageAt: 0,
        lastReportAt: 0,
        reportIds: new Set(),
      });
      client.send(JSON.stringify({ type: "history", messages: this.history }));
      this.broadcast({ type: "presence", online: this.clients.size });

      client.on("message", (raw, isBinary) => {
        if (isBinary) {
          client.close(1003, "Text messages only");
          return;
        }
        void this.handleMessage(client, raw.toString());
      });
      client.on("close", () => this.removeClient(client));
      client.on("error", () => this.removeClient(client));
    });
  }

  handleUpgrade(
    request: import("http").IncomingMessage,
    socket: import("stream").Duplex,
    head: Buffer,
  ): void {
    this.wss.handleUpgrade(request, socket, head, (client) => {
      this.wss.emit("connection", client, request);
    });
  }

  chatReports(): readonly GlobalChatReport[] {
    return this.reports;
  }

  private async handleMessage(client: WebSocket, raw: string) {
    let decoded: unknown;
    try {
      decoded = JSON.parse(raw);
    } catch {
      this.sendError(client, "Invalid message");
      return;
    }

    const parsed = ClientMessageSchema.safeParse(decoded);
    if (!parsed.success) {
      this.sendError(client, "Invalid chat request");
      return;
    }
    if (parsed.data.type === "test_login") {
      this.handleTestLogin(client, parsed.data.username, parsed.data.password);
      return;
    }
    if (parsed.data.type === "test_auth") {
      const session = this.testSessions.get(parsed.data.token);
      const identity =
        session && session.expiresAt > Date.now() ? session.identity : null;
      if (session && identity === null) {
        this.testSessions.delete(parsed.data.token);
      }
      this.setAuthenticatedIdentity(client, identity);
      return;
    }
    if (parsed.data.type === "auth") {
      let identity: GlobalChatIdentity | null;
      try {
        identity = await this.verifyIdentity(parsed.data.token);
      } catch (error) {
        console.error("Global chat identity verification failed", error);
        this.sendError(client, "Unable to verify account");
        return;
      }
      this.setAuthenticatedIdentity(client, identity);
      return;
    }
    const state = this.clients.get(client);
    if (!state?.identity) {
      this.sendError(client, "Sign in with a registered account to use chat");
      return;
    }
    if (parsed.data.type === "send") {
      this.handleSend(client, state.identity, state, parsed.data.text);
    } else if (parsed.data.type === "whisper") {
      this.handleWhisper(
        client,
        state.identity,
        state,
        parsed.data.targetPublicId,
        parsed.data.text,
      );
    } else if (parsed.data.type === "whisper_history") {
      this.handleWhisperHistory(
        client,
        state.identity,
        parsed.data.targetPublicId,
      );
    } else if (parsed.data.type === "friend_state") {
      this.sendTestFriendState(client, state.identity);
    } else if (parsed.data.type === "friend_request") {
      this.handleTestFriendRequest(
        client,
        state.identity,
        parsed.data.targetPublicId,
      );
    } else if (parsed.data.type === "friend_request_action") {
      this.handleTestFriendRequestAction(
        client,
        state.identity,
        parsed.data.targetPublicId,
        parsed.data.action,
      );
    } else {
      this.handleReport(
        client,
        state.identity,
        state,
        parsed.data.messageId,
        parsed.data.reason,
      );
    }
  }

  private handleTestLogin(
    client: WebSocket,
    username: string,
    password: string,
  ) {
    const normalizedUsername = username.toLowerCase();
    const identity = this.testAccountsEnabled
      ? TEST_ACCOUNTS[normalizedUsername]
      : undefined;
    const passwordBuffer = Buffer.from(password);
    const expectedPasswordBuffer = Buffer.from(TEST_PASSWORD);
    const passwordMatches =
      passwordBuffer.length === expectedPasswordBuffer.length &&
      timingSafeEqual(passwordBuffer, expectedPasswordBuffer);

    if (!identity || !passwordMatches) {
      this.sendError(client, "Invalid test account username or password");
      return;
    }

    const token = randomBytes(32).toString("base64url");
    this.testSessions.set(token, {
      identity,
      expiresAt: Date.now() + TEST_SESSION_TTL_MS,
    });
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          type: "test_session",
          token,
          identity,
        }),
      );
    }
  }

  private setAuthenticatedIdentity(
    client: WebSocket,
    identity: GlobalChatIdentity | null,
  ) {
    const state = this.clients.get(client);
    if (!state || client.readyState !== WebSocket.OPEN) return;
    state.identity = identity;
    client.send(
      JSON.stringify({
        type: "auth",
        registered: identity !== null,
        identity,
      }),
    );
  }

  private handleSend(
    client: WebSocket,
    identity: GlobalChatIdentity,
    state: ChatClient,
    rawText: string,
  ) {
    const now = Date.now();
    if (now - state.lastMessageAt < MESSAGE_INTERVAL_MS) {
      this.sendError(client, "Please wait before sending another message");
      return;
    }
    const text = cleanControlCharacters(rawText, "").trim();
    if (!text) {
      this.sendError(client, "Message cannot be empty");
      return;
    }
    state.lastMessageAt = now;

    const message: GlobalChatMessage = {
      id: randomUUID(),
      ...identity,
      text,
      sentAt: now,
    };
    this.history.push(message);
    if (this.history.length > MAX_HISTORY) this.history.shift();
    this.broadcast({ type: "message", message });
  }

  private handleReport(
    client: WebSocket,
    identity: GlobalChatIdentity,
    state: ChatClient,
    messageId: string,
    reason: GlobalChatReport["reason"],
  ) {
    const reportedMessage = this.history.find(
      (message) => message.id === messageId,
    );
    if (!reportedMessage || reportedMessage.publicId === identity.publicId) {
      this.sendError(client, "This message cannot be reported");
      return;
    }
    if (state.reportIds.has(messageId)) {
      this.sendError(client, "You have already reported this message");
      return;
    }
    const now = Date.now();
    if (now - state.lastReportAt < REPORT_INTERVAL_MS) {
      this.sendError(client, "Please wait before sending another report");
      return;
    }
    state.lastReportAt = now;
    state.reportIds.add(messageId);

    this.reports.push({
      id: randomUUID(),
      messageId,
      reportedBy: identity,
      reported: {
        publicId: reportedMessage.publicId,
        username: reportedMessage.username,
      },
      message: reportedMessage.text,
      reason,
      createdAt: now,
    });
    if (this.reports.length > MAX_REPORTS) this.reports.shift();
    client.send(JSON.stringify({ type: "reported", messageId }));
  }

  private handleWhisper(
    client: WebSocket,
    identity: GlobalChatIdentity,
    state: ChatClient,
    targetPublicId: string,
    rawText: string,
  ) {
    if (targetPublicId === identity.publicId) {
      this.sendError(client, "You cannot send a whisper to yourself");
      return;
    }
    const now = Date.now();
    if (now - state.lastMessageAt < MESSAGE_INTERVAL_MS) {
      this.sendError(client, "Please wait before sending another message");
      return;
    }
    const text = cleanControlCharacters(rawText, "").trim();
    if (!text) {
      this.sendError(client, "Message cannot be empty");
      return;
    }
    state.lastMessageAt = now;

    const conversationKey = this.conversationKey(
      identity.publicId,
      targetPublicId,
    );
    let history = this.whisperHistory.get(conversationKey);
    if (!history) {
      history = [];
      this.whisperHistory.set(conversationKey, history);
      if (this.whisperHistory.size > MAX_WHISPER_CONVERSATIONS) {
        const oldestKey = this.whisperHistory.keys().next().value;
        if (oldestKey !== undefined) this.whisperHistory.delete(oldestKey);
      }
    }
    const message: GlobalWhisperMessage = {
      id: randomUUID(),
      from: identity,
      toPublicId: targetPublicId,
      text,
      sentAt: now,
    };
    history.push(message);
    if (history.length > MAX_HISTORY) history.shift();

    const frame = JSON.stringify({ type: "whisper", message });
    for (const [recipient, recipientState] of this.clients) {
      if (
        recipientState.identity?.publicId !== identity.publicId &&
        recipientState.identity?.publicId !== targetPublicId
      ) {
        continue;
      }
      if (recipient.readyState !== WebSocket.OPEN) {
        this.clients.delete(recipient);
      } else if (recipient.bufferedAmount > MAX_BUFFERED_BYTES) {
        recipient.terminate();
        this.clients.delete(recipient);
      } else {
        recipient.send(frame);
      }
    }
  }

  private handleWhisperHistory(
    client: WebSocket,
    identity: GlobalChatIdentity,
    targetPublicId: string,
  ) {
    if (targetPublicId === identity.publicId) {
      this.sendError(client, "You cannot open a whisper with yourself");
      return;
    }
    client.send(
      JSON.stringify({
        type: "whisper_history",
        targetPublicId,
        messages:
          this.whisperHistory.get(
            this.conversationKey(identity.publicId, targetPublicId),
          ) ?? [],
      }),
    );
  }

  private conversationKey(firstPublicId: string, secondPublicId: string) {
    return [firstPublicId, secondPublicId].sort().join("\u0000");
  }

  private friendKey(firstPublicId: string, secondPublicId: string) {
    return [firstPublicId, secondPublicId].sort().join("\u0000");
  }

  private isTestIdentity(identity: GlobalChatIdentity): boolean {
    return Object.values(TEST_ACCOUNTS).some(
      (testIdentity) => testIdentity.publicId === identity.publicId,
    );
  }

  private handleTestFriendRequest(
    client: WebSocket,
    identity: GlobalChatIdentity,
    targetPublicId: string,
  ) {
    if (
      !this.testAccountsEnabled ||
      !this.isTestIdentity(identity) ||
      !this.isTestIdentity({ publicId: targetPublicId, username: "" })
    ) {
      this.sendError(client, "Friend request could not be sent");
      return;
    }
    if (targetPublicId === identity.publicId) {
      this.sendError(client, "You cannot add yourself as a friend");
      return;
    }
    const key = this.friendKey(identity.publicId, targetPublicId);
    if (this.testFriendships.has(key)) {
      client.send(
        JSON.stringify({ type: "friend_request_result", status: "accepted" }),
      );
      return;
    }
    const reverse = `${identity.publicId}\u0000${targetPublicId}`;
    const reverseRequest = this.testFriendRequests.get(reverse);
    if (reverseRequest) {
      this.testFriendRequests.delete(reverse);
      this.testFriendships.add(key);
      this.notifyTestFriendState(identity.publicId, targetPublicId);
      client.send(
        JSON.stringify({ type: "friend_request_result", status: "accepted" }),
      );
      return;
    }

    const requestKey = `${targetPublicId}\u0000${identity.publicId}`;
    this.testFriendRequests.set(requestKey, {
      from: identity,
      toPublicId: targetPublicId,
    });
    client.send(
      JSON.stringify({ type: "friend_request_result", status: "requested" }),
    );
    this.notifyTestFriendState(targetPublicId);
    this.notifyTestFriendState(identity.publicId);
  }

  private handleTestFriendRequestAction(
    client: WebSocket,
    identity: GlobalChatIdentity,
    senderPublicId: string,
    action: "accept" | "reject",
  ) {
    if (
      !this.testAccountsEnabled ||
      !this.isTestIdentity(identity) ||
      !this.isTestIdentity({ publicId: senderPublicId, username: "" })
    ) {
      this.sendError(client, "Friend request could not be updated");
      return;
    }
    const requestKey = `${identity.publicId}\u0000${senderPublicId}`;
    if (!this.testFriendRequests.delete(requestKey)) {
      this.sendError(client, "Friend request no longer exists");
      return;
    }
    if (action === "accept") {
      this.testFriendships.add(
        this.friendKey(identity.publicId, senderPublicId),
      );
    }
    this.notifyTestFriendState(identity.publicId, senderPublicId);
  }

  private sendTestFriendState(client: WebSocket, identity: GlobalChatIdentity) {
    if (!this.testAccountsEnabled || !this.isTestIdentity(identity)) {
      this.sendError(client, "Friend list unavailable");
      return;
    }
    const publicId = identity.publicId;
    const incoming = [...this.testFriendRequests.values()]
      .filter((request) => request.toPublicId === publicId)
      .map((request) => request.from);
    const outgoing = [...this.testFriendRequests.values()]
      .filter((request) => request.from.publicId === publicId)
      .map((request) => ({
        publicId: request.toPublicId,
        username: this.testIdentity(request.toPublicId)?.username ?? "Player",
      }));
    const friends = [...this.testFriendships]
      .filter((key) => key.split("\u0000").includes(publicId))
      .map((key) => {
        const friendPublicId = key
          .split("\u0000")
          .find((candidate) => candidate !== publicId)!;
        return {
          publicId: friendPublicId,
          username: this.testIdentity(friendPublicId)?.username ?? "Player",
        };
      });
    client.send(
      JSON.stringify({ type: "friend_state", incoming, outgoing, friends }),
    );
  }

  private notifyTestFriendState(...publicIds: string[]) {
    for (const [client, state] of this.clients) {
      if (!state.identity || !publicIds.includes(state.identity.publicId)) {
        continue;
      }
      this.sendTestFriendState(client, state.identity);
    }
  }

  private testIdentity(publicId: string): GlobalChatIdentity | undefined {
    return Object.values(TEST_ACCOUNTS).find(
      (identity) => identity.publicId === publicId,
    );
  }

  private sendError(client: WebSocket, message: string) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: "error", message }));
    }
  }

  private removeClient(client: WebSocket) {
    if (this.clients.delete(client)) {
      this.broadcast({ type: "presence", online: this.clients.size });
    }
  }

  private broadcast(message: unknown) {
    const frame = JSON.stringify(message);
    for (const client of this.clients.keys()) {
      if (client.readyState !== WebSocket.OPEN) {
        this.clients.delete(client);
      } else if (client.bufferedAmount > MAX_BUFFERED_BYTES) {
        client.terminate();
        this.clients.delete(client);
      } else {
        client.send(frame);
      }
    }
  }
}

async function verifyRegisteredIdentity(
  token: string,
): Promise<GlobalChatIdentity | null> {
  const verified = await verifyClientToken(token);
  if (verified.type !== "success" || verified.claims === null) return null;

  const userResult = await getUserMe(token);
  if (userResult.type !== "success") return null;
  const { user, player } = userResult.response;
  const isRegistered =
    user.discord !== undefined ||
    user.google !== undefined ||
    user.steam !== undefined ||
    (user.email ?? "") !== "";
  if (!isRegistered) return null;

  const username =
    player.username ??
    user.discord?.global_name ??
    user.discord?.username ??
    user.steam?.personaName ??
    "Player";
  return { publicId: player.publicId, username: username.slice(0, 24) };
}

function cleanControlCharacters(value: string, replacement: string): string {
  return Array.from(value, (character) => {
    const codePoint = character.codePointAt(0) ?? 0;
    return codePoint <= 31 || codePoint === 127 ? replacement : character;
  }).join("");
}
