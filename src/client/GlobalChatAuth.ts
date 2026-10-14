export const GLOBAL_CHAT_TEST_SESSION_KEY =
  "openfront_global_chat_test_session";
export const GLOBAL_CHAT_AUTH_CHANGED_EVENT = "global-chat-auth-changed";
export const GLOBAL_CHAT_FRIEND_REQUESTS_CHANGED_EVENT =
  "global-chat-friend-requests-changed";

let incomingFriendRequestCount = 0;

export function setIncomingFriendRequestCount(count: number): void {
  incomingFriendRequestCount = count;
  window.dispatchEvent(
    new CustomEvent(GLOBAL_CHAT_FRIEND_REQUESTS_CHANGED_EVENT, {
      detail: count,
    }),
  );
}

export function getIncomingFriendRequestCount(): number {
  return incomingFriendRequestCount;
}
