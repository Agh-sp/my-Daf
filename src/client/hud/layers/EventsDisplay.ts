import { AllPlayers, MessageType } from "@openfront/engine-api/game/GameTypes";
import {
  AllianceExpiredUpdate,
  AllianceRequestReplyUpdate,
  BrokeAllianceUpdate,
  DisplayChatMessageUpdate,
  DisplayMessageUpdate,
  DonateEventUpdate,
  EmojiUpdate,
  GameUpdateType,
  TargetPlayerUpdate,
  TradeOfferView,
  UnitIncomingUpdate,
} from "@openfront/engine-api/game/GameUpdates";
import { EventBus } from "@openfront/shared/EventBus";
import { html, LitElement } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { DirectiveResult } from "lit/directive.js";
import { unsafeHTML, UnsafeHTMLDirective } from "lit/directives/unsafe-html.js";
import { Controller } from "../../Controller";
import {
  RespondTradeOfferIntentEvent,
  SendAllianceRejectIntentEvent,
  SendAllianceRequestIntentEvent,
} from "../../Transport";
import { UserSettings } from "../../UserSettings";

import { GoToPlayerEvent, GoToUnitEvent } from "../../TransformHandler";
import { GameView, PlayerView, UnitView } from "../../view";
import { onlyImages } from "./OnlyImages";

import { renderNumber, renderTroops } from "@openfront/engine-lib/Format";
import { PlaySoundEffectEvent } from "../../sound/Sounds";
import { UIState } from "../../UIState";
import { getMessageTypeClasses, translateText } from "../../Utils";

interface GameEvent {
  description: string;
  unsafeDescription?: boolean;
  type: MessageType;
  highlight?: boolean;
  /** Show in the small feed even if the type is normally tier 1. */
  minor?: boolean;
  createdAt: number;
  onDelete?: () => void;
  focusID?: number;
  unitView?: UnitView;
  requestorID?: number;
  duration?: number;
}

const WAR_NEWS_TYPES: ReadonlySet<MessageType> = new Set([
  MessageType.NUKE_INBOUND,
  MessageType.HYDROGEN_BOMB_INBOUND,
  MessageType.MIRV_INBOUND,
  MessageType.NUKE_DETONATED,
  MessageType.NAVAL_INVASION_INBOUND,
  MessageType.CONQUERED_PLAYER,
  MessageType.ATTACK_REQUEST,
]);

const isWarNews = (type: MessageType): boolean => WAR_NEWS_TYPES.has(type);

interface UiSuggestionDetail {
  description: string;
  type: MessageType;
  createdAt: number;
  focusID?: number;
  requestorID?: number;
  duration?: number;
  minor?: boolean;
}

@customElement("events-display")
export class EventsDisplay extends LitElement implements Controller {
  public eventBus: EventBus;
  public game: GameView;
  public uiState: UIState;

  private active: boolean = false;
  private events: GameEvent[] = [];
  private userSettings = new UserSettings();

  @state() private _isVisible: boolean = false;
  @state() private _isCollapsed = false;

  @query(".events-container")
  private _eventsContainer?: HTMLDivElement;
  private _shouldScrollToBottom = true;

  updated(changed: Map<string, unknown>) {
    super.updated(changed);
    if (this._eventsContainer && this._shouldScrollToBottom) {
      this._eventsContainer.scrollTop = this._eventsContainer.scrollHeight;
    }
  }

  private renderButton(options: {
    content: unknown;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    translate?: boolean;
    hidden?: boolean;
  }) {
    const {
      content,
      onClick,
      className = "",
      disabled = false,
      translate = true,
      hidden = false,
    } = options;
    if (hidden) {
      return html``;
    }
    return html`
      <button
        class="${className}"
        @click=${onClick}
        ?disabled=${disabled}
        ?translate=${translate}
      >
        ${content}
      </button>
    `;
  }

  private updateMap = [
    [GameUpdateType.DisplayEvent, this.onDisplayMessageEvent.bind(this)],
    [GameUpdateType.DisplayChatEvent, this.onDisplayChatEvent.bind(this)],
    [
      GameUpdateType.AllianceRequestReply,
      this.onAllianceRequestReplyEvent.bind(this),
    ],
    [GameUpdateType.BrokeAlliance, this.onBrokeAllianceEvent.bind(this)],
    [GameUpdateType.TargetPlayer, this.onTargetPlayerEvent.bind(this)],
    [GameUpdateType.Emoji, this.onEmojiMessageEvent.bind(this)],
    [GameUpdateType.UnitIncoming, this.onUnitIncomingEvent.bind(this)],
    [GameUpdateType.AllianceExpired, this.onAllianceExpiredEvent.bind(this)],
    [GameUpdateType.DonateEvent, this.onDonateEvent.bind(this)],
  ] as const;

