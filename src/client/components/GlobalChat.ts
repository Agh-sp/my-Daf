import type {
  FriendEntry,
  FriendRequestsResponse,
} from "@openfront/shared/ApiSchemas";
import type { UserMeResponse } from "@openfront/shared/ApiSchemas";
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { z } from "zod";
import { responseHasLinkedIdentity } from "../AccountIdentity";
import { getAuthHeader } from "../Auth";
import { ClientEnv } from "../ClientEnv";
import {
  acceptFriendRequest,
  deleteFriendRequest,
  fetchFriendRequests,
  fetchFriends,
  sendFriendRequest,
} from "../FriendsApi";
import {
  GLOBAL_CHAT_AUTH_CHANGED_EVENT,
  GLOBAL_CHAT_TEST_SESSION_KEY,
  setIncomingFriendRequestCount,
} from "../GlobalChatAuth";
import { whenModalLoaded } from "../LazyModals";
import { lastUserMeResponse } from "../UserMeBroadcast";
import { isRTL, showToast, translateText } from "../Utils";

const ChatMessageSchema = z.object({
  id: z.string(),
  publicId: z.string(),
  username: z.string(),
  text: z.string(),
  sentAt: z.number(),
});
const WhisperMessageSchema = z.object({
  id: z.string(),
  from: z.object({ publicId: z.string(), username: z.string() }),
  toPublicId: z.string(),
  text: z.string(),
  sentAt: z.number(),
});
const ChatIdentitySchema = z.object({
  publicId: z.string(),
  username: z.string(),
});
const ChatEventSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("history"),
    messages: z.array(ChatMessageSchema).max(80),
  }),
  z.object({ type: z.literal("message"), message: ChatMessageSchema }),
  z.object({ type: z.literal("error"), message: z.string() }),
  z.object({ type: z.literal("presence"), online: z.number().int().min(0) }),
  z.object({
    type: z.literal("auth"),
    registered: z.boolean(),
    identity: z
      .object({ publicId: z.string(), username: z.string() })
      .nullable(),
  }),
  z.object({ type: z.literal("reported"), messageId: z.string().uuid() }),
  z.object({
    type: z.literal("whisper_history"),
    targetPublicId: z.string(),
    messages: z.array(WhisperMessageSchema).max(80),
  }),
  z.object({
    type: z.literal("whisper"),
    message: WhisperMessageSchema,
  }),
  z.object({
    type: z.literal("friend_state"),
    incoming: z.array(ChatIdentitySchema),
    outgoing: z.array(ChatIdentitySchema),
    friends: z.array(ChatIdentitySchema),
  }),
  z.object({
    type: z.literal("friend_request_result"),
    status: z.enum(["requested", "accepted"]),
  }),
]);

type ChatMessage = z.infer<typeof ChatMessageSchema>;
type WhisperMessage = z.infer<typeof WhisperMessageSchema>;
type ChatIdentity = z.infer<typeof ChatIdentitySchema>;
type ConnectionState = "connecting" | "online" | "offline";
type ReportReason = "abusive_language" | "harassment" | "spam" | "other";
type ChatTab = "public" | "friends" | "whisper";

const CHAT_TEXT: Record<string, string> = {
  "global_chat.title": "گپ عمومی",
  "global_chat.online": "اتصال برقرار است",
  "global_chat.connecting": "در حال اتصال…",
  "global_chat.error": "ارسال پیام ممکن نیست؛ متن یا اتصال را بررسی کن.",
  "global_chat.offline": "اتصال برقرار نشد",
  "global_chat.public": "گفت‌وگوی زندهٔ عمومی",
  "global_chat.public_notice":
    "همهٔ بازیکنان حاضر در این صفحه پیام‌ها را می‌بینند و می‌توانند پاسخ دهند.",
  "global_chat.members": "نفر آنلاین",
  "global_chat.message": "پیامت را برای همه بنویس…",
  "global_chat.send": "ارسال پیام",
  "global_chat.empty": "هنوز پیامی نیست",
  "global_chat.empty_hint": "اولین پیام را بفرست و گفتگو را شروع کن.",
  "global_chat.sign_in_required":
    "برای ارسال پیام، گزارش یا درخواست دوستی باید با یک حساب ثبت‌شده وارد شوی.",
  "global_chat.friend_request": "درخواست دوستی",
  "global_chat.friend_sent": "درخواست دوستی ارسال شد.",
  "global_chat.friend_accepted": "درخواست دوستی پذیرفته شد.",
  "global_chat.friend_failed": "ارسال درخواست دوستی ناموفق بود.",
  "global_chat.report": "گزارش",
  "global_chat.report_reason": "دلیل گزارش",
  "global_chat.report_abusive_language": "فحاشی یا الفاظ نامناسب",
  "global_chat.report_harassment": "آزار و تهدید",
  "global_chat.report_spam": "هرزنامه",
  "global_chat.report_other": "مورد دیگر",
  "global_chat.submit_report": "ثبت گزارش",
  "global_chat.report_sent": "گزارش برای بررسی ارسال شد.",
  "global_chat.sign_in": "ورود",
  "global_chat.sign_up": "ثبت‌نام",
  "global_chat.phone_auth_coming_soon":
    "ورود و ثبت‌نام با شماره تلفن به‌زودی فعال می‌شود.",
  "global_chat.friends": "دوستان",
  "global_chat.whisper": "نجوا",
  "global_chat.whisper_to": "نجوا با {username}",
  "global_chat.whisper_message": "پیام خصوصی بنویس…",
  "global_chat.no_friends": "هنوز دوستی نداری",
  "global_chat.friends_hint": "از گفت‌وگوی عمومی درخواست دوستی بفرست.",
  "global_chat.friends_failed": "فهرست دوستان بارگذاری نشد.",
  "global_chat.select_friend": "برای شروع نجوا، یک دوست را انتخاب کن.",
  "global_chat.whisper_empty": "هنوز پیامی در این گفتگو نیست.",
  "global_chat.back_to_friends": "بازگشت به دوستان",
  "global_chat.public_tab": "عمومی",
  "global_chat.online_friends": "فهرست دوستان",
  "global_chat.you": "شما",
  "global_chat.auth_checking": "در حال بررسی ورود حساب…",
  "global_chat.account_verification_failed":
    "حساب واردشده تأیید نشد. اتصال گفتگو را دوباره امتحان کن.",
  "global_chat.retry": "تلاش دوباره",
  "global_chat.friend_requests_incoming": "درخواست‌های دوستی",
  "global_chat.friend_requests_outgoing": "درخواست‌های ارسال‌شده",
  "global_chat.friend_request_pending": "در انتظار پاسخ",
  "global_chat.friend_accept": "قبول",
  "global_chat.friend_reject": "رد",
};

