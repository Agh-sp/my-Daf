import http from "http";
import { AddressInfo } from "net";
import { afterEach, describe, expect, test } from "vitest";
import { WebSocket } from "ws";
import {
  GlobalChatRoom,
  isRegisteredChatIdentity,
  type GlobalChatIdentity,
} from "../../src/server/GlobalChatRoom";

type ClientMessages = {
  queue: Record<string, unknown>[];
  waiters: Array<(message: Record<string, unknown>) => void>;
};
const clientMessages = new WeakMap<WebSocket, ClientMessages>();
let server: http.Server | undefined;
const clients: WebSocket[] = [];

describe("GlobalChatRoom", () => {
  test("local accounts count as registered chat identities", () => {
    expect(isRegisteredChatIdentity({}, "local")).toBe(true);
    expect(isRegisteredChatIdentity({}, undefined)).toBe(false);
  });

  afterEach(async () => {
    for (const client of clients.splice(0)) {
      if (client.readyState === WebSocket.OPEN) client.terminate();
      else client.close();
    }
    if (server) {
      const current = server;
      server = undefined;
      await new Promise<void>((resolve) => current.close(() => resolve()));
    }
  });

  test("only authenticated accounts can send and history uses verified identity", async () => {
    const room = await startRoom();
    const first = await join(room.url);
    expect(await nextJson(first)).toEqual({ type: "history", messages: [] });
    expect(await nextJson(first)).toMatchObject({
      type: "presence",
      online: 1,
    });

    first.send(JSON.stringify({ type: "send", text: "Guest message" }));
    expect(await nextJson(first)).toMatchObject({ type: "error" });
    expect(room.room.chatReports()).toHaveLength(0);

    await authenticate(first, "valid-a");
    const second = await join(room.url);
    expect(await nextJson(second)).toEqual({ type: "history", messages: [] });
    expect(await nextJson(second)).toMatchObject({
      type: "presence",
      online: 2,
    });
    expect(await nextJson(first)).toMatchObject({
      type: "presence",
      online: 2,
    });
    await authenticate(second, "valid-b");

    first.send(JSON.stringify({ type: "send", text: "Hello everyone" }));
    const broadcast = await nextJson(second);
    expect(broadcast).toMatchObject({
      type: "message",
      message: {
        publicId: "public-a",
        username: "Alpha",
        text: "Hello everyone",
      },
    });
    expect((await nextJson(first)).type).toBe("message");

    const third = await join(room.url);
    expect(await nextJson(third)).toMatchObject({
      type: "history",
      messages: [
        {
          publicId: "public-a",
          username: "Alpha",
          text: "Hello everyone",
        },
      ],
    });
  });

  test("rejects oversized messages and rate-limits consecutive sends", async () => {
    const { url } = await startRoom();
    const client = await join(url);
    await nextJson(client);
    expect(await nextJson(client)).toMatchObject({
      type: "presence",
      online: 1,
    });
    await authenticate(client, "valid-a");

    client.send(JSON.stringify({ type: "send", text: "x".repeat(281) }));
    expect(await nextJson(client)).toMatchObject({ type: "error" });

    client.send(JSON.stringify({ type: "send", text: "first" }));
    expect((await nextJson(client)).type).toBe("message");
    client.send(JSON.stringify({ type: "send", text: "second" }));
    expect(await nextJson(client)).toMatchObject({ type: "error" });
  });

  test("registered users can report another user's message once", async () => {
    const { room, url } = await startRoom();
    const author = await join(url);
    await nextJson(author);
    await nextJson(author);
    await authenticate(author, "valid-a");

    const reporter = await join(url);
    await nextJson(reporter);
    await nextJson(reporter);
    expect(await nextJson(author)).toMatchObject({
      type: "presence",
      online: 2,
    });
    await authenticate(reporter, "valid-b");

    author.send(JSON.stringify({ type: "send", text: "Abusive message" }));
    const sent = await nextJson(author);
    await nextJson(reporter);
    const message = sent.message as { id: string };

    reporter.send(
      JSON.stringify({
        type: "report",
        messageId: message.id,
        reason: "abusive_language",
      }),
    );
    expect(await nextJson(reporter)).toEqual({
      type: "reported",
      messageId: message.id,
    });
    expect(room.chatReports()).toHaveLength(1);
    expect(room.chatReports()[0]).toMatchObject({
      messageId: message.id,
      reportedBy: { publicId: "public-b", username: "Beta" },
      reported: { publicId: "public-a", username: "Alpha" },
      message: "Abusive message",
      reason: "abusive_language",
    });

    reporter.send(
      JSON.stringify({
        type: "report",
        messageId: message.id,
        reason: "spam",
      }),
    );
    expect(await nextJson(reporter)).toMatchObject({ type: "error" });
    expect(room.chatReports()).toHaveLength(1);
  });

  test("whispers are delivered only to conversation participants and can be loaded later", async () => {
    const { url } = await startRoom();
    const sender = await join(url);
    await nextJson(sender);
    await nextJson(sender);
    const recipient = await join(url);
    await nextJson(recipient);
    await nextJson(recipient);
    await nextJson(sender);
    await authenticate(sender, "valid-a");
    await authenticate(recipient, "valid-b");

    sender.send(
      JSON.stringify({
        type: "whisper",
        targetPublicId: "public-b",
        text: "Private hello",
      }),
    );
    const sent = await nextJson(sender);
    expect(await nextJson(recipient)).toEqual(sent);
    expect(sent).toMatchObject({
      type: "whisper",
      message: {
        from: { publicId: "public-a", username: "Alpha" },
        toPublicId: "public-b",
        text: "Private hello",
      },
    });

    recipient.send(
      JSON.stringify({
        type: "whisper_history",
        targetPublicId: "public-a",
      }),
    );
    expect(await nextJson(recipient)).toMatchObject({
      type: "whisper_history",
      targetPublicId: "public-a",
      messages: [{ text: "Private hello" }],
    });

    const unrelated = await join(url);
    await nextJson(unrelated);
    await nextJson(unrelated);
    await nextJson(sender);
    await nextJson(recipient);
    await authenticate(unrelated, "valid-c");
    unrelated.send(
      JSON.stringify({
        type: "whisper_history",
        targetPublicId: "public-b",
      }),
    );
    expect(await nextJson(unrelated)).toMatchObject({
      type: "whisper_history",
      targetPublicId: "public-b",
      messages: [],
    });

    await new Promise((resolve) => setTimeout(resolve, 1050));
    recipient.send(
      JSON.stringify({
        type: "whisper",
        targetPublicId: "public-a",
        text: "Private reply",
      }),
    );
    expect(await nextJson(sender)).toMatchObject({
      type: "whisper",
      message: {
        from: { publicId: "public-b" },
        toPublicId: "public-a",
        text: "Private reply",
      },
    });
    expect(await nextJson(recipient)).toMatchObject({
      type: "whisper",
      message: { text: "Private reply" },
    });
  });

  test("development test users can log in and authenticate chat sessions", async () => {
    const { url } = await startRoom(true);
    const loginClient = await join(url);
    await nextJson(loginClient);
    await nextJson(loginClient);

    loginClient.send(
      JSON.stringify({
        type: "test_login",
        username: "arezoAD",
        password: "32983298",
      }),
    );
    const login = await nextJson(loginClient);
    expect(login).toMatchObject({
      type: "test_session",
      identity: {
        publicId: "dev-chat-arezo-ad",
        username: "arezoAD",
      },
    });
    expect(typeof login.token).toBe("string");

    const chatClient = await join(url);
    await nextJson(chatClient);
    await nextJson(chatClient);
    chatClient.send(JSON.stringify({ type: "test_auth", token: login.token }));
    expect(await nextJson(chatClient)).toMatchObject({
      type: "auth",
      registered: true,
      identity: {
        publicId: "dev-chat-arezo-ad",
        username: "arezoAD",
      },
    });
  });

  test("development test users are unavailable when disabled", async () => {
    const { url } = await startRoom(false);
    const client = await join(url);
    await nextJson(client);
    await nextJson(client);

    client.send(
      JSON.stringify({
        type: "test_login",
        username: "AzizAD",
        password: "32983298",
      }),
    );
    expect(await nextJson(client)).toMatchObject({ type: "error" });
  });

  test("development users can request, accept, and list friends", async () => {
    const { url } = await startRoom(true);
    const requester = await join(url);
    await nextJson(requester);
    await nextJson(requester);
    const requesterToken = await createTestSession(requester, "arezoAD");
    requester.send(
      JSON.stringify({ type: "test_auth", token: requesterToken }),
    );
    expect(await nextJson(requester)).toMatchObject({
      type: "auth",
      registered: true,
    });

    const recipient = await join(url);
    await nextJson(recipient);
    await nextJson(recipient);
    expect(await nextJson(requester)).toMatchObject({
      type: "presence",
      online: 2,
    });
    const recipientToken = await createTestSession(recipient, "AzizAD");
    recipient.send(
      JSON.stringify({ type: "test_auth", token: recipientToken }),
    );
    expect(await nextJson(recipient)).toMatchObject({
      type: "auth",
      registered: true,
    });
    requester.send(JSON.stringify({ type: "friend_state" }));
    expect(await nextJson(requester)).toMatchObject({
      type: "friend_state",
      incoming: [],
      outgoing: [],
      friends: [],
    });

    requester.send(
      JSON.stringify({
        type: "friend_request",
        targetPublicId: "dev-chat-aziz-ad",
      }),
    );
    expect(await nextJson(requester)).toEqual({
      type: "friend_request_result",
      status: "requested",
    });
    expect(await nextJson(recipient)).toMatchObject({
      type: "friend_state",
      incoming: [{ publicId: "dev-chat-arezo-ad", username: "arezoAD" }],
    });
    expect(await nextJson(requester)).toMatchObject({
      type: "friend_state",
      outgoing: [{ publicId: "dev-chat-aziz-ad", username: "AzizAD" }],
    });

    recipient.send(
      JSON.stringify({
        type: "friend_request_action",
        targetPublicId: "dev-chat-arezo-ad",
        action: "accept",
      }),
    );
    expect(await nextJson(requester)).toMatchObject({
      type: "friend_state",
      friends: [{ publicId: "dev-chat-aziz-ad", username: "AzizAD" }],
    });
    expect(await nextJson(recipient)).toMatchObject({
      type: "friend_state",
      friends: [{ publicId: "dev-chat-arezo-ad", username: "arezoAD" }],
    });
  });
});