  constructor() {
    super();
    this.events = [];
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener(
      "ui-suggestion",
      this.onUiSuggestion as EventListener,
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(
      "ui-suggestion",
      this.onUiSuggestion as EventListener,
    );
  }

  private onUiSuggestion = (e: Event) => {
    if (!(e instanceof CustomEvent)) return;
    const detail = (e as CustomEvent<UiSuggestionDetail>).detail;
    if (
      !detail ||
      typeof detail.description !== "string" ||
      typeof detail.type !== "number" ||
      !Number.isFinite(detail.createdAt) ||
      (detail.focusID !== undefined && typeof detail.focusID !== "number") ||
      (detail.focusID !== undefined && !Number.isFinite(detail.focusID)) ||
      (detail.requestorID !== undefined &&
        (typeof detail.requestorID !== "number" ||
          !Number.isFinite(detail.requestorID))) ||
      (detail.duration !== undefined &&
        (!Number.isFinite(detail.duration) || detail.duration < 0))
    ) {
      return;
    }

    this.addEvent({
      description: detail.description,
      type: detail.type,
      createdAt: detail.createdAt,
      focusID: detail.focusID,
      requestorID: detail.requestorID,
      duration: detail.duration,
      minor: detail.minor ?? true,
    });
  };

  init() {
    this.eventBus.on(
      SendAllianceRequestIntentEvent,
      this.onAllianceRequestSentConfirmation.bind(this),
    );
  }

  private onAllianceRequestSentConfirmation(e: SendAllianceRequestIntentEvent) {
    const myPlayer = this.game.myPlayer();
    if (!myPlayer || e.requestor.id() !== myPlayer.id()) {
      return;
    }
    // If the recipient already has a pending alliance request to us, this
    // action accepts that request instead of sending a new one, so don't
    // show the "alliance request sent" confirmation.
    if (e.recipient.isRequestingAllianceWith(e.requestor)) {
      return;
    }
    this.addEvent({
      description: translateText("events_display.alliance_request_sent", {
        name: e.recipient.displayName(),
      }),
      type: MessageType.ALLIANCE_REQUEST,
      createdAt: this.game.ticks(),
    });
  }

  tick() {
    this.active = true;

    if (this._eventsContainer) {
      const el = this._eventsContainer;
      this._shouldScrollToBottom =
        el.scrollHeight - el.scrollTop - el.clientHeight < 5;
    } else {
      this._shouldScrollToBottom = true;
    }

    if (!this._isVisible && !this.game.inSpawnPhase()) {
      this._isVisible = true;
      this.requestUpdate();
    }

    const myPlayer = this.game.myPlayer();
    if (!myPlayer || !myPlayer.isAlive()) {
      if (this._isVisible) {
        this._isVisible = false;
        this.requestUpdate();
      }
      return;
    }

    const updates = this.game.updatesSinceLastTick();
    if (updates) {
      for (const [ut, fn] of this.updateMap) {
        updates[ut]?.forEach(fn as (event: unknown) => void);
      }
    }

    let remainingEvents = this.events.filter((event) => {
      const lifetime = event.duration ?? 80;
      const expired = this.game.ticks() - event.createdAt >= lifetime;
      const staleAllianceRequest =
        event.type === MessageType.ALLIANCE_REQUEST &&
        event.requestorID !== undefined &&
        !this.getRespondableAllianceRequest(event);
      const isInboundWarning =
        event.type === MessageType.NUKE_INBOUND ||
        event.type === MessageType.HYDROGEN_BOMB_INBOUND ||
        event.type === MessageType.MIRV_INBOUND ||
        event.type === MessageType.NAVAL_INVASION_INBOUND;
      const unitGone =
        isInboundWarning &&
        event.unitView !== undefined &&
        !event.unitView.isActive();
      const shouldKeep = !expired && !unitGone && !staleAllianceRequest;
      if (!shouldKeep && event.onDelete) {
        event.onDelete();
      }
      return shouldKeep;
    });

    if (remainingEvents.length > 30) {
      remainingEvents = remainingEvents.slice(-30);
    }

    if (this.events.length !== remainingEvents.length) {
      this.events = remainingEvents;
      this.requestUpdate();
    }

    for (const attack of myPlayer.incomingAttacks()) {
      const attackerSmallID = attack.attackerID;
      const attacker = this.game.playerBySmallID(attackerSmallID);
      if (!attacker.isPlayer()) continue;
      const attackerView = attacker as PlayerView;
      if (myPlayer.isFriendly(attackerView)) continue;

      const attackerID = attackerView.smallID();
      const alreadyReported = this.events.some(
        (event) =>
          event.type === MessageType.ATTACK_REQUEST &&
          event.focusID === attackerID,
      );
      if (!alreadyReported) {
        this.addEvent({
          description: translateText("events_display.land_attack_inbound", {
            name: attackerView.displayName(),
          }),
          type: MessageType.ATTACK_REQUEST,
          createdAt: this.game.ticks(),
          focusID: attackerID,
          duration: 100,
        });
      }
    }

    this.requestUpdate();
  }

  private addEvent(event: GameEvent) {
    const maxEvents = 200;

    const dedupKey = `${event.description}::${Math.floor(event.createdAt / 1000)}`;
    const already = this.events.some((e) => {
      const key = `${e.description}::${Math.floor(e.createdAt / 1000)}`;
      return key === dedupKey;
    });
    if (already) return;

    const merged = [...this.events, event];
    merged.sort((a, b) => a.createdAt - b.createdAt);
    this.events = merged.slice(-maxEvents);
    this.requestUpdate();
  }

  // The core simulation runs identically for every client and has no notion
  // of Anonymous Names, so a params.name value it bakes into a DisplayEvent
  // is always the subject's real name. When the message identifies that
  // subject via focusPlayerID, re-resolve the name through this viewer's own
  // PlayerView instead, which already respects the local Anonymous Names
  // setting - otherwise a message like "X conquered you" leaks X's real name
  // even when this viewer has Anonymous Names turned on.
  private resolveParams(
    event: DisplayMessageUpdate,
  ): Record<string, string | number> {
    let params = event.params ?? {};
    if (
      (event.message === "events_display.missile_intercepted" ||
        event.message === "events_display.unit_destroyed") &&
      typeof params.unit === "string" &&
      params.unit.startsWith("unit_type.")
    ) {
      params = { ...params, unit: translateText(params.unit) };
    }

    if (params.name === undefined || event.focusPlayerID === undefined) {
      return params;
    }
    const subject = this.game.playerBySmallID(event.focusPlayerID);
    if (!subject.isPlayer()) {
      return params;
    }
    return { ...params, name: subject.displayName() };
  }

  onDisplayMessageEvent(event: DisplayMessageUpdate) {
    const myPlayer = this.game.myPlayer();
    if (
      event.playerID !== null &&
      (!myPlayer || myPlayer.smallID() !== event.playerID)
    ) {
      return;
    }

    let description: string = event.message;
    if (event.message.startsWith("events_display.")) {
      description = translateText(event.message, this.resolveParams(event));
    }

    const unitView =
      event.unitID !== undefined ? this.game.unit(event.unitID) : undefined;
    this.addEvent({
      description: description,
      createdAt: this.game.ticks(),
      highlight: true,
      type: event.messageType,
      unsafeDescription: true,
      unitView: unitView,
      focusID: event.focusPlayerID,
      minor:
        event.message === "events_display.received_gold_from_captured_ship",
    });
  }

  onDisplayChatEvent(event: DisplayChatMessageUpdate) {
    const myPlayer = this.game.myPlayer();
    if (
      event.playerID === null ||
      !myPlayer ||
      myPlayer.smallID() !== event.playerID
    ) {
      return;
    }

    const baseMessage = translateText(`chat.${event.category}.${event.key}`);
    let translatedMessage = baseMessage;
    if (event.target) {
      try {
        const targetPlayer = this.game.player(event.target);
        const targetName = targetPlayer?.displayName() ?? event.target;
        translatedMessage = baseMessage.replace("[P1]", targetName);
      } catch (e) {
        console.warn(
          `Failed to resolve player for target ID '${event.target}'`,
          e,
        );
        return;
      }
    }

    let otherPlayerDiplayName: string = "";
    let otherPlayerSmallID: number | undefined;
    if (event.recipient !== null) {
      //'recipient' parameter contains sender ID or recipient ID
      const player = this.game.player(event.recipient);
      otherPlayerDiplayName = player ? player.displayName() : "";
      otherPlayerSmallID = player?.smallID();
    }

    // A message I sent is only a confirmation, like a sent emoji: it goes to
    // the small feed, quietly.
    const sent = !event.isFrom;
    this.addEvent({
      description: translateText(sent ? "chat.to" : "chat.from", {
        user: otherPlayerDiplayName,
        msg: translatedMessage,
      }),
      createdAt: this.game.ticks(),
      highlight: !sent,
      minor: sent,
      type: MessageType.CHAT,
      unsafeDescription: false,
      focusID: otherPlayerSmallID,
    });
    if (!sent) {
      this.eventBus.emit(new PlaySoundEffectEvent("message"));
    }
  }

  onAllianceRequestReplyEvent(update: AllianceRequestReplyUpdate) {
    const myPlayer = this.game.myPlayer();
    if (!myPlayer) return;

    if (update.request.recipientID === myPlayer.smallID()) {
      const requestorID = update.request.requestorID;
      const remaining = this.events.filter(
        (event) =>
          !(
            event.type === MessageType.ALLIANCE_REQUEST &&
            event.requestorID === requestorID
          ),
      );
      if (remaining.length !== this.events.length) {
        this.events = remaining;
        this.requestUpdate();
      }
      return;
    }
    if (update.request.requestorID !== myPlayer.smallID()) return;

    const recipient = this.game.playerBySmallID(
      update.request.recipientID,
    ) as PlayerView;
    this.addEvent({
      description: translateText("events_display.alliance_request_status", {
        name: recipient.displayName(),
        status: update.accepted
          ? translateText("events_display.alliance_accepted")
          : translateText("events_display.alliance_rejected"),
      }),
      type: update.accepted
        ? MessageType.ALLIANCE_ACCEPTED
        : MessageType.ALLIANCE_REJECTED,
      highlight: true,
      createdAt: this.game.ticks(),
      focusID: update.request.recipientID,
    });
    this.eventBus.emit(
      new PlaySoundEffectEvent(
        update.accepted ? "alliance-accepted" : "alliance-declined",
      ),
    );
  }

  private respondToAllianceRequest(event: GameEvent, accept: boolean) {
    const response = this.getRespondableAllianceRequest(event);
    if (!response) return;

    if (accept) {
      this.eventBus.emit(
        new SendAllianceRequestIntentEvent(
          response.recipient,
          response.requestor,
        ),
      );
    } else {
      this.eventBus.emit(new SendAllianceRejectIntentEvent(response.requestor));
    }

    this.events = this.events.filter((existing) => existing !== event);
    this.requestUpdate();
  }

  onBrokeAllianceEvent(update: BrokeAllianceUpdate) {
    const myPlayer = this.game.myPlayer();
    if (!myPlayer) return;

    const betrayed = this.game.playerBySmallID(update.betrayedID) as PlayerView;
    const traitor = this.game.playerBySmallID(update.traitorID) as PlayerView;

    if (betrayed.isDisconnected()) return; // Do not send the message if betraying a disconnected player

    if (!betrayed.isTraitor() && traitor === myPlayer) {
      this.eventBus.emit(new PlaySoundEffectEvent("alliance-broken"));
      const malusPercent = Math.round(
        (1 - this.game.config().traitorDefenseDebuff()) * 100,
      );

      const traitorDuration = Math.floor(
        this.game.config().traitorDuration() * 0.1,
      );
      const durationText =
        traitorDuration === 1
          ? translateText("events_display.duration_second")
          : translateText("events_display.duration_seconds_plural", {
              seconds: traitorDuration,
            });

      this.addEvent({
        description: translateText("events_display.betrayal_description", {
          name: betrayed.displayName(),
          malusPercent: malusPercent,
          durationText: durationText,
        }),
        type: MessageType.ALLIANCE_BROKEN,
        highlight: true,
        createdAt: this.game.ticks(),
        focusID: update.betrayedID,
      });
    } else if (betrayed === myPlayer) {
      this.eventBus.emit(new PlaySoundEffectEvent("alliance-broken"));
      this.addEvent({
        description: translateText("events_display.betrayed_you", {
          name: traitor.displayName(),
        }),
        type: MessageType.ALLIANCE_BROKEN,
        highlight: true,
        createdAt: this.game.ticks(),
        focusID: update.traitorID,
      });
    }
  }

  onAllianceExpiredEvent(update: AllianceExpiredUpdate) {
    const myPlayer = this.game.myPlayer();
    if (!myPlayer) return;

    const otherID =
      update.player1ID === myPlayer.smallID()
        ? update.player2ID
        : update.player2ID === myPlayer.smallID()
          ? update.player1ID
          : null;
    if (otherID === null) return;
    const other = this.game.playerBySmallID(otherID) as PlayerView;
    if (!other || !myPlayer.isAlive() || !other.isAlive()) return;

    this.addEvent({
      description: translateText("events_display.alliance_expired", {
        name: other.displayName(),
      }),
      type: MessageType.ALLIANCE_EXPIRED,
      highlight: true,
      createdAt: this.game.ticks(),
      focusID: otherID,
    });
  }

  onDonateEvent(update: DonateEventUpdate) {
    const myPlayer = this.game.myPlayer();
    if (!myPlayer) return;

    const isRecipient = update.recipientId === myPlayer.id();
    const isSender = update.senderId === myPlayer.id();
    if (!isRecipient && !isSender) return;

    const other = isRecipient
      ? (this.game.player(update.senderId) as PlayerView)
      : (this.game.player(update.recipientId) as PlayerView);

    const isGold = update.donationType === "gold";
    const messageKey = isRecipient
      ? isGold
        ? "events_display.received_gold_from_player"
        : "events_display.received_troops_from_player"
      : isGold
        ? "events_display.sent_gold_to_player"
        : "events_display.sent_troops_to_player";
    const params: Record<string, string | number> = {
      name: other.displayName(),
      [isGold ? "gold" : "troops"]: isGold
        ? renderNumber(update.amount)
        : renderTroops(Number(update.amount)),
    };

    this.addEvent({
      description: translateText(messageKey, params),
      type: isRecipient
        ? MessageType.DONATION_RECEIVED
        : MessageType.DONATION_SENT,
      highlight: true,
      createdAt: this.game.ticks(),
      focusID: other.smallID(),
    });
  }

  onTargetPlayerEvent(event: TargetPlayerUpdate) {
    const other = this.game.playerBySmallID(event.playerID) as PlayerView;
    const myPlayer = this.game.myPlayer() as PlayerView;
    if (!myPlayer || !myPlayer.isFriendly(other)) return;

    const target = this.game.playerBySmallID(event.targetID) as PlayerView;

    this.addEvent({
      description: translateText("events_display.attack_request", {
        name: other.displayName(),
        target: target.displayName(),
      }),
      type: MessageType.ATTACK_REQUEST,
      highlight: true,
      createdAt: this.game.ticks(),
      focusID: event.targetID,
    });
  }

  emitGoToPlayerEvent(attackerID: number) {
    const attacker = this.game.playerBySmallID(attackerID);
    if (!attacker.isPlayer()) return;
    this.eventBus.emit(new GoToPlayerEvent(attacker));
  }

  private getRespondableAllianceRequest(
    event: GameEvent,
  ): { requestor: PlayerView; recipient: PlayerView } | undefined {
    if (
      event.type !== MessageType.ALLIANCE_REQUEST ||
      event.requestorID === undefined
    ) {
      return undefined;
    }
    const recipient = this.game.myPlayer();
    const requestor = this.game.playerBySmallID(event.requestorID);
    if (
      !recipient?.isAlive() ||
      !requestor.isPlayer() ||
      !requestor.isAlive() ||
      !requestor.isRequestingAllianceWith(recipient)
    ) {
      return undefined;
    }
    return { requestor, recipient };
  }

  emitGoToUnitEvent(unit: UnitView) {
    this.eventBus.emit(new GoToUnitEvent(unit));
  }

  onEmojiMessageEvent(update: EmojiUpdate) {
    const myPlayer = this.game.myPlayer();
    if (!myPlayer) return;

    const recipient =
      update.emoji.recipientID === AllPlayers
        ? AllPlayers
        : this.game.playerBySmallID(update.emoji.recipientID);
    const sender = this.game.playerBySmallID(
      update.emoji.senderID,
    ) as PlayerView;

    if (recipient === myPlayer) {
      // Honor the "Disable emojis" setting: don't surface received emojis in
      // the events feed either (#4430). Confirmations of emojis you sent
      // still show, since the setting doesn't stop you sending them.
      if (!this.userSettings.emojis()) return;
      this.addEvent({
        description: `${sender.displayName()}: ${update.emoji.message}`,
        unsafeDescription: true,
        type: MessageType.CHAT,
        highlight: true,
        createdAt: this.game.ticks(),
        focusID: update.emoji.senderID,
      });
    } else if (sender === myPlayer && recipient !== AllPlayers) {
      this.addEvent({
        description: translateText("events_display.sent_emoji", {
          name: (recipient as PlayerView).displayName(),
          emoji: update.emoji.message,
        }),
        unsafeDescription: true,
        type: MessageType.CHAT,
        minor: true,
        createdAt: this.game.ticks(),
        focusID: recipient.smallID(),
      });
    } else if (sender === myPlayer) {
      this.addEvent({
        description: translateText("events_display.sent_emoji_all", {
          emoji: update.emoji.message,
        }),
        unsafeDescription: true,
        type: MessageType.CHAT,
        minor: true,
        createdAt: this.game.ticks(),
      });
    }
  }

  onUnitIncomingEvent(event: UnitIncomingUpdate) {
    const myPlayer = this.game.myPlayer();

    if (!myPlayer || myPlayer.smallID() !== event.playerID) {
      return;
    }

    const unitView = this.game.unit(event.unitID);

    this.addEvent({
      description: event.message,
      type: event.messageType,
      unsafeDescription: false,
      highlight: true,
      createdAt: this.game.ticks(),
      unitView: unitView,
    });
  }

  private getEventDescription(
    event: GameEvent,
  ): string | DirectiveResult<typeof UnsafeHTMLDirective> {
    return event.unsafeDescription
      ? unsafeHTML(onlyImages(event.description))
      : event.description;
  }

  private renderBetrayalDebuffTimer() {
    const myPlayer = this.game.myPlayer();
    if (!myPlayer || !myPlayer.isTraitor()) {
      return html``;
    }

    const remainingTicks = myPlayer.getTraitorRemainingTicks();
    const remainingSeconds = Math.ceil(remainingTicks / 10);

    if (remainingSeconds <= 0) {
      return html``;
    }

    return html`
      ${this.renderButton({
        content: html`${translateText("events_display.betrayal_debuff_ends", {
          time: remainingSeconds,
        })}`,
        className: "text-left text-yellow-400",
        translate: false,
      })}
    `;
  }

  private renderEventRow(event: GameEvent) {
    const response = this.getRespondableAllianceRequest(event);
    const allianceRequest = response !== undefined;
    const requestor = response?.requestor;
    const recipient = response?.recipient;

    return html`
      <tr>
        <td
          class="lg:px-2 lg:py-1 p-1 text-left ${getMessageTypeClasses(
            event.type,
          )}"
        >
          ${allianceRequest
            ? html`
                <div class="flex flex-col gap-1.5">
                  ${this.renderButton({
                    content: this.getEventDescription(event),
                    onClick: () => {
                      if (event.focusID) {
                        this.emitGoToPlayerEvent(event.focusID);
                      }
                    },
                    className: "text-left",
                  })}
                  ${requestor && recipient
                    ? html`
                        <div class="flex gap-2">
                          <button
                            class="rounded-md bg-emerald-600 px-2 py-1 text-[11px] font-semibold text-white transition hover:bg-emerald-500"
                            @click=${() =>
                              this.respondToAllianceRequest(event, true)}
                          >
                            ${translateText("events_display.accept_alliance")}
                          </button>
                          <button
                            class="rounded-md border border-white/15 px-2 py-1 text-[11px] text-slate-200 transition hover:bg-white/10"
                            @click=${() =>
                              this.respondToAllianceRequest(event, false)}
                          >
                            ${translateText("events_display.reject_alliance")}
                          </button>
                        </div>
                      `
                    : ""}
                </div>
              `
            : event.focusID
              ? this.renderButton({
                  content: this.getEventDescription(event),
                  onClick: () => {
                    if (event.focusID) this.emitGoToPlayerEvent(event.focusID);
                  },
                  className: "text-left",
                })
              : event.unitView
                ? this.renderButton({
                    content: this.getEventDescription(event),
                    onClick: () => {
                      if (event.unitView)
                        this.emitGoToUnitEvent(event.unitView);
                    },
                    className: "text-left",
                  })
                : this.getEventDescription(event)}
        </td>
      </tr>
    `;
  }

  private renderIncomingTradeOffer(player: PlayerView, offer: TradeOfferView) {
    const seconds = Math.max(
      0,
      Math.ceil((offer.expiresAt - this.game.ticks()) / 10),
    );
    return html`
      <article
        class="rounded-lg border border-amber-200/20 bg-white/[0.035] p-2 text-white"
        aria-label=${translateText("deal.incoming_offer")}
      >
        <div class="flex min-w-0 items-start justify-between gap-2">
          <strong class="min-w-0 truncate text-xs font-semibold">
            ${translateText("deal.offer_to_you", {
              sender: player.displayName(),
            })}
          </strong>
          <span class="shrink-0 text-[10px] tabular-nums text-slate-400"
            >${translateText("deal.expires_in", { seconds })}</span
          >
        </div>
        <p class="my-1 text-xs text-slate-200">
          ${renderNumber(offer.offeredAmount)}
          ${translateText(`deal.resource.${offer.offeredResource}`)}
          <span class="px-1 text-amber-200" aria-hidden="true">↔</span>
          ${renderNumber(offer.requestedAmount)}
          ${translateText(`deal.resource.${offer.requestedResource}`)}
        </p>
        <div class="flex gap-2">
          <button
            class="flex-1 rounded-md bg-amber-300 px-2 py-1 text-xs font-semibold text-slate-950 transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            @click=${() =>
              this.eventBus.emit(
                new RespondTradeOfferIntentEvent(player, "accept"),
              )}
          >
            ${translateText("deal.accept")}
          </button>
          <button
            class="flex-1 rounded-md border border-white/15 px-2 py-1 text-xs font-medium text-slate-200 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            @click=${() =>
              this.eventBus.emit(
                new RespondTradeOfferIntentEvent(player, "reject"),
              )}
          >
            ${translateText("deal.reject")}
          </button>
        </div>
      </article>
    `;
  }

  render() {
    if (!this.active || !this._isVisible) {
      return html``;
    }

    const myPlayer = this.game.myPlayer();
    const showBetrayalTimer = !!(
      myPlayer &&
      myPlayer.isTraitor() &&
      myPlayer.getTraitorRemainingTicks() > 0
    );
    const incomingTradeOffers = myPlayer
      ? this.game
          .players()
          .map((player) => ({ player, offer: player.tradeOffer() }))
          .filter(
            (entry): entry is { player: PlayerView; offer: TradeOfferView } =>
              entry.offer !== undefined &&
              entry.offer?.recipientID === myPlayer.id() &&
              entry.offer.expiresAt > this.game.ticks(),
          )
      : [];

    const liveEvents: GameEvent[] = [];
    let activityEvents: GameEvent[] = [];
    for (const event of this.events) {
      if (isWarNews(event.type) && !event.minor) {
        liveEvents.push(event);
      }
      if (!isWarNews(event.type) || event.minor) {
        activityEvents.push(event);
      }
    }
    liveEvents.sort((a, b) => a.createdAt - b.createdAt);
    activityEvents.sort((a, b) => a.createdAt - b.createdAt);
    const visibleLiveEvents = liveEvents.slice(-3);
    activityEvents = activityEvents.slice(-4);
    const notificationCount =
      activityEvents.length + incomingTradeOffers.length;

    return html`
      <div
        class="pointer-events-none fixed left-1/2 top-[max(3.5rem,env(safe-area-inset-top))] z-[207] flex w-[min(36rem,calc(100vw-1.5rem))] -translate-x-1/2 flex-col gap-2"
        aria-live="polite"
        aria-label=${translateText("events_display.global_news")}
      >
        <div
          class="game-battle-news-badge mx-auto flex items-center gap-2 rounded-full border border-amber-300/25 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-100 backdrop-blur-xl"
        >
          <span
            class="h-1.5 w-1.5 ${visibleLiveEvents.length > 0
              ? "animate-pulse bg-amber-300"
              : "bg-slate-500"} rounded-full"
          ></span>
          ${translateText("events_display.global_news")}
        </div>
        ${visibleLiveEvents.length > 0
          ? visibleLiveEvents.map(
              (event) => html`
                <div
                  class="pointer-events-auto rounded-xl border border-white/10 border-l-2 border-l-amber-300 bg-slate-950/90 px-3 py-2 text-sm text-white shadow-lg backdrop-blur-xl ${getMessageTypeClasses(
                    event.type,
                  )}"
                >
                  ${event.focusID
                    ? this.renderButton({
                        content: this.getEventDescription(event),
                        onClick: () => {
                          if (event.focusID) {
                            this.emitGoToPlayerEvent(event.focusID);
                          }
                        },
                        className: "w-full text-left",
                      })
                    : event.unitView
                      ? this.renderButton({
                          content: this.getEventDescription(event),
                          onClick: () => {
                            if (event.unitView) {
                              this.emitGoToUnitEvent(event.unitView);
                            }
                          },
                          className: "w-full text-left",
                        })
                      : this.getEventDescription(event)}
                </div>
              `,
            )
          : html`
              <div
                class="mx-auto rounded-lg border border-white/10 bg-slate-950/75 px-3 py-1.5 text-xs text-slate-400 shadow-lg backdrop-blur-xl"
              >
                ${translateText("events_display.news_waiting")}
              </div>
            `}
      </div>
      <section
        class="w-full min-[1200px]:w-96 overflow-hidden rounded-xl border border-amber-200/15 bg-slate-950/90 text-white shadow-lg backdrop-blur-xl pointer-events-auto"
        aria-label=${translateText("events_display.activity_feed")}
      >
        <header
          class="flex items-center justify-between gap-2 border-b border-amber-200/10 px-3 py-2"
        >
          <div
            class="flex items-center gap-2 text-xs font-medium text-slate-200"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
            ${translateText("events_display.activity_feed")}
            ${notificationCount > 0
              ? html`<span
                  class="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] text-slate-300"
                  >${notificationCount}</span
                >`
              : ""}
          </div>
          <button
            class="rounded-md px-2 py-1 text-xs text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-expanded=${!this._isCollapsed}
            aria-label=${translateText(
              this._isCollapsed
                ? "events_display.show_activity_feed"
                : "events_display.hide_activity_feed",
            )}
            @click=${() => {
              this._isCollapsed = !this._isCollapsed;
            }}
          >
            ${translateText(
              this._isCollapsed
                ? "events_display.show_activity_feed"
                : "events_display.hide_activity_feed",
            )}
          </button>
        </header>
        ${this._isCollapsed
          ? ""
          : html`
              <div class="max-h-[30vh] overflow-y-auto p-2 lg:max-h-[36vh]">
                <div class="flex flex-col gap-2">
                  ${incomingTradeOffers.length > 0
                    ? html`
                        <div
                          class="incoming-trade-offers flex max-h-[min(18dvh,16rem)] flex-col gap-2 overflow-y-auto rounded-lg border border-amber-200/10 bg-white/[0.025] p-2"
                          aria-label=${translateText("deal.incoming_offer")}
                          aria-live="polite"
                        >
                          <div
                            class="flex items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-wide text-amber-100/80"
                          >
                            ${translateText("deal.incoming_offer")}
                            <span
                              class="rounded-full bg-amber-200/10 px-1.5 py-0.5 tabular-nums"
                              >${incomingTradeOffers.length}</span
                            >
                          </div>
                          ${incomingTradeOffers.map(({ player, offer }) =>
                            this.renderIncomingTradeOffer(player, offer),
                          )}
                        </div>
                      `
                    : ""}
                  ${activityEvents.length > 0
                    ? html`
                        <div
                          class="max-h-[12vh] overflow-y-auto rounded-lg bg-white/[0.035] events-container lg:max-h-[18vh]"
                        >
                          <table
                            class="w-full border-collapse text-xs text-slate-100 lg:text-sm"
                          >
                            <tbody>
                              ${activityEvents.map((event) =>
                                this.renderEventRow(event),
                              )}
                            </tbody>
                          </table>
                        </div>
                      `
                    : incomingTradeOffers.length === 0
                      ? html`<p class="px-2 py-1 text-xs text-slate-500">
                          ${translateText("events_display.activity_empty")}
                        </p>`
                      : ""}
                  ${showBetrayalTimer
                    ? html`<div
                        class="rounded-lg bg-amber-300/[0.06] px-2 py-1 text-xs text-amber-200"
                      >
                        ${this.renderBetrayalDebuffTimer()}
                      </div>`
                    : ""}
                </div>
              </div>
            `}
      </section>
    `;
  }

  createRenderRoot() {
    return this;
  }
}