function chatText(key: string): string {
  const translated = translateText(key);
  const isPersian =
    isRTL() ||
    (typeof document !== "undefined" &&
      document.documentElement.lang.toLowerCase().startsWith("fa"));
  if (isPersian && CHAT_TEXT[key]) return CHAT_TEXT[key];
  return translated === key ? (CHAT_TEXT[key] ?? key) : translated;
}

@customElement("global-chat")
export class GlobalChat extends LitElement {
  @property({ type: Boolean, attribute: "game-mode" })
  private gameMode = false;

  @state() private messages: ChatMessage[] = [];
  @state() private draft = "";
  @state() private connection: ConnectionState = "connecting";
  @state() private chatError = "";
  @state() private onlineCount = 0;
  @state() private registered = false;
  @state() private authChecked = false;
  @state() private accountHasRegisteredIdentity = false;
  @state() private currentPublicId: string | null = null;
  @state() private reportMessageId: string | null = null;
  @state() private reportReason: ReportReason = "abusive_language";
  @state() private friendPendingIds: string[] = [];
  @state() private reportedMessageIds: string[] = [];
  @state() private panelOpen = false;
  @state() private unreadMessages = 0;
  @state() private activeTab: ChatTab = "public";
  @state() private friends: FriendEntry[] = [];
  @state() private friendsLoading = false;
  @state() private friendsFailed = false;
  @state() private friendRequests: FriendRequestsResponse | null = null;
  @state() private testIncomingRequests: ChatIdentity[] = [];
  @state() private testOutgoingRequests: ChatIdentity[] = [];
  @state() private testFriends: ChatIdentity[] = [];
  @state() private friendActionPending: string[] = [];
  @state() private selectedWhisper: {
    publicId: string;
    username: string;
  } | null = null;
  @state() private whisperMessages: WhisperMessage[] = [];
  @state() private unreadWhispers = 0;