async function startRoom(
  testAccountsEnabled = true,
): Promise<{ room: GlobalChatRoom; url: string }> {
  const identities: Record<string, GlobalChatIdentity> = {
    "valid-a": { publicId: "public-a", username: "Alpha" },
    "valid-b": { publicId: "public-b", username: "Beta" },
    "valid-c": { publicId: "public-c", username: "Gamma" },
  };
  const room = new GlobalChatRoom(
    async (token) => identities[token] ?? null,
    testAccountsEnabled,
  );
  server = http.createServer();
  server.on("upgrade", (request, socket, head) => {
    room.handleUpgrade(request, socket, head);
  });
  await new Promise<void>((resolve) => server!.listen(0, "127.0.0.1", resolve));
  const address = server.address() as AddressInfo;
  return { room, url: `ws://127.0.0.1:${address.port}/chat` };
}

function join(url: string): Promise<WebSocket> {
  return new Promise((resolve, reject) => {
    const client = new WebSocket(url);
    clients.push(client);
    const incoming: ClientMessages = { queue: [], waiters: [] };
    clientMessages.set(client, incoming);
    client.on("message", (data) => {
      const message = JSON.parse(data.toString()) as Record<string, unknown>;
      const waiter = incoming.waiters.shift();
      if (waiter) waiter(message);
      else incoming.queue.push(message);
    });
    client.once("open", () => resolve(client));
    client.once("error", reject);
  });
}

async function authenticate(client: WebSocket, token: string): Promise<void> {
  client.send(JSON.stringify({ type: "auth", token }));
  expect(await nextJson(client)).toMatchObject({
    type: "auth",
    registered: true,
  });
}

function nextJson(client: WebSocket): Promise<Record<string, unknown>> {
  const incoming = clientMessages.get(client);
  const queued = incoming?.queue.shift();
  if (queued) return Promise.resolve(queued);
  return new Promise((resolve, reject) => {
    incoming?.waiters.push(resolve);
    client.once("error", reject);
  });
}

async function createTestSession(
  client: WebSocket,
  username: string,
): Promise<string> {
  client.send(
    JSON.stringify({
      type: "test_login",
      username,
      password: "32983298",
    }),
  );
  const session = await nextJson(client);
  if (session.type !== "test_session" || typeof session.token !== "string") {
    throw new Error("Test account login failed");
  }
  return session.token;
}
