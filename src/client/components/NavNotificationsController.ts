import { ReactiveController, ReactiveControllerHost } from "lit";
import { getCosmeticsHash } from "../Cosmetics";
import {
  getIncomingFriendRequestCount,
  GLOBAL_CHAT_FRIEND_REQUESTS_CHANGED_EVENT,
} from "../GlobalChatAuth";
import { getGamesPlayed } from "../Utils";

const HELP_SEEN_KEY = "helpSeen";
const STORE_SEEN_HASH_KEY = "storeSeenHash";

/**
 * Shared dot state for the nav.
 *
 * One store, not one per component: cosmetic updates take priority over the
 * help prompt, and their affordances live in separate nav components.
 */
class NavNotificationsStore {
  private hosts = new Set<ReactiveControllerHost>();
  private loaded = false;
  private listeningForFriendRequests = false;

  private _helpSeen = false;
  private _hasNewCosmetics = false;
  private _incomingFriendRequests = getIncomingFriendRequestCount();

  subscribe(host: ReactiveControllerHost): void {
    this.hosts.add(host);
    if (!this.listeningForFriendRequests) {
      window.addEventListener(
        GLOBAL_CHAT_FRIEND_REQUESTS_CHANGED_EVENT,
        this.handleFriendRequestsChanged,
      );
      this.listeningForFriendRequests = true;
    }
    this.load();
  }

  unsubscribe(host: ReactiveControllerHost): void {
    this.hosts.delete(host);
    if (this.hosts.size === 0 && this.listeningForFriendRequests) {
      window.removeEventListener(
        GLOBAL_CHAT_FRIEND_REQUESTS_CHANGED_EVENT,
        this.handleFriendRequestsChanged,
      );
      this.listeningForFriendRequests = false;
    }
  }

  private handleFriendRequestsChanged = (event: Event): void => {
    this._incomingFriendRequests = (
      event as CustomEvent<number>
    ).detail;
    this.notify();
  };

  private notify(): void {
    for (const host of this.hosts) host.requestUpdate();
  }

  // Read once per page load; every later subscriber reuses the result.
  private load(): void {
    if (this.loaded) return;
    this.loaded = true;

    this._helpSeen = localStorage.getItem(HELP_SEEN_KEY) === "true";

    getCosmeticsHash()
      .then((hash: string | null) => {
        const seenHash = localStorage.getItem(STORE_SEEN_HASH_KEY);
        this._hasNewCosmetics = hash !== null && hash !== seenHash;
        this.notify();
      })
      .catch(() => {});
  }

  // Only show one dot at a time to prevent overwhelming users.
  showStoreDot(): boolean {
    return this._hasNewCosmetics;
  }

  showHelpDot(): boolean {
    return getGamesPlayed() < 10 && !this._helpSeen && !this.showStoreDot();
  }

  friendRequestCount(): number {
    return this._incomingFriendRequests;
  }

  onStoreClick = (): void => {
    this._hasNewCosmetics = false;
    getCosmeticsHash()
      .then((hash: string | null) => {
        if (hash !== null) {
          localStorage.setItem(STORE_SEEN_HASH_KEY, hash);
        }
      })
      .catch(() => {});
    this.notify();
  };

  onHelpClick = (): void => {
    localStorage.setItem(HELP_SEEN_KEY, "true");
    this._helpSeen = true;
    this.notify();
  };

  /** Test seam: drop all state so a fresh load re-reads localStorage. */
  reset(): void {
    if (this.listeningForFriendRequests) {
      window.removeEventListener(
        GLOBAL_CHAT_FRIEND_REQUESTS_CHANGED_EVENT,
        this.handleFriendRequestsChanged,
      );
      this.listeningForFriendRequests = false;
    }
    this.hosts.clear();
    this.loaded = false;
    this._helpSeen = false;
    this._hasNewCosmetics = false;
    this._incomingFriendRequests = getIncomingFriendRequestCount();
  }
}

export const navNotifications = new NavNotificationsStore();

/**
 * Host-facing view of {@link navNotifications}: keeps the component subscribed
 * for its lifetime and forwards the dot queries and click handlers.
 */
export class NavNotificationsController implements ReactiveController {
  private host: ReactiveControllerHost;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  hostConnected(): void {
    navNotifications.subscribe(this.host);
  }

  hostDisconnected(): void {
    navNotifications.unsubscribe(this.host);
  }

  showStoreDot(): boolean {
    return navNotifications.showStoreDot();
  }

  showHelpDot(): boolean {
    return navNotifications.showHelpDot();
  }

  friendRequestCount(): number {
    return navNotifications.friendRequestCount();
  }

  onStoreClick = (): void => navNotifications.onStoreClick();
  onHelpClick = (): void => navNotifications.onHelpClick();
}