  private socket: WebSocket | null = null;
  private reconnectTimer: number | null = null;
  private handshakeTimer: number | null = null;
  private friendRefreshTimer: number | null = null;
  private stopped = true;
  private pageObserver: MutationObserver | null = null;

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    const cachedUserMe = lastUserMeResponse();
    if (cachedUserMe) {
      this.accountHasRegisteredIdentity = responseHasLinkedIdentity(
        cachedUserMe.response,
      );
    }
    this.pageObserver = new MutationObserver(() => this.updateActivation());
    this.pageObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    window.addEventListener(
      GLOBAL_CHAT_AUTH_CHANGED_EVENT,
      this.handleAuthChanged,
    );
    document.addEventListener("userMeResponse", this.handleUserMeResponse);
    document.addEventListener("session-cleared", this.handleSessionCleared);
    window.addEventListener("global-chat-open-friends", this.handleOpenFriends);
    this.updateActivation();
  }

  disconnectedCallback() {
    this.pageObserver?.disconnect();
    this.pageObserver = null;
    window.removeEventListener(
      GLOBAL_CHAT_AUTH_CHANGED_EVENT,
      this.handleAuthChanged,
    );
    document.removeEventListener("userMeResponse", this.handleUserMeResponse);
    document.removeEventListener("session-cleared", this.handleSessionCleared);
    window.removeEventListener(
      "global-chat-open-friends",
      this.handleOpenFriends,
    );
    this.deactivate();
    super.disconnectedCallback();
  }

  private handleUserMeResponse = (
    event: CustomEvent<UserMeResponse | false>,
  ) => {
    const response = event.detail;
    const hasIdentity = responseHasLinkedIdentity(response);
    const identityChanged =
      hasIdentity !== this.accountHasRegisteredIdentity;
    this.accountHasRegisteredIdentity = hasIdentity;
    if (identityChanged && !this.stopped) this.handleAuthChanged();
  };

  private handleSessionCleared = () => {
    this.accountHasRegisteredIdentity = false;
    if (!this.stopped) this.handleAuthChanged();
  };

  private updateActivation() {
    const inGame = document.body.classList.contains("in-game");
    const shouldBeActive = this.gameMode ? inGame : !inGame;
    if (shouldBeActive === !this.stopped) return;
    if (shouldBeActive) {
      this.stopped = false;
      this.connect();
    } else {
      this.deactivate();
    }
  }

  private deactivate() {
    this.stopped = true;
    this.stopFriendRefresh();
    if (this.reconnectTimer !== null) window.clearTimeout(this.reconnectTimer);
    if (this.handshakeTimer !== null) window.clearTimeout(this.handshakeTimer);
    this.reconnectTimer = null;
    this.handshakeTimer = null;
    const socket = this.socket;
    this.socket = null;
    socket?.close();
  }

  protected updated() {
    const list = this.querySelector<HTMLElement>("[data-chat-messages]");
    if (list) list.scrollTop = list.scrollHeight;
  }

  private handleAuthChanged = () => {
    if (this.stopped) return;
    this.stopFriendRefresh();
    if (this.reconnectTimer !== null) {
      window.clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    const previousSocket = this.socket;
    this.socket = null;
    previousSocket?.close();
    this.connect();
  };

  private handleOpenFriends = () => {
    this.activeTab = "friends";
    this.panelOpen = true;
    this.unreadMessages = 0;
    if (this.registered) void this.loadFriends();
  };

  private connect() {
    if (this.stopped) return;
    this.connection = "connecting";
    this.authChecked = false;
    this.registered = false;
    this.currentPublicId = null;
    try {
      // Public and private chat are shared by all matches on this server;
      // game routes such as /w1/game/... must still use the w0 chat room.
      const socket = new WebSocket(`${ClientEnv.serverWsBase()}/w0/chat`);
      this.socket = socket;
      socket.addEventListener("open", async () => {
        const testSession =
          localStorage.getItem(GLOBAL_CHAT_TEST_SESSION_KEY) ??
          sessionStorage.getItem(GLOBAL_CHAT_TEST_SESSION_KEY);
        if (testSession) {
          socket.send(
            JSON.stringify({ type: "test_auth", token: testSession }),
          );
          this.handshakeTimer = window.setTimeout(() => {
            this.handshakeTimer = null;
            if (this.socket === socket && !this.authChecked) {
              socket.close();
            }
          }, 5000);
          return;
        }
        let authorization: string;
        try {
          authorization = await getAuthHeader();
        } catch (error) {
          console.warn("Global chat authentication failed", error);
          this.authChecked = true;
          this.registered = false;
          this.currentPublicId = null;
          this.chatError = chatText("global_chat.error");
          return;
        }
        if (socket.readyState !== WebSocket.OPEN) return;
        if (!authorization.startsWith("Bearer ")) {
          this.authChecked = true;
          this.registered = false;
          this.currentPublicId = null;
          return;
        }
        socket.send(
          JSON.stringify({
            type: "auth",
            token: authorization.slice("Bearer ".length),
          }),
        );
        this.handshakeTimer = window.setTimeout(() => {
          this.handshakeTimer = null;
          if (this.socket === socket && !this.authChecked) {
            socket.close();
          }
        }, 5000);
      });
      socket.addEventListener("message", (event) => {
        let decoded: unknown;
        try {
          decoded = JSON.parse(String(event.data));
        } catch {
          return;
        }
        const parsed = ChatEventSchema.safeParse(decoded);
        if (!parsed.success) return;
        if (parsed.data.type === "history") {
          this.connection = "online";
          this.messages = parsed.data.messages;
        } else if (parsed.data.type === "message") {
          this.messages = [...this.messages, parsed.data.message].slice(-80);
          if (this.gameMode && !this.panelOpen) this.unreadMessages++;
        } else if (parsed.data.type === "whisper") {
          const message = parsed.data.message;
          const isIncoming = message.from.publicId !== this.currentPublicId;
          const otherPublicId =
            !isIncoming
              ? message.toPublicId
              : message.from.publicId;
          const otherUsername =
            !isIncoming
              ? this.selectedWhisper?.publicId === otherPublicId
                ? this.selectedWhisper.username
                : "Player"
              : message.from.username;
          if (
            isIncoming &&
            (this.activeTab !== "whisper" ||
              this.selectedWhisper?.publicId !== otherPublicId)
          ) {
            this.unreadWhispers++;
          }
          this.selectedWhisper = {
            publicId: otherPublicId,
            username: otherUsername,
          };
          if (this.selectedWhisper?.publicId === otherPublicId) {
            this.whisperMessages = [...this.whisperMessages, message].slice(
              -80,
            );
          } else if (message.from.publicId !== this.currentPublicId) {
            this.unreadWhispers++;
          }
        } else if (parsed.data.type === "whisper_history") {
          if (this.selectedWhisper?.publicId === parsed.data.targetPublicId) {
            this.whisperMessages = parsed.data.messages;
          }
        } else if (parsed.data.type === "friend_state") {
          this.testIncomingRequests = parsed.data.incoming;
          this.testOutgoingRequests = parsed.data.outgoing;
          this.testFriends = parsed.data.friends;
          this.publishIncomingFriendRequestCount();
        } else if (parsed.data.type === "friend_request_result") {
          showToast(
            chatText(
              parsed.data.status === "accepted"
                ? "global_chat.friend_accepted"
                : "global_chat.friend_sent",
            ),
            "green",
          );
        } else if (parsed.data.type === "presence") {
          this.onlineCount = parsed.data.online;
        } else if (parsed.data.type === "auth") {
          this.authChecked = true;
          if (this.handshakeTimer !== null) {
            window.clearTimeout(this.handshakeTimer);
            this.handshakeTimer = null;
          }
          this.registered = parsed.data.registered;
          this.currentPublicId = parsed.data.identity?.publicId ?? null;
          this.chatError = parsed.data.registered
            ? ""
            : chatText("global_chat.sign_in_required");
          if (parsed.data.registered) {
            this.startFriendRefresh();
            void this.loadFriends();
          } else {
            this.stopFriendRefresh();
            localStorage.removeItem(GLOBAL_CHAT_TEST_SESSION_KEY);
            sessionStorage.removeItem(GLOBAL_CHAT_TEST_SESSION_KEY);
            this.friends = [];
            this.friendRequests = null;
            this.testIncomingRequests = [];
            this.testOutgoingRequests = [];
            this.testFriends = [];
            this.publishIncomingFriendRequestCount();
            this.selectedWhisper = null;
            this.whisperMessages = [];
          }
        } else if (parsed.data.type === "reported") {
          this.reportedMessageIds = [
            ...this.reportedMessageIds,
            parsed.data.messageId,
          ];
          this.reportMessageId = null;
          showToast(chatText("global_chat.report_sent"), "green");
        } else {
          this.chatError = parsed.data.message;
        }
      });
      socket.addEventListener("close", () => {
        if (this.socket === socket) this.scheduleReconnect();
      });
      socket.addEventListener("error", () => {
        this.connection = "offline";
        socket.close();
      });
    } catch {
      this.connection = "offline";
      this.scheduleReconnect();
    }
  }

  private scheduleReconnect() {
    this.stopFriendRefresh();
    if (this.handshakeTimer !== null) window.clearTimeout(this.handshakeTimer);
    this.handshakeTimer = null;
    this.connection = "offline";
    this.onlineCount = 0;
    this.registered = false;
    this.authChecked = false;
    this.currentPublicId = null;
    if (this.stopped || this.reconnectTimer !== null) return;
    this.reconnectTimer = window.setTimeout(() => {
      this.reconnectTimer = null;
      this.connect();
    }, 3000);
  }

  private sendMessage(event: Event) {
    event.preventDefault();
    const text = this.draft.trim();
    if (
      !text ||
      !this.registered ||
      text.length > 280 ||
      this.socket?.readyState !== WebSocket.OPEN
    ) {
      return;
    }
    if (this.activeTab === "whisper") {
      if (!this.selectedWhisper) return;
      this.socket.send(
        JSON.stringify({
          type: "whisper",
          targetPublicId: this.selectedWhisper.publicId,
          text,
        }),
      );
    } else {
      this.socket.send(JSON.stringify({ type: "send", text }));
    }
    this.draft = "";
    this.chatError = "";
  }

  private async requestFriend(publicId: string) {
    if (!this.registered || this.friendPendingIds.includes(publicId)) return;
    this.friendPendingIds = [...this.friendPendingIds, publicId];
    try {
      if (publicId.startsWith("dev-chat-")) {
        if (this.socket?.readyState !== WebSocket.OPEN) {
          showToast(chatText("global_chat.friend_failed"), "red");
          return;
        }
        this.socket.send(
          JSON.stringify({ type: "friend_request", targetPublicId: publicId }),
        );
        return;
      }
      const result = await sendFriendRequest(publicId);
      if (typeof result === "string") {
        showToast(chatText("global_chat.friend_failed"), "red");
        return;
      }
      showToast(
        chatText(
          result.status === "accepted"
            ? "global_chat.friend_accepted"
            : "global_chat.friend_sent",
        ),
        "green",
      );
      void this.loadFriends();
    } finally {
      this.friendPendingIds = this.friendPendingIds.filter(
        (id) => id !== publicId,
      );
    }
  }

  private async loadFriends() {
    if (!this.registered || this.friendsLoading) return;
    this.friendsLoading = true;
    this.friendsFailed = false;
    if (this.currentPublicId?.startsWith("dev-chat-")) {
      if (this.socket?.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify({ type: "friend_state" }));
      } else {
        this.friendsFailed = true;
      }
      this.friendsLoading = false;
      return;
    }
    const result = await fetchFriends(1, 100);
    this.friendsLoading = false;
    if (result === false) {
      this.friendsFailed = true;
      return;
    }
    this.friends = result.results;
    const requests = await fetchFriendRequests();
    if (requests === false) {
      this.friendsFailed = true;
      return;
    }
    this.friendRequests = requests;
    this.publishIncomingFriendRequestCount();
  }

  private publishIncomingFriendRequestCount(): void {
    setIncomingFriendRequestCount(this.incomingFriendRequestCount);
  }

  private stopFriendRefresh(): void {
    if (this.friendRefreshTimer !== null) {
      window.clearInterval(this.friendRefreshTimer);
      this.friendRefreshTimer = null;
    }
  }

  private startFriendRefresh(): void {
    this.stopFriendRefresh();
    this.friendRefreshTimer = window.setInterval(
      () => void this.loadFriends(),
      15_000,
    );
  }

  private async handleFriendRequestAction(
    publicId: string,
    action: "accept" | "reject",
  ) {
    if (this.friendActionPending.includes(publicId)) return;
    this.friendActionPending = [...this.friendActionPending, publicId];
    try {
      if (this.currentPublicId?.startsWith("dev-chat-")) {
        if (this.socket?.readyState !== WebSocket.OPEN) {
          showToast(chatText("global_chat.friend_failed"), "red");
          return;
        }
        this.socket.send(
          JSON.stringify({
            type: "friend_request_action",
            targetPublicId: publicId,
            action,
          }),
        );
        return;
      }
      const result =
        action === "accept"
          ? await acceptFriendRequest(publicId)
          : await deleteFriendRequest(publicId);
      if (result !== true) {
        showToast(chatText("global_chat.friend_failed"), "red");
        return;
      }
      await this.loadFriends();
    } finally {
      this.friendActionPending = this.friendActionPending.filter(
        (id) => id !== publicId,
      );
    }
  }

  private openWhisper(friend: { publicId: string; username: string }) {
    if (!this.registered || this.socket?.readyState !== WebSocket.OPEN) return;
    this.selectedWhisper = friend;
    this.whisperMessages = [];
    this.activeTab = "whisper";
    this.unreadWhispers = 0;
    this.socket.send(
      JSON.stringify({
        type: "whisper_history",
        targetPublicId: friend.publicId,
      }),
    );
  }

  private submitReport(messageId: string) {
    if (
      !this.registered ||
      this.socket?.readyState !== WebSocket.OPEN ||
      this.reportedMessageIds.includes(messageId)
    ) {
      return;
    }
    this.socket.send(
      JSON.stringify({
        type: "report",
        messageId,
        reason: this.reportReason,
      }),
    );
    this.reportMessageId = null;
  }

  private openAccountModal() {
    whenModalLoaded("account-modal", () => {
      document
        .querySelector<
          HTMLElement & { open(args?: Record<string, unknown>): void }
        >("account-modal")
        ?.open();
    });
  }

  private toggleGamePanel() {
    this.panelOpen = !this.panelOpen;
    if (this.panelOpen) this.unreadMessages = 0;
  }

  private renderFriends() {
    if (!this.registered) {
      return html`<p class="m-auto max-w-64 text-center text-sm text-zinc-400">
        ${chatText("global_chat.sign_in_required")}
      </p>`;
    }
    if (this.friendsLoading) {
      return html`<p class="m-auto text-sm text-zinc-400">
        ${chatText("global_chat.connecting")}
      </p>`;
    }
    if (this.friendsFailed) {
      return html`<p class="m-auto text-sm text-rose-300">
        ${chatText("global_chat.friends_failed")}
      </p>`;
    }
    const allFriends = [
      ...this.friends,
      ...this.testFriends.filter(
        (testFriend) =>
          !this.friends.some(
            (friend) => friend.publicId === testFriend.publicId,
          ),
      ),
    ];
    const incomingRequests = [
      ...(this.friendRequests?.incoming ?? []),
      ...this.testIncomingRequests,
    ];
    const outgoingRequests = [
      ...(this.friendRequests?.outgoing ?? []),
      ...this.testOutgoingRequests,
    ];
    if (
      allFriends.length === 0 &&
      incomingRequests.length === 0 &&
      outgoingRequests.length === 0
    ) {
      return html`<div class="m-auto max-w-64 text-center">
        <p class="text-sm font-bold text-zinc-300">
          ${chatText("global_chat.no_friends")}
        </p>
        <p class="mt-2 text-xs leading-5 text-zinc-500">
          ${chatText("global_chat.friends_hint")}
        </p>
      </div>`;
    }
    return html` ${incomingRequests.length
      ? html`<section class="space-y-2">
          <h3 class="text-xs font-bold text-amber-100">
            ${chatText("global_chat.friend_requests_incoming")}
            <span
              class="ms-1 rounded-full bg-rose-500 px-1.5 py-0.5 text-[9px] text-white"
              >${incomingRequests.length}</span
            >
          </h3>
          ${incomingRequests.map((request) => {
            const username = request.username ?? request.publicId;
            return html`<article
              class="flex items-center gap-2 rounded-2xl border border-amber-200/10 bg-white/[.035] p-3"
            >
              <span
                class="min-w-0 flex-1 truncate text-sm font-bold text-zinc-100"
                >${username}</span
              >
              <button
                type="button"
                class="rounded-lg bg-emerald-400/15 px-2.5 py-1.5 text-[10px] font-bold text-emerald-200 hover:bg-emerald-400/25 disabled:opacity-50"
                ?disabled=${this.friendActionPending.includes(request.publicId)}
                @click=${() =>
                  void this.handleFriendRequestAction(
                    request.publicId,
                    "accept",
                  )}
              >
                ${chatText("global_chat.friend_accept")}
              </button>
              <button
                type="button"
                class="rounded-lg bg-rose-400/10 px-2.5 py-1.5 text-[10px] font-bold text-rose-200 hover:bg-rose-400/20 disabled:opacity-50"
                ?disabled=${this.friendActionPending.includes(request.publicId)}
                @click=${() =>
                  void this.handleFriendRequestAction(
                    request.publicId,
                    "reject",
                  )}
              >
                ${chatText("global_chat.friend_reject")}
              </button>
            </article>`;
          })}
        </section>`
      : ""}
    ${allFriends.length
      ? html`<section class="space-y-2">
          <h3 class="text-xs font-bold text-amber-100">
            ${chatText("global_chat.online_friends")}
          </h3>
          ${allFriends.map((friend) => {
            const username = friend.username ?? friend.publicId;
            return html`<button
              type="button"
              class="flex w-full items-center gap-3 rounded-2xl border border-white/[.07] bg-white/[.035] p-3 text-right transition hover:border-amber-200/20 hover:bg-white/[.07]"
              @click=${() =>
                this.openWhisper({ publicId: friend.publicId, username })}
            >
              <span
                class="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-200/10 font-black text-amber-100"
                >${Array.from(username)[0]?.toUpperCase() ?? "?"}</span
              >
              <span
                class="min-w-0 flex-1 truncate text-sm font-bold text-zinc-100"
                >${username}</span
              >
              <span
                class="rounded-lg bg-amber-200/10 px-2.5 py-1.5 text-[10px] font-bold text-amber-100"
                >${chatText("global_chat.whisper")}</span
              >
            </button>`;
          })}
        </section>`
      : ""}
    ${outgoingRequests.length
      ? html`<section class="space-y-2">
          <h3 class="text-xs font-bold text-zinc-400">
            ${chatText("global_chat.friend_requests_outgoing")}
          </h3>
          ${outgoingRequests.map(
            (request) =>
              html`<p
                class="rounded-xl bg-white/[.025] px-3 py-2 text-xs text-zinc-400"
              >
                ${request.username ?? request.publicId} ·
                ${chatText("global_chat.friend_request_pending")}
              </p>`,
          )}
        </section>`
      : ""}
    ${allFriends.length === 0 &&
    incomingRequests.length === 0 &&
    outgoingRequests.length > 0
      ? html`<p class="mt-auto text-center text-xs text-zinc-500">
          ${chatText("global_chat.friends_hint")}
        </p>`
      : ""}`;
  }

  private get incomingFriendRequestCount(): number {
    return (
      this.testIncomingRequests.length +
      (this.friendRequests?.incoming.length ?? 0)
    );
  }

  private renderWhisper() {
    if (!this.selectedWhisper) {
      return html`<p class="m-auto max-w-64 text-center text-sm text-zinc-400">
        ${chatText("global_chat.select_friend")}
      </p>`;
    }
    return html`<div class="flex items-center gap-2">
        <button
          type="button"
          class="rounded-lg px-2 py-1 text-xs text-zinc-400 hover:bg-white/10 hover:text-white"
          @click=${() => (this.activeTab = "friends")}
        >
          ${chatText("global_chat.back_to_friends")}
        </button>
        <strong class="truncate text-sm text-amber-100"
          >${this.selectedWhisper.username}</strong
        >
      </div>
      ${this.whisperMessages.length === 0
        ? html`<p class="m-auto text-center text-sm text-zinc-500">
            ${chatText("global_chat.whisper_empty")}
          </p>`
        : this.whisperMessages.map((message) => {
            const own = message.from.publicId === this.currentPublicId;
            return html`<article class="flex max-w-full gap-3">
              <span
                class="grid size-8 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.06] text-xs font-black ${own
                  ? "text-amber-100"
                  : "text-sky-100"}"
                >${Array.from(message.from.username)[0]?.toUpperCase() ??
                "?"}</span
              >
              <div class="min-w-0 flex-1">
                <div class="mb-1 flex items-baseline justify-between gap-2">
                  <strong class="truncate text-xs text-zinc-200"
                    >${own
                      ? chatText("global_chat.you")
                      : message.from.username}</strong
                  >
                  <time class="shrink-0 text-[10px] text-zinc-500"
                    >${new Date(message.sentAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}</time
                  >
                </div>
                <p
                  class="break-words rounded-2xl border border-white/[.06] bg-white/[.045] px-3.5 py-2.5 text-sm leading-6 text-zinc-200"
                >
                  ${message.text}
                </p>
              </div>
            </article>`;
          })}`;
  }

  render() {
    return html`
      <aside
        class="${this.gameMode
          ? "fixed bottom-4 left-4 z-[250] w-[min(22rem,calc(100vw-2rem))]"
          : "block min-w-0"}"
        dir="rtl"
      >
        ${this.gameMode && !this.panelOpen
          ? html`<button
              type="button"
              class="flex items-center gap-3 rounded-2xl border border-amber-200/20 bg-zinc-950/90 px-4 py-3 text-right text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:border-amber-200/40 hover:bg-zinc-900"
              aria-label=${chatText("global_chat.title")}
              @click=${() => this.toggleGamePanel()}
            >
              <span
                class="grid size-10 place-items-center rounded-xl bg-amber-200/10 text-lg text-amber-100"
                aria-hidden="true"
                >✦</span
              >
              <span class="min-w-0">
                <span class="block text-sm font-black"
                  >${chatText("global_chat.title")}</span
                >
                <span class="mt-0.5 block text-[10px] text-zinc-400"
                  >${this.connection === "online"
                    ? `${this.onlineCount} ${chatText("global_chat.members")}`
                    : chatText(`global_chat.${this.connection}`)}</span
                >
              </span>
              ${this.unreadMessages + this.unreadWhispers + this.incomingFriendRequestCount
                ? html`<span
                    class="grid min-w-6 place-items-center rounded-full bg-rose-500 px-1.5 py-1 text-[10px] font-black"
                    >${this.unreadMessages +
                    this.unreadWhispers +
                    this.incomingFriendRequestCount}</span
                  >`
                : ""}
            </button>`
          : ""}
        ${!this.gameMode || this.panelOpen
          ? html`
              <section
                class="flex ${this.gameMode
                  ? "h-[min(32rem,calc(100dvh-2rem))] min-h-[20rem]"
                  : "h-[590px] min-h-[500px]"} w-full flex-col overflow-hidden rounded-3xl border border-amber-200/15 bg-gradient-to-b from-[#17181b] via-[#101114] to-[#0b0c0e] text-white shadow-[0_24px_70px_rgba(0,0,0,.45)] ring-1 ring-white/[.04]"
                aria-label=${chatText("global_chat.title")}
              >
                <header
                  class="relative overflow-hidden border-b border-white/[.08] px-5 pb-4 pt-5"
                >
                  <div
                    class="pointer-events-none absolute -left-10 -top-16 size-40 rounded-full bg-amber-300/10 blur-3xl"
                  ></div>
                  <div class="relative flex items-start justify-between gap-3">
                    <div class="min-w-0">
                      <div class="mb-2 flex items-center gap-2">
                        <span
                          class="rounded-full border border-amber-200/20 bg-amber-200/[.08] px-2.5 py-1 text-[10px] font-black tracking-wide text-amber-100"
                        >
                          ${chatText("global_chat.public")}
                        </span>
                        <span
                          class="flex items-center gap-1.5 text-[10px] text-zinc-400"
                        >
                          <span
                            class="size-2 rounded-full ${this.connection ===
                            "online"
                              ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]"
                              : this.connection === "offline"
                                ? "bg-rose-400"
                                : "bg-amber-300"}"
                          ></span>
                          ${chatText(`global_chat.${this.connection}`)}
                        </span>
                      </div>
                      <h2 class="text-xl font-black tracking-tight">
                        ${chatText("global_chat.title")}
                      </h2>
                      <p
                        class="mt-1.5 max-w-[28rem] text-xs leading-5 text-zinc-400"
                      >
                        ${chatText("global_chat.public_notice")}
                      </p>
                    </div>
                    ${this.gameMode
                      ? html`<button
                          type="button"
                          class="grid size-9 shrink-0 place-items-center rounded-xl border border-white/10 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                          aria-label=${chatText("common.close")}
                          @click=${() => this.toggleGamePanel()}
                        >
                          ✕
                        </button>`
                      : ""}
                    <div
                      class="flex shrink-0 items-center gap-2 rounded-xl border border-white/[.08] bg-black/20 px-3 py-2"
                    >
                      <span
                        class="size-2 rounded-full ${this.connection ===
                        "online"
                          ? "bg-emerald-400"
                          : "bg-zinc-600"}"
                      ></span>
                      <span class="text-xs font-bold text-zinc-200"
                        >${this.connection === "online"
                          ? this.onlineCount
                          : "—"}</span
                      >
                      <span class="text-[10px] text-zinc-500"
                        >${chatText("global_chat.members")}</span
                      >
                    </div>
                  </div>
                </header>

                <nav
                  class="flex shrink-0 gap-1 border-b border-white/[.08] bg-black/20 p-2"
                  aria-label=${chatText("global_chat.title")}
                >
                  <button
                    type="button"
                    class="flex-1 rounded-xl px-3 py-2 text-xs font-bold transition ${this
                      .activeTab === "public"
                      ? "bg-amber-200/15 text-amber-100"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"}"
                    aria-pressed=${this.activeTab === "public"}
                    @click=${() => (this.activeTab = "public")}
                  >
                    ${chatText("global_chat.public_tab")}
                  </button>
                  <button
                    type="button"
                    class="flex-1 rounded-xl px-3 py-2 text-xs font-bold transition ${this
                      .activeTab === "friends"
                      ? "bg-amber-200/15 text-amber-100"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"}"
                    aria-pressed=${this.activeTab === "friends"}
                    @click=${() => {
                      this.activeTab = "friends";
                      if (this.registered) void this.loadFriends();
                    }}
                  >
                    ${chatText("global_chat.friends")}
                      ${this.incomingFriendRequestCount > 0
                        ? html`<span
                            class="ms-1 rounded-full bg-rose-500 px-1.5 py-0.5 text-[9px] text-white"
                            >${this.incomingFriendRequestCount}</span
                          >`
                      : ""}
                  </button>
                  ${this.selectedWhisper
                    ? html`<button
                        type="button"
                        class="flex-1 rounded-xl px-3 py-2 text-xs font-bold transition ${this
                          .activeTab === "whisper"
                          ? "bg-amber-200/15 text-amber-100"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"}"
                        aria-pressed=${this.activeTab === "whisper"}
                        @click=${() => (this.activeTab = "whisper")}
                      >
                        ${chatText("global_chat.whisper")}
                        ${this.unreadWhispers > 0
                          ? html`<span
                              class="ms-1 rounded-full bg-rose-500 px-1.5 py-0.5 text-[9px]"
                              >${this.unreadWhispers}</span
                            >`
                          : ""}
                      </button>`
                    : ""}
                </nav>

                <div
                  data-chat-messages
                  class="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto bg-[radial-gradient(ellipse_at_top,rgba(245,190,70,.035),transparent_60%)] px-5 py-5"
                  aria-live="polite"
                >
                  ${this.activeTab === "friends"
                    ? this.renderFriends()
                    : this.activeTab === "whisper"
                      ? this.renderWhisper()
                      : this.messages.length === 0
                        ? html`<div class="m-auto max-w-64 text-center">
                            <div
                              class="mx-auto mb-4 grid size-14 place-items-center rounded-2xl border border-amber-100/10 bg-gradient-to-br from-amber-200/[.12] to-white/[.02] text-2xl text-amber-100 shadow-inner"
                              aria-hidden="true"
                            >
                              ✦
                            </div>
                            <p class="text-sm font-bold text-zinc-300">
                              ${chatText("global_chat.empty")}
                            </p>
                            <p class="mt-2 text-xs leading-5 text-zinc-500">
                              ${chatText("global_chat.empty_hint")}
                            </p>
                          </div>`
                        : this.messages.map(
                            (message) => html`
                              <article class="flex max-w-full gap-3">
                                <span
                                  class="grid size-9 shrink-0 place-items-center rounded-xl border border-amber-100/10 bg-gradient-to-br from-amber-200/20 to-zinc-800 text-sm font-black text-amber-100"
                                  aria-hidden="true"
                                  >${Array.from(
                                    message.username,
                                  )[0]?.toUpperCase() ?? "?"}</span
                                >
                                <div class="min-w-0 flex-1">
                                  <div
                                    class="mb-1.5 flex items-baseline justify-between gap-2"
                                  >
                                    <strong
                                      class="truncate text-xs font-bold text-amber-100"
                                      >${message.username}</strong
                                    >
                                    <time
                                      class="shrink-0 text-[10px] text-zinc-500"
                                      >${new Date(
                                        message.sentAt,
                                      ).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      })}</time
                                    >
                                  </div>
                                  <p
                                    class="break-words rounded-2xl rounded-tr-md border border-white/[.06] bg-white/[.045] px-3.5 py-2.5 text-sm leading-6 text-zinc-200"
                                  >
                                    ${message.text}
                                  </p>
                                  ${this.registered &&
                                  message.publicId !== this.currentPublicId
                                    ? html`
                                        <div
                                          class="mt-2 flex items-center gap-3"
                                        >
                                          <button
                                            class="text-[10px] font-semibold text-zinc-500 transition hover:text-sky-200"
                                            @click=${() =>
                                              this.openWhisper({
                                                publicId: message.publicId,
                                                username: message.username,
                                              })}
                                          >
                                            ${chatText("global_chat.whisper")}
                                          </button>
                                          <button
                                            class="text-[10px] font-semibold text-zinc-500 transition hover:text-amber-200 disabled:cursor-wait disabled:opacity-50"
                                            ?disabled=${this.friendPendingIds.includes(
                                              message.publicId,
                                            )}
                                            @click=${() =>
                                              void this.requestFriend(
                                                message.publicId,
                                              )}
                                          >
                                            ${chatText(
                                              "global_chat.friend_request",
                                            )}
                                          </button>
                                          <button
                                            class="text-[10px] font-semibold text-zinc-500 transition hover:text-rose-300 disabled:opacity-50"
                                            ?disabled=${this.reportedMessageIds.includes(
                                              message.id,
                                            )}
                                            @click=${() =>
                                              (this.reportMessageId =
                                                this.reportMessageId ===
                                                message.id
                                                  ? null
                                                  : message.id)}
                                          >
                                            ${this.reportedMessageIds.includes(
                                              message.id,
                                            )
                                              ? chatText(
                                                  "global_chat.report_sent",
                                                )
                                              : chatText("global_chat.report")}
                                          </button>
                                        </div>
                                        ${this.reportMessageId === message.id
                                          ? html`<div
                                              class="mt-2 flex flex-wrap items-center gap-2"
                                            >
                                              <select
                                                class="min-w-0 flex-1 rounded-lg border border-white/10 bg-zinc-900 px-2 py-1.5 text-[10px] text-zinc-200"
                                                .value=${this.reportReason}
                                                @change=${(event: Event) => {
                                                  this.reportReason = (
                                                    event.target as HTMLSelectElement
                                                  ).value as ReportReason;
                                                }}
                                              >
                                                <option
                                                  value="abusive_language"
                                                >
                                                  ${chatText(
                                                    "global_chat.report_abusive_language",
                                                  )}
                                                </option>
                                                <option value="harassment">
                                                  ${chatText(
                                                    "global_chat.report_harassment",
                                                  )}
                                                </option>
                                                <option value="spam">
                                                  ${chatText(
                                                    "global_chat.report_spam",
                                                  )}
                                                </option>
                                                <option value="other">
                                                  ${chatText(
                                                    "global_chat.report_other",
                                                  )}
                                                </option>
                                              </select>
                                              <button
                                                class="rounded-lg bg-rose-400/15 px-2.5 py-1.5 text-[10px] font-bold text-rose-200 hover:bg-rose-400/25"
                                                @click=${() =>
                                                  this.submitReport(message.id)}
                                              >
                                                ${chatText(
                                                  "global_chat.submit_report",
                                                )}
                                              </button>
                                            </div>`
                                          : ""}
                                      `
                                    : ""}
                                </div>
                              </article>
                            `,
                          )}
                </div>

                <div class="border-t border-white/[.08] bg-black/20 p-4">
                  ${this.activeTab === "friends" && this.registered
                    ? ""
                    : !this.authChecked
                      ? html`<p
                          class="px-2 py-3 text-center text-xs text-zinc-400"
                        >
                          ${chatText("global_chat.auth_checking")}
                        </p>`
                      : this.registered
                        ? html`<form @submit=${this.sendMessage}>
                            <div
                              class="flex items-end gap-2 rounded-2xl border border-white/10 bg-[#090a0c] p-2 transition focus-within:border-amber-200/35 focus-within:shadow-[0_0_0_3px_rgba(251,191,36,.06)]"
                            >
                              <textarea
                                class="min-h-11 max-h-24 min-w-0 flex-1 resize-y bg-transparent px-2 py-2 text-sm leading-5 text-white outline-none placeholder:text-zinc-600"
                                rows="1"
                                maxlength="280"
                                placeholder=${this.activeTab === "whisper"
                                  ? chatText("global_chat.whisper_message")
                                  : chatText("global_chat.message")}
                                .value=${this.draft}
                                @input=${(event: InputEvent) => {
                                  this.draft = (
                                    event.target as HTMLTextAreaElement
                                  ).value;
                                }}
                              ></textarea>
                              <button
                                type="submit"
                                class="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-gradient-to-br from-amber-200 to-amber-400 px-4 text-sm font-black text-zinc-950 shadow-lg shadow-amber-950/20 transition hover:from-amber-100 hover:to-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
                                ?disabled=${this.connection !== "online" ||
                                this.draft.trim().length === 0}
                              >
                                <span>${chatText("global_chat.send")}</span>
                                <span aria-hidden="true">↑</span>
                              </button>
                            </div>
                            <div
                              class="mt-2 flex items-center justify-between px-1"
                            >
                              <span class="text-[10px] text-zinc-500"
                                >${this.activeTab === "whisper"
                                  ? chatText("global_chat.whisper_to").replace(
                                      "{username}",
                                      this.selectedWhisper?.username ?? "",
                                    )
                                  : chatText("global_chat.public")}</span
                              >
                              <span class="text-[10px] text-zinc-600"
                                >${this.draft.length}/280</span
                              >
                            </div>
                          </form>`
                        : this.accountHasRegisteredIdentity
                          ? html`<div class="space-y-3 px-1 py-1 text-center">
                              <p class="text-xs leading-6 text-zinc-400">
                                ${chatText(
                                  "global_chat.account_verification_failed",
                                )}
                              </p>
                              <button
                                type="button"
                                class="rounded-xl border border-amber-200/25 bg-amber-200/[.08] px-4 py-2 text-xs font-bold text-amber-100 transition hover:bg-amber-200/[.14]"
                                @click=${this.handleAuthChanged}
                              >
                                ${chatText("global_chat.retry")}
                              </button>
                            </div>`
                          : html`<div class="space-y-3 px-1 py-1 text-center">
                            <p class="text-xs leading-6 text-zinc-400">
                              ${chatText("global_chat.sign_in_required")}
                            </p>
                            <div class="flex justify-center gap-2">
                              <button
                                type="button"
                                class="rounded-xl border border-amber-200/25 bg-amber-200/[.08] px-4 py-2 text-xs font-bold text-amber-100 transition hover:bg-amber-200/[.14]"
                                @click=${() => this.openAccountModal()}
                              >
                                ${chatText("global_chat.sign_in")}
                              </button>
                              <button
                                type="button"
                                class="rounded-xl bg-gradient-to-br from-amber-200 to-amber-400 px-4 py-2 text-xs font-black text-zinc-950 transition hover:from-amber-100 hover:to-amber-300"
                                @click=${() => this.openAccountModal()}
                              >
                                ${chatText("global_chat.sign_up")}
                              </button>
                            </div>
                            <p class="text-[10px] text-zinc-600">
                              ${chatText("global_chat.phone_auth_coming_soon")}
                            </p>
                          </div>`}
                  ${this.chatError
                    ? html`<p class="mt-2 text-xs text-rose-300" role="status">
                        ${this.chatError}
                      </p>`
                    : ""}
                </div>
              </section>
            `
          : ""}
      </aside>
    `;
  }
}
