import { LitElement, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { z } from "zod";
import { ClientEnv } from "./ClientEnv";
import { ensureServerList } from "./ServerList";
import { translateText as baseTranslateText } from "./Utils";

const ADMIN_TEXT_FA: Record<string, string> = {
  "admin_panel.brand_name": "دفاع خاورمیانه",
  "admin_panel.action_failed": "انجام عملیات ناموفق بود (HTTP {status}).",
  "admin_panel.accounts": "حساب‌های ثبت‌شده",
  "admin_panel.registered": "ثبت‌نام‌شده",
  "admin_panel.guest": "مهمان / بدون حساب",
  "admin_panel.accounts_scope":
    "این فهرست فقط حساب‌های محلی همین بازی را نشان می‌دهد؛ بازیکنان آنلاین در بخش «کاربران» دیده می‌شوند. فهرست حساب‌های سامانهٔ اصلی از API جداگانه می‌آید.",
  "admin_panel.local_accounts_in_users":
    "حساب‌های محلی روی سرور (آنلاین یا آفلاین)",
  "admin_panel.account_status_active": "فعال",
  "admin_panel.account_status_banned": "مسدود",
  "admin_panel.no_local_accounts": "حساب محلی ثبت‌شده‌ای وجود ندارد.",
  "admin_panel.local_account_count": "{count} حساب محلی",
  "admin_panel.worker_unavailable":
    "اتصال به ورکر {worker} برقرار نشد؛ داده‌های آن ورکر ممکن است ناقص باشد.",
  "admin_panel.workers_partial_health": "اختلال در اتصال بعضی ورکرها",
  "admin_panel.account_password_required": "رمز عبور باید حداقل ۸ نویسه باشد.",
  "admin_panel.active_games": "بازی‌های فعال",
  "admin_panel.active": "فعال",
  "admin_panel.add_product": "افزودن محصول",
  "admin_panel.actions": "عملیات",
  "admin_panel.admin_session": "نشست مدیر فعال است",
  "admin_panel.authenticating": "در حال ورود…",
  "admin_panel.ban_integration_note":
    "بن حساب‌های بازی روی دیسک سرور ذخیره می‌شود و اتصال دوباره به بازی را رد می‌کند. حساب‌های محلی نیز هنگام ورود با نام کاربری یا شماره بررسی می‌شوند.",
  "admin_panel.bans": "بن‌ها",
  "admin_panel.ban": "مسدودسازی",
  "admin_panel.unban": "رفع مسدودی",
  "admin_panel.ban_confirm":
    "این حساب در همهٔ سرورهای بازی این سایت مسدود و از بازی‌های فعال خارج می‌شود. ادامه می‌دهید؟",
  "admin_panel.unban_confirm":
    "مسدودی این حساب در همهٔ workerهای بازی برداشته شود؟",
  "admin_panel.bans_note":
    "این بخش بن‌های حساب‌های بازی که خارج از حساب‌های محلی ساخته شده‌اند را نگه می‌دارد.",
  "admin_panel.banned": "مسدود",
  "admin_panel.banned_until": "مسدود تا {time}",
  "admin_panel.cancel": "انصراف",
  "admin_panel.create_account": "ساخت حساب",
  "admin_panel.created": "تاریخ ساخت",
  "admin_panel.delete": "حذف",
  "admin_panel.edit": "ویرایش",
  "admin_panel.edit_account": "ویرایش حساب",
  "admin_panel.edit_product": "ویرایش محصول",
  "admin_panel.hidden": "مخفی",
  "admin_panel.local_data_note":
    "اطلاعات حساب‌ها و رمزهای هش‌شده در SQLite روی دیسک سرور ذخیره می‌شوند. رمز خام هرگز ذخیره یا نمایش داده نمی‌شود.",
  "admin_panel.no_accounts": "حسابی ساخته نشده است.",
  "admin_panel.download_export": "دانلود اطلاعات کاربران و محصولات",
  "admin_panel.inventory_items": "نمایش اقلام",
  "admin_panel.inventory_hide": "بستن فهرست",
  "admin_panel.inventory_empty": "هنوز محصولی به این حساب تحویل نشده است.",
  "admin_panel.inventory_granted_by": "تحویل‌دهنده: {name}",
  "admin_panel.inventory_date": "تاریخ تحویل: {time}",
  "admin_panel.users_scope":
    "این بخش بازیکنان متصل به بازی را زنده نشان می‌دهد؛ بازدیدکنندگان سایت و حساب‌های آفلاین در این فهرست نیستند.",
  "admin_panel.inventory_load_failed": "بارگیری موجودی این حساب ناموفق بود.",
  "admin_panel.account_inventory_scope":
    "هدیه‌ها در حساب محلی ذخیره می‌شوند و پس از ورود دوباره باقی می‌مانند. استفادهٔ واقعی از هر محصول به پشتیبانی همان قابلیت در بازی نیاز دارد.",
  "admin_panel.category": "دسته‌بندی محصول",
  "admin_panel.category_name": "نام دسته‌بندی",
  "admin_panel.add_category": "ساخت دسته",
  "admin_panel.edit_category": "ویرایش دسته",
  "admin_panel.all_categories": "بدون دسته‌بندی",
  "admin_panel.inventory_count": "محصولات تحویلی: {count}",
  "admin_panel.grant_product": "تحویل محصول",
  "admin_panel.choose_product": "شماره محصول را وارد کنید:",
  "admin_panel.no_active_products": "ابتدا یک محصول فعال بسازید.",
  "admin_panel.system_logs_unavailable": "گزارش systemd در دسترس نیست: {reason}",
  "admin_panel.system_logs": "گزارش Linux / systemd",
  "admin_panel.app_logs": "گزارش برنامه",
  "admin_panel.backup_sensitive_note":
    "فایل پشتیبان شامل هش و salt رمزها است؛ آن را مانند اطلاعات محرمانه نگه دارید.",
  "admin_panel.no_products": "محصولی ساخته نشده است.",
  "admin_panel.password_optional": "رمز تازه (اختیاری)",
  "admin_panel.phone": "شماره تماس",
  "admin_panel.phone_optional": "شماره تماس (اختیاری)",
  "admin_panel.product_active": "نمایش محصول به بازیکنان",
  "admin_panel.product_description": "توضیحات",
  "admin_panel.product_image_invalid":
    "تصویر باید PNG، JPEG یا WebP و حداکثر ۳ مگابایت باشد.",
  "admin_panel.product_image_note":
    "تصویرها روی دیسک همین سرور ذخیره می‌شوند. لینک پرداخت HTTPS باز می‌شود؛ تأیید پرداخت یا تحویل خودکار سفارش از این کاتالوگ انجام نمی‌شود.",
  "admin_panel.purchase_link_note":
    "دکمهٔ خرید بازیکن را به لینک پرداخت می‌برد. بدون اتصال تأییدشدهٔ درگاه (webhook)، پرداخت و تحویل خودکار ثبت نمی‌شود؛ هدیهٔ مدیر در موجودی حساب ذخیره خواهد شد.",
  "admin_panel.product_name": "نام محصول",
  "admin_panel.product_price": "قیمت",
  "admin_panel.product_price_invalid": "قیمت باید عدد صحیح مثبت باشد.",
  "admin_panel.products": "محصولات فروشگاه",
  "admin_panel.remove_image": "حذف تصویر",
  "admin_panel.select_image": "انتخاب تصویر",
  "admin_panel.save_changes": "ذخیره تغییرات",
  "admin_panel.eyebrow": "مدیریت سرور",
  "admin_panel.game": "بازی",
  "admin_panel.game_id": "شناسهٔ بازی",
  "admin_panel.games": "فهرست بازی‌ها",
  "admin_panel.health_subtitle": "وضعیت زندهٔ سرورهای بازی",
  "admin_panel.healthy": "سالم",
  "admin_panel.in_game": "آنلاین",
  "admin_panel.internal_use": "فقط برای استفادهٔ داخلی",
  "admin_panel.invalid_credentials": "نام کاربری یا رمز عبور نادرست است.",
  "admin_panel.kick": "کیک",
  "admin_panel.last_updated": "به‌روزرسانی: {time}",
  "admin_panel.load_average": "میانگین بار",
  "admin_panel.logs": "گزارش رخدادها",
  "admin_panel.logs_unavailable": "بارگیری گزارش رخدادهای سرور ناموفق بود.",
  "admin_panel.load_failed": "بارگیری پنل مدیریت ناموفق بود.",
  "admin_panel.connection_failed":
    "ارتباط با سرور برقرار نشد؛ اتصال اینترنت و گواهی HTTPS را بررسی کنید.",
  "admin_panel.login_failed":
    "ورود ناموفق بود. اتصال را بررسی و دوباره تلاش کنید.",
  "admin_panel.login_not_configured": "ورود مدیر در این سرور تنظیم نشده است.",
  "admin_panel.login_rate_limited":
    "تلاش‌های ورود بیش از حد بود. ۱۵ دقیقه صبر کنید.",
  "admin_panel.login_subtitle":
    "برای مدیریت کاربران آنلاین و مشاهدهٔ وضعیت سرورها وارد شوید.",
  "admin_panel.login_title": "ورود مدیر",
  "admin_panel.memory_rss": "RAM مصرف‌شده / کل سرور",
  "admin_panel.maintenance": "توقف بازی‌ها برای تعمیرات",
  "admin_panel.maintenance_enabled":
    "حالت تعمیرات فعال است؛ بازی‌های جاری متوقف شده‌اند.",
  "admin_panel.maintenance_start_confirm":
    "این کار همهٔ بازی‌های جاری را متوقف می‌کند و تا خاموش‌کردن حالت تعمیرات، بازی جدیدی پذیرفته نمی‌شود. ادامه می‌دهید؟",
  "admin_panel.maintenance_stop_confirm":
    "حالت تعمیرات خاموش شود و بازی‌ها دوباره پذیرفته شوند؟",
  "admin_panel.maintenance_partial":
    "تغییر حالت تعمیرات روی همهٔ workerها کامل نشد؛ وضعیت هر worker را بررسی کنید.",
  "admin_panel.maintenance_status": "وضعیت توقف بازی‌ها",
  "admin_panel.maintenance_resume": "ادامهٔ پذیرش بازی",
  "admin_panel.no_logs": "گزارشی از رخدادهای این پردازه ثبت نشده است.",
  "admin_panel.no_bans": "حسابی از ورود به بازی‌ها مسدود نشده است.",
  "admin_panel.no_games": "بازی فعالی برای نمایش وجود ندارد.",
  "admin_panel.view_players": "بازیکنان",
  "admin_panel.no_players": "کاربر آنلاینی پیدا نشد.",
  "admin_panel.navigation": "مدیریت",
  "admin_panel.online_user_count": "{count} کاربر آنلاین",
  "admin_panel.online_users": "بازیکنان متصل به بازی",
  "admin_panel.online_players_scope":
    "فقط اتصال‌های فعال به بازی شمرده می‌شوند؛ بازدیدکنندگان سایت و لابی‌های خالی شمرده نمی‌شوند.",
  "admin_panel.system_memory_unavailable": "اطلاعات حافظهٔ میزبان در دسترس نیست.",
  "admin_panel.overview": "نمای کلی",
  "admin_panel.player": "بازیکن",
  "admin_panel.player_not_found": "بازیکن دیگر آنلاین نیست.",
  "admin_panel.platform": "پلتفرم",
  "admin_panel.password": "رمز عبور",
  "admin_panel.payment_url": "لینک پرداخت (HTTPS)",
  "admin_panel.temporary_ban": "بن موقت",
  "admin_panel.temporary_ban_prompt":
    "مدت مسدودسازی «{username}» به ساعت (۱ تا ۸۷۶۰):",
  "admin_panel.temporary_ban_invalid":
    "مدت باید عدد صحیحی بین ۱ تا ۸۷۶۰ ساعت باشد.",
  "admin_panel.warn_prompt": "متن اخطار برای «{username}»:",
  "admin_panel.warn": "اخطار",
  "admin_panel.warning_count": "اخطارها: {count}",
  "admin_panel.no_reports": "گزارشی برای نمایش وجود ندارد.",
  "admin_panel.ready_for_reports": "گزارش‌ها آماده‌اند",
  "admin_panel.game_reference": "بازی {id}",
  "admin_panel.worker_reference": "سرور {id}",
  "admin_panel.account_key": "شناسهٔ حساب",
  "admin_panel.offline_account": "حساب آفلاین",
  "admin_panel.control_panel": "پنل مدیریت",
  "admin_panel.report_reason_abusive_language": "فحاشی یا الفاظ نامناسب",
  "admin_panel.report_reason_botting": "استفاده از ربات یا تقلب",
  "admin_panel.report_reason_griefing": "اخلال عمدی در بازی",
  "admin_panel.report_reason_harassment": "آزار و تهدید",
  "admin_panel.report_reason_inappropriate_username": "نام کاربری نامناسب",
  "admin_panel.report_reason_other": "مورد دیگر",
  "admin_panel.report_reason_spam": "هرزنامه",
  "admin_panel.report_reason_teaming": "همکاری غیرمجاز",
  "admin_panel.reported_message": "پیام گزارش‌شده",
  "admin_panel.reported_user": "کاربر گزارش‌شده",
  "admin_panel.reporter": "گزارش‌دهنده",
  "admin_panel.reports_memory_note":
    "گزارش‌ها در پایگاه‌دادهٔ سرور ذخیره می‌شوند و پس از راه‌اندازی مجدد باقی می‌مانند.",
  "admin_panel.reports": "گزارش‌ها",
  "admin_panel.reports_future_note":
    "گزارش‌های بازی و گفت‌وگوی عمومی از workerها جمع‌آوری و روی سرور ذخیره می‌شوند.",
  "admin_panel.refresh": "تازه‌سازی",
  "admin_panel.refreshing": "در حال تازه‌سازی…",
  "admin_panel.recent_players": "بازیکنان اخیر",
  "admin_panel.requires_account_api": "نیازمند اتصال به سرویس حساب‌ها",
  "admin_panel.search": "جست‌وجوی نام یا شناسهٔ بازی",
  "admin_panel.secure_session": "نشست امن سرور · پایان خودکار اعتبار",
  "admin_panel.session_expired": "نشست مدیر منقضی شد؛ دوباره وارد شوید.",
  "admin_panel.sign_in": "ورود",
  "admin_panel.sign_out": "خروج",
  "admin_panel.server_health": "سلامت سرور",
  "admin_panel.spectator": "تماشاگر",
  "admin_panel.status": "وضعیت",
  "admin_panel.subtitle": "فعالیت سرورها و مدیریت کاربران را بررسی کنید.",
  "admin_panel.title": "پنل مدیریت",
  "admin_panel.uptime": "مدت فعالیت",
  "admin_panel.username": "نام کاربری",
  "admin_panel.users": "کاربران",
  "admin_panel.worker": "ورکر",
  "admin_panel.worker_failed":
    "دریافت اطلاعات ورکر {worker} ناموفق بود (HTTP {status}).",
  "admin_panel.log_time": "زمان",
  "admin_panel.log_level": "سطح",
  "admin_panel.log_worker": "ورکر",
  "admin_panel.log_message": "پیام",
  "admin_panel.log_details": "جزئیات",
  "admin_panel.phase_lobby": "اتاق انتظار",
  "admin_panel.phase_active": "در حال بازی",
  "admin_panel.phase_finished": "پایان‌یافته",
  "admin_panel.game_type_singleplayer": "تک‌نفره",
  "admin_panel.game_type_public": "عمومی",
  "admin_panel.game_type_private": "خصوصی",
  "admin_panel.uptime_days": "{days} روز و {hours} ساعت",
  "admin_panel.uptime_hours": "{hours} ساعت و {minutes} دقیقه",
  "admin_panel.worker_memory": "حافظهٔ پردازه",
  "admin_panel.workers": "ورکرها",
  "admin_panel.workers_online": "ورکر آنلاین",
  "admin_panel.view_all": "نمایش همه",
};

const translateText = (
  key: string,
  params?: Record<string, string | number>,
): string => {
  const persianText = ADMIN_TEXT_FA[key];
  if (persianText !== undefined) {
    return persianText.replace(
      /\{(\w+)\}/g,
      (placeholder, name: string) => String(params?.[name] ?? placeholder),
    );
  }
  const translated = baseTranslateText(key, params);
  if (translated !== key) return translated;
  return key;
};

type AdminPlayer = {
  clientID: string;
  accountKey: string;
  username: string;
  spectator: boolean;
  platform: string;
  registered: boolean;
};

type AdminGame = {
  gameID: string;
  phase: string;
  gameType: string;
  createdAt: number;
  players: AdminPlayer[];
};

type AdminWorkerOverview = {
  workerId: number;
  workerCount: number;
  uptimeSeconds: number;
  loadAverage: number[];
  memory: { rss: number; heapUsed: number; heapTotal: number };
  systemMemory?: { totalBytes: number; freeBytes: number };
  maintenanceMode: boolean;
  games: AdminGame[];
};

const AdminLogSchema = z.object({
  timestamp: z.string(),
  level: z.string(),
  message: z.string(),
  metadata: z.record(z.string(), z.unknown()),
});
type AdminLog = z.infer<typeof AdminLogSchema> & { workerId: number };

export const AdminChatReportSchema = z.object({
  id: z.string(),
  messageId: z.string().optional(),
  source: z.enum(["chat", "game"]).optional(),
  gameID: z.string().optional(),
  reportedBy: z.object({
    publicId: z.string().optional(),
    clientID: z.string().optional(),
    username: z.string(),
  }),
  reported: z.object({
    publicId: z.string().optional(),
    clientID: z.string().optional(),
    username: z.string(),
  }),
  message: z.string().optional(),
  reason: z.enum([
    "abusive_language",
    "harassment",
    "spam",
    "other",
    "botting",
    "teaming",
    "inappropriate_username",
    "griefing",
  ]),
  createdAt: z.number(),
  workerId: z.number().optional(),
});

type AdminChatReport = z.infer<typeof AdminChatReportSchema> & {
  workerId: number;
};

const ManagedAccountSchema = z.object({
  id: z.string(),
  username: z.string(),
  phone: z.string().nullable(),
  banned: z.boolean(),
  bannedUntil: z.number().nullable(),
  warningCount: z.number().int().nonnegative(),
  inventoryCount: z.number().int().nonnegative().optional().default(0),
  createdAt: z.number(),
  updatedAt: z.number(),
});
type ManagedAccount = z.infer<typeof ManagedAccountSchema>;

const ManagedProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  currency: z.string(),
  paymentUrl: z.string().nullable(),
  categoryId: z.string().nullable().optional(),
  categoryName: z.string().nullable().optional(),
  imageMime: z.string().nullable(),
  imageUrl: z.string().nullable().optional(),
  active: z.boolean(),
  createdAt: z.number(),
  updatedAt: z.number(),
});
type ManagedProduct = z.infer<typeof ManagedProductSchema>;

const ManagedCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
});
type ManagedCategory = z.infer<typeof ManagedCategorySchema>;

const ManagedInventoryItemSchema = z.object({
  id: z.string(),
  accountId: z.string(),
  productId: z.string().nullable(),
  name: z.string(),
  description: z.string(),
  grantedBy: z.string(),
  createdAt: z.number(),
});
type ManagedInventoryItem = z.infer<typeof ManagedInventoryItemSchema>;

const AdminTab =
  z.enum([
    "overview",
    "games",
    "users",
    "accounts",
    "products",
    "bans",
    "reports",
    "logs",
  ]);
type AdminTab = z.infer<typeof AdminTab>;
const SESSION_KEY = "openfront_admin_session";

@customElement("admin-panel")
export class AdminPanel extends LitElement {
  @state() private overviews: AdminWorkerOverview[] = [];
  @state() private unavailableWorkers: number[] = [];
  @state() private reports: AdminChatReport[] = [];
  @state() private logs: AdminLog[] = [];
  @state() private systemLogsNotice: string | null = null;
  @state() private accountKeys: string[] = [];
  @state() private managedAccounts: ManagedAccount[] = [];
  @state() private inventoryByAccount: Record<string, ManagedInventoryItem[]> =
    {};
  @state() private inventoryLoadingAccount: string | null = null;
  @state() private managedProducts: ManagedProduct[] = [];
  @state() private managedCategories: ManagedCategory[] = [];
  @state() private accountEditId: string | null = null;
  @state() private accountDraftUsername = "";
  @state() private accountDraftPassword = "";
  @state() private accountDraftPhone = "";
  @state() private productEditId: string | null = null;
  @state() private productDraftName = "";
  @state() private productDraftDescription = "";
  @state() private productDraftPrice = "";
  @state() private productDraftCurrency = "تومان";
  @state() private productDraftPaymentUrl = "";
  @state() private productDraftCategoryId = "";
  @state() private categoryDraftName = "";
  @state() private categoryEditId: string | null = null;
  @state() private productDraftActive = true;
  @state() private productDraftImage: string | null | undefined;
  @state() private productDraftImageUrl: string | null = null;
  @state() private loading = false;
  @state() private submitting = false;
  @state() private error: string | null = null;
  @state() private search = "";
  @state() private lastUpdated: number | null = null;
  @state() private username = "";
  @state() private password = "";
  @state() private loggedIn = false;
  @state() private tab: AdminTab = "overview";

  private refreshTimer: ReturnType<typeof setInterval> | undefined;
  private active = false;
  private readonly onPageChange = (event: Event) => {
    this.active = (event as CustomEvent<string>).detail === "page-admin-panel";
    document.body.classList.toggle("admin-panel-open", this.active);
    if (this.active && sessionStorage.getItem(SESSION_KEY)) {
      void this.refresh();
    } else {
      this.stopRefresh();
    }
  };

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("showPage", this.onPageChange);
    this.active = !this.classList.contains("hidden");
    document.body.classList.toggle("admin-panel-open", this.active);
    if (this.active && sessionStorage.getItem(SESSION_KEY)) {
      void this.refresh();
    }
  }

  disconnectedCallback() {
    window.removeEventListener("showPage", this.onPageChange);
    document.body.classList.remove("admin-panel-open");
    this.stopRefresh();
    super.disconnectedCallback();
  }

  private stopRefresh() {
    if (this.refreshTimer !== undefined) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = undefined;
    }
  }

  private async apiBase(): Promise<{ base: string; workerCount: number }> {
    await ensureServerList();
    return {
      base: ClientEnv.serverHttpBase(),
      workerCount: ClientEnv.numWorkers(),
    };
  }

  private async login(event: SubmitEvent) {
    event.preventDefault();
    this.submitting = true;
    this.error = null;
    try {
      const { base } = await this.apiBase();
      const response = await fetch(`${base}/w0/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });
      if (!response.ok) {
        throw new Error(
          response.status === 429
            ? translateText("admin_panel.login_rate_limited")
            : response.status === 503
              ? translateText("admin_panel.login_not_configured")
              : translateText("admin_panel.invalid_credentials"),
        );
      }
      const result = (await response.json()) as { token: string };
      sessionStorage.setItem(SESSION_KEY, result.token);
      this.password = "";
      this.loggedIn = true;
      await this.refresh();
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.login_failed");
    } finally {
      this.submitting = false;
    }
  }

  private signOut() {
    sessionStorage.removeItem(SESSION_KEY);
    this.loggedIn = false;
    this.overviews = [];
    this.stopRefresh();
  }

  private async refresh() {
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) {
      this.loggedIn = false;
      return;
    }
    this.loading = true;
    this.error = null;
    try {
      const { base, workerCount } = await this.apiBase();
      const results = await Promise.allSettled(
        Array.from({ length: workerCount }, async (_, workerId) => {
          const response = await fetch(
            `${base}/w${workerId}/api/admin/overview`,
            { headers: { Authorization: `Bearer ${token}` } },
          );
          if (response.status === 401) {
            sessionStorage.removeItem(SESSION_KEY);
            this.loggedIn = false;
            throw new Error(translateText("admin_panel.session_expired"));
          }
          if (!response.ok) {
            throw new Error(
              translateText("admin_panel.worker_failed", {
                worker: workerId,
                status: response.status,
              }),
            );
          }
          return (await response.json()) as AdminWorkerOverview;
        }),
      );
      if (!sessionStorage.getItem(SESSION_KEY)) {
        throw new Error(translateText("admin_panel.session_expired"));
      }
      const availableWorkerIds = results.flatMap((result, workerId) =>
        result.status === "fulfilled" ? [workerId] : [],
      );
      this.unavailableWorkers = results.flatMap((result, workerId) =>
        result.status === "rejected" ? [workerId] : [],
      );
      const workerFailures = results.flatMap((result, workerId) => {
        if (result.status !== "rejected") return [];
        if (result.reason instanceof TypeError) {
          return [
            translateText("admin_panel.worker_unavailable", {
              worker: workerId,
            }),
          ];
        }
        return [
          result.reason instanceof Error
            ? result.reason.message
            : translateText("admin_panel.load_failed"),
        ];
      });
      if (availableWorkerIds.length === 0) {
        throw new Error(
          workerFailures[0] ?? translateText("admin_panel.load_failed"),
        );
      }
      this.overviews = results.flatMap((result) =>
        result.status === "fulfilled" ? [result.value] : [],
      );
      this.error = workerFailures.length > 0 ? workerFailures.join(" ") : null;
      const sharedDataWorkerIds = availableWorkerIds.slice(0, 1);
      const [reports, logs, accountKeys, localData] = await Promise.all([
        this.fetchReports(base, availableWorkerIds, token),
        this.fetchLogs(base, sharedDataWorkerIds, token),
        this.fetchBans(base, sharedDataWorkerIds, token),
        this.fetchLocalAdminData(base, token),
      ]);
      this.reports = reports;
      this.logs = logs;
      this.accountKeys = accountKeys;
      this.managedAccounts = localData.accounts;
      this.managedProducts = localData.products;
      this.managedCategories = localData.categories;
      this.loggedIn = true;
      this.lastUpdated = Date.now();
      if (this.active) {
        this.refreshTimer ??= setInterval(() => void this.refresh(), 5_000);
      }
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.load_failed");
      this.overviews = [];
      this.unavailableWorkers = [];
      this.reports = [];
      this.logs = [];
      this.accountKeys = [];
      this.managedAccounts = [];
      this.managedProducts = [];
      this.managedCategories = [];
      this.stopRefresh();
    } finally {
      this.loading = false;
    }
  }

  private async fetchReports(
    base: string,
    workerIds: number[],
    token: string,
  ): Promise<AdminChatReport[]> {
    const perWorker = await Promise.all(
      workerIds.map(async (workerId) => {
        const response = await fetch(`${base}/w${workerId}/api/admin/reports`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 401) {
          sessionStorage.removeItem(SESSION_KEY);
          this.loggedIn = false;
          throw new Error(translateText("admin_panel.session_expired"));
        }
        if (!response.ok) {
          throw new Error(
            translateText("admin_panel.worker_failed", {
              worker: workerId,
              status: response.status,
            }),
          );
        }
        const data: unknown = await response.json();
        const parsedData = z.object({ reports: z.unknown() }).safeParse(data);
        const parsedReports = parsedData.success
          ? z.array(AdminChatReportSchema).safeParse(parsedData.data.reports)
          : null;
        if (!parsedReports?.success) {
          throw new Error(
            translateText("admin_panel.worker_failed", {
              worker: workerId,
              status: "invalid report data",
            }),
          );
        }
        return parsedReports.data.map((report) => ({
          ...report,
          workerId: report.workerId ?? workerId,
        }));
      }),
    );
    const reportsById = new Map<string, AdminChatReport>();
    for (const report of perWorker.flat()) {
      reportsById.set(report.id, report);
    }
    return [...reportsById.values()].sort(
      (a, b) => b.createdAt - a.createdAt,
    );
  }

  private async fetchLogs(
    base: string,
    workerIds: number[],
    token: string,
  ): Promise<AdminLog[]> {
    const perWorker = await Promise.all(
      workerIds.map(async (workerId) => {
        const response = await fetch(
          `${base}/w${workerId}/api/admin/logs?limit=200`,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        if (response.status === 401) {
          sessionStorage.removeItem(SESSION_KEY);
          this.loggedIn = false;
          throw new Error(translateText("admin_panel.session_expired"));
        }
        if (!response.ok) {
          throw new Error(
            translateText("admin_panel.worker_failed", {
              worker: workerId,
              status: response.status,
            }),
          );
        }
        const parsed = z
          .object({ logs: z.array(AdminLogSchema) })
          .safeParse(await response.json());
        if (!parsed.success) {
          throw new Error(translateText("admin_panel.logs_unavailable"));
        }
        return parsed.data.logs.map((entry) => ({ ...entry, workerId }));
      }),
    );
    const systemResponse = await fetch(
      `${base}/w0/api/admin/system-logs`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    if (systemResponse.status === 401) {
      sessionStorage.removeItem(SESSION_KEY);
      this.loggedIn = false;
      throw new Error(translateText("admin_panel.session_expired"));
    }
    if (!systemResponse.ok) {
      throw new Error(
        translateText("admin_panel.worker_failed", {
          worker: 0,
          status: systemResponse.status,
        }),
      );
    }
    const systemData = z
      .object({
        available: z.boolean(),
        reason: z.string().nullable(),
        logs: z.array(AdminLogSchema),
      })
      .safeParse(await systemResponse.json());
    if (!systemData.success) {
      throw new Error(translateText("admin_panel.logs_unavailable"));
    }
    this.systemLogsNotice = systemData.data.available
      ? null
      : systemData.data.reason;
    return [
      ...perWorker.flat(),
      ...systemData.data.logs.map((entry) => ({
        ...entry,
        level: `systemd/${entry.level}`,
        workerId: 0,
      })),
    ]
      .sort((a, b) => b.timestamp.localeCompare(a.timestamp));
  }

  private async fetchBans(
    base: string,
    workerIds: number[],
    token: string,
  ): Promise<string[]> {
    const perWorker = await Promise.all(
      workerIds.map(async (workerId) => {
        const response = await fetch(`${base}/w${workerId}/api/admin/bans`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 401) {
          sessionStorage.removeItem(SESSION_KEY);
          this.loggedIn = false;
          throw new Error(translateText("admin_panel.session_expired"));
        }
        if (!response.ok) {
          throw new Error(
            translateText("admin_panel.worker_failed", {
              worker: workerId,
              status: response.status,
            }),
          );
        }
        const parsed = z
          .object({ accountKeys: z.array(z.string().regex(/^[0-9a-f]{64}$/)) })
          .safeParse(await response.json());
        if (!parsed.success) {
          throw new Error(translateText("admin_panel.load_failed"));
        }
        return parsed.data.accountKeys;
      }),
    );
    return [...new Set(perWorker.flat())];
  }

  private async fetchLocalAdminData(
    base: string,
    token: string,
  ): Promise<{
    accounts: ManagedAccount[];
    products: ManagedProduct[];
    categories: ManagedCategory[];
  }> {
    const headers = { Authorization: `Bearer ${token}` };
    const [accountsResponse, productsResponse] = await Promise.all([
      fetch(`${base}/w0/api/admin/accounts`, { headers }),
      fetch(`${base}/w0/api/admin/products`, { headers }),
    ]);
    for (const response of [accountsResponse, productsResponse]) {
      if (response.status === 401) {
        sessionStorage.removeItem(SESSION_KEY);
        this.loggedIn = false;
        throw new Error(translateText("admin_panel.session_expired"));
      }
      if (!response.ok) {
        throw new Error(
          translateText("admin_panel.worker_failed", {
            worker: 0,
            status: response.status,
          }),
        );
      }
    }
    const accounts = z
      .object({ accounts: z.array(ManagedAccountSchema) })
      .safeParse(await accountsResponse.json());
    const products = z
      .object({
        products: z.array(ManagedProductSchema),
        categories: z.array(ManagedCategorySchema).default([]),
      })
      .safeParse(await productsResponse.json());
    if (!accounts.success || !products.success) {
      throw new Error(translateText("admin_panel.load_failed"));
    }
    return {
      accounts: accounts.data.accounts,
      products: products.data.products,
      categories: products.data.categories,
    };
  }

  private async setAccountBan(accountKey: string, banned: boolean) {
    const messageKey = banned
      ? "admin_panel.ban_confirm"
      : "admin_panel.unban_confirm";
    if (!window.confirm(translateText(messageKey))) return;
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) {
      this.loggedIn = false;
      this.error = translateText("admin_panel.session_expired");
      return;
    }
    try {
      const { base, workerCount } = await this.apiBase();
      const endpoint = banned ? "ban" : "unban";
      const responses = await Promise.all(
        Array.from({ length: workerCount }, (_, workerId) =>
          fetch(`${base}/w${workerId}/api/admin/${endpoint}`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ accountKey }),
          }),
        ),
      );
      if (responses.some((response) => response.status === 401)) {
        sessionStorage.removeItem(SESSION_KEY);
        this.loggedIn = false;
        throw new Error(translateText("admin_panel.session_expired"));
      }
      if (responses.some((response) => !response.ok)) {
        throw new Error(translateText("admin_panel.maintenance_partial"));
      }
      await this.refresh();
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.action_failed", { status: "?" });
      await this.refresh();
    }
  }

  private async setMaintenanceMode(enabled: boolean) {
    const promptKey = enabled
      ? "admin_panel.maintenance_start_confirm"
      : "admin_panel.maintenance_stop_confirm";
    if (!window.confirm(translateText(promptKey))) return;
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) {
      this.loggedIn = false;
      this.error = translateText("admin_panel.session_expired");
      return;
    }
    try {
      const { base, workerCount } = await this.apiBase();
      const responses = await Promise.all(
        Array.from({ length: workerCount }, (_, workerId) =>
          fetch(`${base}/w${workerId}/api/admin/maintenance`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ enabled }),
          }),
        ),
      );
      if (responses.some((response) => response.status === 401)) {
        sessionStorage.removeItem(SESSION_KEY);
        this.loggedIn = false;
        throw new Error(translateText("admin_panel.session_expired"));
      }
      if (responses.some((response) => !response.ok)) {
        throw new Error(translateText("admin_panel.maintenance_partial"));
      }
      await this.refresh();
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.maintenance_partial");
      await this.refresh();
    }
  }

  private async kick(gameID: string, clientID: string) {
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) {
      this.loggedIn = false;
      this.error = translateText("admin_panel.session_expired");
      return;
    }
    try {
      const overview = this.overviews.find((entry) =>
        entry.games.some((game) => game.gameID === gameID),
      );
      if (!overview)
        throw new Error(translateText("admin_panel.player_not_found"));
      const { base } = await this.apiBase();
      const response = await fetch(
        `${base}/w${overview.workerId}/api/admin/kick`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ gameID, clientID }),
        },
      );
      if (response.status === 401) {
        this.signOut();
        throw new Error(translateText("admin_panel.session_expired"));
      }
      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? translateText("admin_panel.player_not_found")
            : translateText("admin_panel.action_failed", {
                status: response.status,
              }),
        );
      }
      await this.refresh();
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.action_failed", { status: "?" });
    }
  }

  private filteredPlayers(): {
    game: AdminGame;
    player: AdminPlayer;
    workerId: number;
  }[] {
    const query = this.search.trim().toLocaleLowerCase();
    return this.overviews.flatMap((overview) =>
      overview.games.flatMap((game) =>
        game.players
          .filter(
            (player) =>
              !query ||
              player.username.toLocaleLowerCase().includes(query) ||
              player.clientID.toLocaleLowerCase().includes(query) ||
              game.gameID.toLocaleLowerCase().includes(query),
          )
          .map((player) => ({ game, player, workerId: overview.workerId })),
      ),
    );
  }

  private formatBytes(bytes: number): string {
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
    if (bytes >= 1024 * 1024 * 1024) {
      return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  private formatUptime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const days = Math.floor(hours / 24);
    return days > 0
      ? translateText("admin_panel.uptime_days", {
          days,
          hours: hours % 24,
        })
      : translateText("admin_panel.uptime_hours", {
          hours,
          minutes: Math.floor((seconds % 3600) / 60),
        });
  }

  private formatGamePhase(phase: string): string {
    return translateText(`admin_panel.phase_${phase.toLowerCase()}`);
  }

  private formatGameType(gameType: string): string {
    return translateText(`admin_panel.game_type_${gameType.toLowerCase()}`);
  }

  private navButton(tab: AdminTab, label: string, icon: string) {
    const selected = this.tab === tab;
    return html`
      <button
        class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-start text-sm transition ${selected
          ? "bg-sky-500/15 text-sky-200 ring-1 ring-inset ring-sky-400/20"
          : "text-slate-400 hover:bg-white/5 hover:text-white"}"
        aria-current=${selected ? "page" : "false"}
        @click=${() => (this.tab = tab)}
      >
        <span
          class="grid size-6 place-items-center rounded-md bg-white/5 text-xs"
          >${icon}</span
        >
        <span>${label}</span>
      </button>
    `;
  }

  private renderLogin() {
    return html`
      <style>
        body.admin-panel-open {
          height: auto !important;
          min-height: 100dvh;
          overflow-x: clip !important;
          overflow-y: auto !important;
          flex-direction: column !important;
          flex-wrap: nowrap !important;
        }
        body.admin-panel-open desktop-nav-bar,
        body.admin-panel-open mobile-nav-bar,
        body.admin-panel-open page-footer,
        body.admin-panel-open music-player {
          display: none !important;
        }
        body.admin-panel-open main-layout > main {
          width: 100%;
          max-width: none;
          padding: 0 !important;
        }
        body.admin-panel-open main-layout > main > div {
          width: 100%;
          max-width: none;
          padding: 0 !important;
          overflow: visible;
        }
        body.admin-panel-open main-layout {
          display: block !important;
        }
        body.admin-panel-open main-layout > main,
        body.admin-panel-open main-layout > main > div,
        body.admin-panel-open admin-panel {
          min-height: 100dvh;
          height: auto !important;
          flex: none !important;
        }
        admin-panel main section,
        admin-panel main article {
          box-shadow:
            0 14px 30px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.035);
          transform-style: preserve-3d;
        }
        admin-panel main button {
          transition:
            transform 140ms ease,
            box-shadow 140ms ease;
        }
        admin-panel main button:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.24);
        }
      </style>
      <main
        dir="rtl"
        lang="fa"
        class="grid min-h-screen place-items-center bg-[#0b0e14] px-4 text-slate-100"
      >
        <section
          class="w-full max-w-md rounded-2xl border border-white/10 bg-[#111620] p-8 shadow-[0_28px_70px_rgba(0,0,0,.55),inset_0_1px_0_rgba(255,255,255,.06)]"
        >
          <div class="mb-7 flex items-center gap-3">
            <div
              class="grid size-11 place-items-center rounded-xl bg-sky-600 text-lg font-black text-white shadow-[0_8px_18px_rgba(2,132,199,.3)]"
            >
              د
            </div>
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300"
              >
                ${translateText("admin_panel.brand_name")}
              </p>
              <h1 class="text-xl font-bold">
                ${translateText("admin_panel.login_title")}
              </h1>
            </div>
          </div>
          <p class="mb-6 text-sm leading-6 text-slate-400">
            ${translateText("admin_panel.login_subtitle")}
          </p>
          ${this.error
            ? html`<div
                role="alert"
                class="mb-4 rounded-lg border border-rose-400/30 bg-rose-950/40 px-3 py-2 text-sm text-rose-200"
              >
                ${this.error}
              </div>`
            : ""}
          <form
            class="space-y-4"
            @submit=${(event: SubmitEvent) => void this.login(event)}
          >
            <label class="block space-y-1.5 text-sm">
              <span class="text-slate-300"
                >${translateText("admin_panel.username")}</span
              >
              <input
                class="w-full rounded-lg border border-white/10 bg-[#0b0e14] px-3 py-2.5 text-slate-100 caret-sky-300 outline-none transition placeholder:text-slate-500 focus:border-sky-400"
                autocomplete="username"
                required
                .value=${this.username}
                @input=${(event: InputEvent) =>
                  (this.username = (event.target as HTMLInputElement).value)}
              />
            </label>
            <label class="block space-y-1.5 text-sm">
              <span class="text-slate-300"
                >${translateText("admin_panel.password")}</span
              >
              <input
                class="w-full rounded-lg border border-white/10 bg-[#0b0e14] px-3 py-2.5 text-slate-100 caret-sky-300 outline-none transition placeholder:text-slate-500 focus:border-sky-400"
                type="password"
                autocomplete="current-password"
                required
                .value=${this.password}
                @input=${(event: InputEvent) =>
                  (this.password = (event.target as HTMLInputElement).value)}
              />
            </label>
            <button
              class="mt-2 w-full rounded-lg bg-sky-600 px-4 py-2.5 font-semibold text-white shadow-[0_6px_14px_rgba(2,132,199,.25)] transition hover:bg-sky-500 disabled:cursor-wait disabled:opacity-60"
              ?disabled=${this.submitting}
            >
              ${this.submitting
                ? translateText("admin_panel.authenticating")
                : translateText("admin_panel.sign_in")}
            </button>
          </form>
          <p class="mt-6 text-center text-xs text-slate-500">
            ${translateText("admin_panel.secure_session")}
          </p>
        </section>
      </main>
    `;
  }

  private renderUsers() {
    const entries = this.filteredPlayers();
    const accountQuery = this.search.trim().toLocaleLowerCase();
    const accounts = this.managedAccounts.filter(
      (account) =>
        !accountQuery ||
        account.username.toLocaleLowerCase().includes(accountQuery) ||
        (account.phone ?? "").toLocaleLowerCase().includes(accountQuery),
    );
    return html`
      <section class="space-y-5">
        <section class="overflow-hidden rounded-xl border border-white/[0.07] bg-[#111620]">
        <p class="border-b border-white/[0.07] px-5 py-3 text-xs leading-5 text-slate-400">
          ${translateText("admin_panel.users_scope")}
        </p>
        <header
          class="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-4"
        >
          <div>
            <h2 class="font-semibold text-slate-100">
              ${translateText("admin_panel.users")}
            </h2>
            <p class="mt-1 text-xs text-slate-500">
              ${translateText("admin_panel.online_user_count", {
                count: entries.length,
              })}
            </p>
          </div>
          <input
            class="min-w-56 rounded-lg border border-white/10 bg-[#0b0e14] px-3 py-2 text-sm outline-none focus:border-sky-400"
            type="search"
            .value=${this.search}
            placeholder=${translateText("admin_panel.search")}
            @input=${(event: InputEvent) =>
              (this.search = (event.target as HTMLInputElement).value)}
          />
        </header>
        <div class="overflow-x-auto">
          <table class="w-full min-w-[800px] text-left text-sm">
            <thead
              class="bg-white/[0.025] text-xs uppercase tracking-wider text-slate-500"
            >
              <tr>
                <th class="px-5 py-3 font-medium">
                  ${translateText("admin_panel.player")}
                </th>
                <th class="px-5 py-3 font-medium">
                  ${translateText("admin_panel.game")}
                </th>
                <th class="px-5 py-3 font-medium">
                  ${translateText("admin_panel.status")}
                </th>
                <th class="px-5 py-3 font-medium">
                  ${translateText("admin_panel.registered")}
                </th>
                <th class="px-5 py-3 font-medium">
                  ${translateText("admin_panel.platform")}
                </th>
                <th class="px-5 py-3 text-right font-medium">
                  ${translateText("admin_panel.actions")}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/[0.06]">
              ${entries.map(
                ({ game, player }) => html`
                  <tr class="hover:bg-white/[0.025]">
                    <td class="px-5 py-3.5">
                      <div class="font-medium text-slate-200">
                        ${player.username}
                      </div>
                      <div class="mt-1 font-mono text-[11px] text-slate-500">
                        ${player.clientID}
                      </div>
                    </td>
                    <td class="px-5 py-3.5 font-mono text-slate-300">
                      ${game.gameID}
                    </td>
                    <td class="px-5 py-3.5">
                      <span
                        class="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300"
                      >
                        <span
                          class="size-1.5 rounded-full bg-emerald-400"
                        ></span>
                        ${player.spectator
                          ? translateText("admin_panel.spectator")
                          : translateText("admin_panel.in_game")}
                      </span>
                    </td>
                    <td class="px-5 py-3.5 text-slate-400">
                      ${player.registered
                        ? translateText("admin_panel.registered")
                        : translateText("admin_panel.guest")}
                    </td>
                    <td class="px-5 py-3.5 text-slate-400">
                      ${player.platform}
                    </td>
                    <td class="px-5 py-3.5 text-right">
                      <div class="flex justify-end gap-2">
                        <button
                          class="rounded-md border border-rose-400/20 px-2.5 py-1.5 text-xs text-rose-300 transition hover:bg-rose-400/10"
                          @click=${() =>
                            void this.kick(game.gameID, player.clientID)}
                        >
                          ${translateText("admin_panel.kick")}
                        </button>
                        <button
                          class="rounded-md border border-red-500/30 px-2.5 py-1.5 text-xs text-red-200 transition hover:bg-red-500/10"
                          @click=${() =>
                            void this.setAccountBan(player.accountKey, true)}
                        >
                          ${translateText("admin_panel.ban")}
                        </button>
                      </div>
                    </td>
                  </tr>
                `,
              )}
              ${entries.length === 0
                ? html`<tr>
                    <td
                      colspan="6"
                      class="px-5 py-12 text-center text-slate-500"
                    >
                      ${translateText("admin_panel.no_players")}
                    </td>
                  </tr>`
                : ""}
            </tbody>
          </table>
        </div>
      </section>
      <section class="overflow-hidden rounded-xl border border-white/[0.07] bg-[#111620]">
        <header class="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-4">
          <h2 class="font-semibold text-slate-100">${translateText("admin_panel.local_accounts_in_users")}</h2>
          <span class="text-xs text-slate-500">${translateText("admin_panel.local_account_count", { count: accounts.length })}</span>
        </header>
        <div class="overflow-x-auto">
          <table class="w-full min-w-[560px] text-left text-sm">
            <thead class="bg-white/[0.025] text-xs text-slate-500">
              <tr>
                <th class="px-5 py-3">${translateText("admin_panel.username")}</th>
                <th class="px-5 py-3">${translateText("admin_panel.phone")}</th>
                <th class="px-5 py-3">${translateText("admin_panel.status")}</th>
                <th class="px-5 py-3">${translateText("admin_panel.created")}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/[0.06]">
              ${accounts.map((account) => html`<tr>
                <td class="px-5 py-3 text-slate-200">${account.username}</td>
                <td class="px-5 py-3 text-slate-400">${account.phone ?? "—"}</td>
                <td class="px-5 py-3 ${account.banned || (account.bannedUntil ?? 0) > Date.now() ? "text-rose-300" : "text-emerald-300"}">
                  ${account.banned || (account.bannedUntil ?? 0) > Date.now()
                    ? translateText("admin_panel.account_status_banned")
                    : translateText("admin_panel.account_status_active")}
                </td>
                <td class="px-5 py-3 text-slate-500">${new Date(account.createdAt).toLocaleDateString("fa-IR")}</td>
              </tr>`)}
              ${accounts.length === 0
                ? html`<tr><td colspan="4" class="px-5 py-8 text-center text-slate-500">${translateText("admin_panel.no_local_accounts")}</td></tr>`
                : nothing}
            </tbody>
          </table>
        </div>
      </section>
      </section>
    `;
  }

  private renderGames() {
    const games = this.overviews.flatMap((overview) =>
      overview.games.map((game) => ({ game, workerId: overview.workerId })),
    );
    return html`
      <section
        class="overflow-x-auto rounded-xl border border-white/[0.07] bg-[#111620]"
      >
        <table class="w-full min-w-[760px] text-left text-sm">
          <thead
            class="bg-white/[0.025] text-xs uppercase tracking-wider text-slate-500"
          >
            <tr>
              <th class="px-5 py-3">${translateText("admin_panel.game_id")}</th>
              <th class="px-5 py-3">${translateText("admin_panel.status")}</th>
              <th class="px-5 py-3">${translateText("admin_panel.game")}</th>
              <th class="px-5 py-3">${translateText("admin_panel.worker")}</th>
              <th class="px-5 py-3">
                ${translateText("admin_panel.online_users")}
              </th>
              <th class="px-5 py-3 text-right">
                ${translateText("admin_panel.actions")}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/[0.06]">
            ${games.map(
              ({ game, workerId }) => html`
                <tr>
                  <td class="px-5 py-3 font-mono text-xs text-slate-300">
                    ${game.gameID}
                  </td>
                  <td class="px-5 py-3 text-slate-300">${this.formatGamePhase(game.phase)}</td>
                  <td class="px-5 py-3 text-slate-300">${this.formatGameType(game.gameType)}</td>
                  <td class="px-5 py-3 text-slate-400">${workerId}</td>
                  <td class="px-5 py-3 text-slate-300">
                    ${game.players.length}
                  </td>
                  <td class="px-5 py-3 text-right">
                    <button
                      class="rounded-md border border-sky-400/20 px-2.5 py-1.5 text-xs text-sky-200 hover:bg-sky-400/10"
                      @click=${() => {
                        this.search = game.gameID;
                        this.tab = "users";
                      }}
                    >
                      ${translateText("admin_panel.view_players")}
                    </button>
                  </td>
                </tr>
              `,
            )}
            ${games.length === 0
              ? html`<tr>
                  <td colspan="6" class="px-5 py-10 text-center text-slate-500">
                    ${translateText("admin_panel.no_games")}
                  </td>
                </tr>`
              : ""}
          </tbody>
        </table>
      </section>
    `;
  }

  private renderBans() {
    const players = new Map<string, string>();
    for (const overview of this.overviews) {
      for (const game of overview.games) {
        for (const player of game.players) {
          players.set(player.accountKey, player.username);
        }
      }
    }
    return html`
      <section class="space-y-4">
        <p class="text-xs leading-5 text-slate-400">
          ${translateText("admin_panel.bans_note")}
        </p>
        <div
          class="overflow-x-auto rounded-xl border border-white/[0.07] bg-[#111620]"
        >
          <table class="w-full min-w-[560px] text-left text-sm">
            <thead class="bg-white/[0.025] text-xs text-slate-500">
              <tr>
                <th class="px-5 py-3">
                  ${translateText("admin_panel.player")}
                </th>
                <th class="px-5 py-3">
                  ${translateText("admin_panel.account_key")}
                </th>
                <th class="px-5 py-3 text-right">
                  ${translateText("admin_panel.actions")}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/[0.06]">
              ${this.accountKeys.map(
                (accountKey) => html`
                  <tr>
                    <td class="px-5 py-3 text-slate-200">
                      ${players.get(accountKey) ??
                      translateText("admin_panel.offline_account")}
                    </td>
                    <td class="px-5 py-3 font-mono text-xs text-slate-500">
                      ${accountKey.slice(0, 16)}…
                    </td>
                    <td class="px-5 py-3 text-right">
                      <button
                        class="rounded-md border border-emerald-400/20 px-2.5 py-1.5 text-xs text-emerald-200 hover:bg-emerald-400/10"
                        @click=${() =>
                          void this.setAccountBan(accountKey, false)}
                      >
                        ${translateText("admin_panel.unban")}
                      </button>
                    </td>
                  </tr>
                `,
              )}
              ${this.accountKeys.length === 0
                ? html`<tr>
                    <td
                      colspan="3"
                      class="px-5 py-10 text-center text-slate-500"
                    >
                      ${translateText("admin_panel.no_bans")}
                    </td>
                  </tr>`
                : ""}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  private renderReports() {
    return html`
      <section class="space-y-4">
        <p class="text-xs text-slate-500">
          ${translateText("admin_panel.reports_memory_note")}
        </p>
        ${this.reports.length === 0
          ? html`<div
              class="rounded-xl border border-white/[0.07] bg-[#111620] p-10 text-center text-sm text-slate-400"
            >
              ${translateText("admin_panel.no_reports")}
            </div>`
          : this.reports.map(
              (report) => html`
                <article
                  class="rounded-xl border border-white/[0.07] bg-[#111620] p-5"
                >
                  <header
                    class="flex flex-wrap items-center justify-between gap-2"
                  >
                    <div class="flex flex-wrap items-center gap-2">
                      <span
                        class="rounded-full border border-rose-300/20 bg-rose-300/10 px-2.5 py-1 text-xs font-semibold text-rose-200"
                      >
                        ${translateText(
                          `admin_panel.report_reason_${report.reason}`,
                        )}
                      </span>
                      <span class="text-xs text-slate-500"
                        >${report.source === "game" && report.gameID
                          ? translateText("admin_panel.game_reference", {
                              id: report.gameID,
                            })
                          : translateText("admin_panel.worker_reference", {
                              id: report.workerId,
                            })}</span
                      >
                    </div>
                    <time class="text-xs text-slate-500"
                      >${new Date(report.createdAt).toLocaleString("fa-IR")}</time
                    >
                  </header>
                  <div class="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                    <p>
                      <span class="text-slate-500"
                        >${translateText("admin_panel.reported_user")}:
                      </span>
                      <strong class="text-slate-200"
                        >${report.reported.username}</strong
                      >
                    </p>
                    <p>
                      <span class="text-slate-500"
                        >${translateText("admin_panel.reporter")}:
                      </span>
                      <strong class="text-slate-200"
                        >${report.reportedBy.username}</strong
                      >
                    </p>
                  </div>
                  ${report.message
                    ? html`<div
                        class="mt-4 rounded-lg border border-white/[0.06] bg-black/20 p-3"
                      >
                        <p
                          class="mb-1 text-[10px] font-semibold text-slate-500"
                        >
                          ${translateText("admin_panel.reported_message")}
                        </p>
                        <p
                          class="whitespace-pre-wrap break-words text-sm leading-6 text-slate-200"
                        >
                          ${report.message}
                        </p>
                      </div>`
                    : ""}
                </article>
              `,
            )}
      </section>
    `;
  }

  private async toggleAccountInventory(account: ManagedAccount) {
    if (Object.prototype.hasOwnProperty.call(this.inventoryByAccount, account.id)) {
      const next = { ...this.inventoryByAccount };
      delete next[account.id];
      this.inventoryByAccount = next;
      return;
    }
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return this.signOut();
    this.inventoryLoadingAccount = account.id;
    this.error = null;
    try {
      const { base } = await this.apiBase();
      const response = await fetch(
        `${base}/w0/api/admin/accounts/${encodeURIComponent(account.id)}/inventory`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (response.status === 401) {
        sessionStorage.removeItem(SESSION_KEY);
        this.loggedIn = false;
        throw new Error(translateText("admin_panel.session_expired"));
      }
      if (!response.ok) {
        throw new Error(
          translateText("admin_panel.action_failed", {
            status: response.status,
          }),
        );
      }
      const parsed = z
        .object({ items: z.array(ManagedInventoryItemSchema) })
        .safeParse(await response.json());
      if (!parsed.success) {
        throw new Error(translateText("admin_panel.inventory_load_failed"));
      }
      this.inventoryByAccount = {
        ...this.inventoryByAccount,
        [account.id]: parsed.data.items,
      };
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.inventory_load_failed");
    } finally {
      this.inventoryLoadingAccount = null;
    }
  }

  private resetAccountDraft() {
    this.accountEditId = null;
    this.accountDraftUsername = "";
    this.accountDraftPassword = "";
    this.accountDraftPhone = "";
  }

  private editManagedAccount(account: ManagedAccount) {
    this.accountEditId = account.id;
    this.accountDraftUsername = account.username;
    this.accountDraftPassword = "";
    this.accountDraftPhone = account.phone ?? "";
  }

  private async saveManagedAccount(event: SubmitEvent) {
    event.preventDefault();
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return this.signOut();
    if (!this.accountEditId && this.accountDraftPassword.length < 8) {
      this.error = translateText("admin_panel.account_password_required");
      return;
    }
    this.submitting = true;
    this.error = null;
    try {
      const { base } = await this.apiBase();
      const response = await fetch(
        `${base}/w0/api/admin/accounts${this.accountEditId ? `/${encodeURIComponent(this.accountEditId)}` : ""}`,
        {
          method: this.accountEditId ? "PUT" : "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.accountDraftUsername,
            password: this.accountDraftPassword || undefined,
            phone: this.accountDraftPhone || null,
          }),
        },
      );
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as
          | { error?: unknown }
          | null;
        throw new Error(
          typeof body?.error === "string"
            ? body.error
            : translateText("admin_panel.action_failed", {
                status: response.status,
              }),
        );
      }
      this.resetAccountDraft();
      await this.refresh();
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.load_failed");
    } finally {
      this.submitting = false;
    }
  }

  private async changeManagedAccountBan(
    account: ManagedAccount,
    banned: boolean,
  ) {
    const confirmation = banned
      ? "این حساب مسدود و از بازی‌های فعال خارج می‌شود. ادامه می‌دهید؟"
      : "مسدودیت ورود این حساب برداشته شود؟";
    if (!window.confirm(confirmation)) return;
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return this.signOut();
    this.submitting = true;
    this.error = null;
    try {
      const { base, workerCount } = await this.apiBase();
      await Promise.all(
        Array.from({ length: workerCount }, async (_, workerId) => {
          const response = await fetch(
            `${base}/w${workerId}/api/admin/accounts/${encodeURIComponent(account.id)}/${banned ? "ban" : "unban"}`,
            {
              method: "POST",
              headers: { Authorization: `Bearer ${token}` },
            },
          );
          if (!response.ok) {
            throw new Error(
              translateText("admin_panel.worker_failed", {
                worker: workerId,
                status: response.status,
              }),
            );
          }
        }),
      );
      await this.refresh();
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.load_failed");
    } finally {
      this.submitting = false;
    }
  }

  private async deleteManagedAccount(account: ManagedAccount) {
    if (
      !window.confirm(
        `حساب «${account.username}» برای همیشه حذف شود؟ این کار قابل بازگشت نیست.`,
      )
    ) {
      return;
    }
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return this.signOut();
    this.submitting = true;
    this.error = null;
    try {
      const { base, workerCount } = await this.apiBase();
      const bans = await Promise.all(
        Array.from({ length: workerCount }, (_, workerId) =>
          fetch(
            `${base}/w${workerId}/api/admin/accounts/${encodeURIComponent(account.id)}/ban`,
            {
              method: "POST",
              headers: { Authorization: `Bearer ${token}` },
            },
          ),
        ),
      );
      const failedBan = bans.find((response) => !response.ok);
      if (failedBan) {
        throw new Error(
          translateText("admin_panel.action_failed", {
            status: failedBan.status,
          }),
        );
      }
      const response = await fetch(
        `${base}/w0/api/admin/accounts/${encodeURIComponent(account.id)}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) {
        throw new Error(
          translateText("admin_panel.action_failed", {
            status: response.status,
          }),
        );
      }
      if (this.accountEditId === account.id) this.resetAccountDraft();
      await this.refresh();
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.load_failed");
    } finally {
      this.submitting = false;
    }
  }

  private async warnManagedAccount(account: ManagedAccount) {
    const message = window.prompt(
      translateText("admin_panel.warn_prompt", {
        username: account.username,
      }),
    );
    if (message === null) return;
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return this.signOut();
    this.submitting = true;
    try {
      const { base } = await this.apiBase();
      const response = await fetch(
        `${base}/w0/api/admin/accounts/${encodeURIComponent(account.id)}/warn`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        },
      );
      if (!response.ok) {
        throw new Error(
          translateText("admin_panel.action_failed", {
            status: response.status,
          }),
        );
      }
      await this.refresh();
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.load_failed");
    } finally {
      this.submitting = false;
    }
  }

  private async grantProductToAccount(account: ManagedAccount) {
    const products = this.managedProducts.filter((product) => product.active);
    if (products.length === 0) {
      this.error = translateText("admin_panel.no_active_products");
      return;
    }
    const choice = window.prompt(
      `${translateText("admin_panel.choose_product")}\n${products
        .map((product, index) => `${index + 1}. ${product.name}`)
        .join("\n")}`,
      "1",
    );
    if (choice === null) return;
    const selected = Number(choice);
    if (!Number.isInteger(selected) || selected < 1 || selected > products.length) {
      this.error = translateText("admin_panel.action_failed", { status: "invalid product" });
      return;
    }
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return this.signOut();
    this.submitting = true;
    this.error = null;
    try {
      const { base } = await this.apiBase();
      const response = await fetch(
        `${base}/w0/api/admin/accounts/${encodeURIComponent(account.id)}/inventory`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: products[selected - 1].id }),
        },
      );
      if (!response.ok) {
        throw new Error(
          translateText("admin_panel.action_failed", { status: response.status }),
        );
      }
      await this.refresh();
    } catch (error) {
      this.error = error instanceof Error
        ? error.message
        : translateText("admin_panel.load_failed");
    } finally {
      this.submitting = false;
    }
  }

  private async temporarilyBanAccount(account: ManagedAccount) {
    const input = window.prompt(
      translateText("admin_panel.temporary_ban_prompt", {
        username: account.username,
      }),
      "24",
    );
    if (input === null) return;
    const hours = Number(input);
    if (!Number.isInteger(hours) || hours < 1 || hours > 24 * 365) {
      this.error = translateText("admin_panel.temporary_ban_invalid");
      return;
    }
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return this.signOut();
    this.submitting = true;
    try {
      const { base, workerCount } = await this.apiBase();
      await Promise.all(
        Array.from({ length: workerCount }, async (_, workerId) => {
          const response = await fetch(
            `${base}/w${workerId}/api/admin/accounts/${encodeURIComponent(account.id)}/temporary-ban`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ hours }),
            },
          );
          if (!response.ok) {
            throw new Error(
              translateText("admin_panel.worker_failed", {
                worker: workerId,
                status: response.status,
              }),
            );
          }
        }),
      );
      await this.refresh();
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.load_failed");
    } finally {
      this.submitting = false;
    }
  }

  private async downloadAdminExport() {
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return this.signOut();
    try {
      const { base } = await this.apiBase();
      const response = await fetch(`${base}/w0/api/admin/export`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        if (response.status === 401) {
          sessionStorage.removeItem(SESSION_KEY);
          this.loggedIn = false;
          throw new Error(translateText("admin_panel.session_expired"));
        }
        throw new Error(
          translateText("admin_panel.action_failed", {
            status: response.status,
          }),
        );
      }
      const url = URL.createObjectURL(await response.blob());
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "openfront-admin-export.json";
      anchor.style.display = "none";
      document.body.append(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1_000);
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.load_failed");
    }
  }

  private async saveManagedCategory(event: SubmitEvent) {
    event.preventDefault();
    const name = this.categoryDraftName.trim();
    if (!name) return;
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return this.signOut();
    this.submitting = true;
    this.error = null;
    try {
      const { base } = await this.apiBase();
      const response = await fetch(
        `${base}/w0/api/admin/categories${this.categoryEditId ? `/${encodeURIComponent(this.categoryEditId)}` : ""}`,
        {
          method: this.categoryEditId ? "PUT" : "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        },
      );
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as
          | { error?: unknown }
          | null;
        throw new Error(
          typeof body?.error === "string"
            ? body.error
            : translateText("admin_panel.action_failed", { status: response.status }),
        );
      }
      this.categoryEditId = null;
      this.categoryDraftName = "";
      await this.refresh();
    } catch (error) {
      this.error = error instanceof Error
        ? error.message
        : translateText("admin_panel.load_failed");
    } finally {
      this.submitting = false;
    }
  }

  private async deleteManagedCategory(category: ManagedCategory) {
    if (!window.confirm(`دستهٔ «${category.name}» حذف شود؟ محصولات بدون دسته باقی می‌مانند.`)) {
      return;
    }
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return this.signOut();
    this.submitting = true;
    this.error = null;
    try {
      const { base } = await this.apiBase();
      const response = await fetch(
        `${base}/w0/api/admin/categories/${encodeURIComponent(category.id)}`,
        { method: "DELETE", headers: { Authorization: `Bearer ${token}` } },
      );
      if (!response.ok) {
        throw new Error(
          translateText("admin_panel.action_failed", { status: response.status }),
        );
      }
      if (this.categoryEditId === category.id) {
        this.categoryEditId = null;
        this.categoryDraftName = "";
      }
      await this.refresh();
    } catch (error) {
      this.error = error instanceof Error
        ? error.message
        : translateText("admin_panel.load_failed");
    } finally {
      this.submitting = false;
    }
  }

  private resetProductDraft() {
    this.productEditId = null;
    this.productDraftName = "";
    this.productDraftDescription = "";
    this.productDraftPrice = "";
    this.productDraftCurrency = "تومان";
    this.productDraftPaymentUrl = "";
    this.productDraftCategoryId = "";
    this.productDraftActive = true;
    this.productDraftImage = undefined;
    this.productDraftImageUrl = null;
  }

  private editManagedProduct(product: ManagedProduct) {
    this.productEditId = product.id;
    this.productDraftName = product.name;
    this.productDraftDescription = product.description;
    this.productDraftPrice = String(product.price);
    this.productDraftCurrency = product.currency;
    this.productDraftPaymentUrl = product.paymentUrl ?? "";
    this.productDraftCategoryId = product.categoryId ?? "";
    this.productDraftActive = product.active;
    this.productDraftImage = undefined;
    this.productDraftImageUrl = product.imageUrl ?? null;
  }

  private async readProductImage(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (
      file.size > 3 * 1024 * 1024 ||
      !["image/png", "image/jpeg", "image/webp"].includes(file.type)
    ) {
      this.error = translateText("admin_panel.product_image_invalid");
      input.value = "";
      return;
    }
    try {
      this.productDraftImage = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () =>
          typeof reader.result === "string"
            ? resolve(reader.result)
            : reject(new Error("Could not read product image"));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
      });
      this.productDraftImageUrl = this.productDraftImage;
      this.error = null;
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.product_image_invalid");
    }
  }

  private async saveManagedProduct(event: SubmitEvent) {
    event.preventDefault();
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return this.signOut();
    const price = Number(this.productDraftPrice);
    if (!Number.isSafeInteger(price) || price < 0) {
      this.error = translateText("admin_panel.product_price_invalid");
      return;
    }
    this.submitting = true;
    this.error = null;
    try {
      const { base } = await this.apiBase();
      const response = await fetch(
        `${base}/w0/api/admin/products${this.productEditId ? `/${encodeURIComponent(this.productEditId)}` : ""}`,
        {
          method: this.productEditId ? "PUT" : "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.productDraftName,
            description: this.productDraftDescription,
            price,
            currency: this.productDraftCurrency,
            paymentUrl: this.productDraftPaymentUrl || null,
            categoryId: this.productDraftCategoryId || null,
            active: this.productDraftActive,
            imageDataUrl: this.productDraftImage,
          }),
        },
      );
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as
          | { error?: unknown }
          | null;
        throw new Error(
          typeof body?.error === "string"
            ? body.error
            : translateText("admin_panel.action_failed", {
                status: response.status,
              }),
        );
      }
      this.resetProductDraft();
      await this.refresh();
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.load_failed");
    } finally {
      this.submitting = false;
    }
  }

  private async deleteManagedProduct(product: ManagedProduct) {
    if (!window.confirm(`محصول «${product.name}» حذف شود؟`)) return;
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return this.signOut();
    this.submitting = true;
    this.error = null;
    try {
      const { base } = await this.apiBase();
      const response = await fetch(
        `${base}/w0/api/admin/products/${encodeURIComponent(product.id)}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) {
        throw new Error(
          translateText("admin_panel.action_failed", {
            status: response.status,
          }),
        );
      }
      if (this.productEditId === product.id) this.resetProductDraft();
      await this.refresh();
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.load_failed");
    } finally {
      this.submitting = false;
    }
  }

  private renderManagedAccounts() {
    return html`<section class="space-y-5">
      <p class="rounded-lg border border-sky-400/15 bg-sky-400/[.04] p-3 text-xs leading-5 text-slate-300">
        ${translateText("admin_panel.accounts_scope")}
      </p>
      <div class="flex justify-end">
        <button
          class="rounded-lg border border-sky-400/30 px-4 py-2 text-sm font-semibold text-sky-200 hover:bg-sky-400/10"
          ?disabled=${this.submitting}
          @click=${() => void this.downloadAdminExport()}
        >
          ${translateText("admin_panel.download_export")}
        </button>
      </div>
      <form
        class="grid gap-3 rounded-xl border border-white/[0.07] bg-[#111620] p-4 sm:grid-cols-2"
        @submit=${(event: SubmitEvent) => void this.saveManagedAccount(event)}
      >
        <h2 class="sm:col-span-2 font-semibold text-slate-100">
          ${this.accountEditId
            ? translateText("admin_panel.edit_account")
            : translateText("admin_panel.create_account")}
        </h2>
        <input
          required
          minlength="2"
          maxlength="32"
          autocomplete="off"
          .value=${this.accountDraftUsername}
          @input=${(event: InputEvent) =>
            (this.accountDraftUsername = (event.target as HTMLInputElement).value)}
          placeholder=${translateText("admin_panel.username")}
          class="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white"
        />
        <input
          type="password"
          minlength="8"
          maxlength="256"
          autocomplete="new-password"
          .value=${this.accountDraftPassword}
          @input=${(event: InputEvent) =>
            (this.accountDraftPassword = (event.target as HTMLInputElement).value)}
          placeholder=${this.accountEditId
            ? translateText("admin_panel.password_optional")
            : translateText("admin_panel.password")}
          class="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white"
        />
        <input
          type="tel"
          maxlength="24"
          .value=${this.accountDraftPhone}
          @input=${(event: InputEvent) =>
            (this.accountDraftPhone = (event.target as HTMLInputElement).value)}
          placeholder=${translateText("admin_panel.phone_optional")}
          class="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white"
        />
        <div class="flex gap-2 sm:col-span-2">
          <button
            ?disabled=${this.submitting}
            class="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_6px_14px_rgba(2,132,199,.25)] disabled:opacity-50"
          >
            ${this.accountEditId
              ? translateText("admin_panel.save_changes")
              : translateText("admin_panel.create_account")}
          </button>
          ${this.accountEditId
            ? html`<button
                type="button"
                class="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300"
                @click=${() => this.resetAccountDraft()}
              >
                ${translateText("admin_panel.cancel")}
              </button>`
            : ""}
        </div>
      </form>
      <div class="overflow-x-auto rounded-xl border border-white/[0.07] bg-[#111620]">
        <table class="w-full min-w-[720px] text-left text-sm">
          <thead class="bg-white/[0.025] text-xs text-slate-500">
            <tr>
              <th class="px-4 py-3">${translateText("admin_panel.username")}</th>
              <th class="px-4 py-3">${translateText("admin_panel.phone")}</th>
              <th class="px-4 py-3">${translateText("admin_panel.status")}</th>
              <th class="px-4 py-3">${translateText("admin_panel.created")}</th>
              <th class="px-4 py-3 text-right">${translateText("admin_panel.actions")}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/[0.06]">
            ${this.managedAccounts.map(
              (account) => html`<tr>
                <td class="px-4 py-3 font-medium text-slate-200">${account.username}</td>
                <td class="px-4 py-3 text-slate-400">${account.phone ?? "—"}</td>
                <td class="px-4 py-3 ${account.banned || (account.bannedUntil ?? 0) > Date.now() ? "text-rose-300" : "text-emerald-300"}">
                  ${account.banned
                    ? translateText("admin_panel.banned")
                    : account.bannedUntil && account.bannedUntil > Date.now()
                      ? translateText("admin_panel.banned_until", {
                          time: new Date(account.bannedUntil).toLocaleString(
                            "fa-IR",
                          ),
                        })
                      : translateText("admin_panel.active")}
                  <div class="text-xs text-slate-500">
                    ${translateText("admin_panel.warning_count", {
                      count: account.warningCount,
                    })}
                  </div>
                  <div class="text-xs text-sky-200">
                    ${translateText("admin_panel.inventory_count", {
                      count: account.inventoryCount,
                    })}
                  </div>
                  <button
                    class="mt-1 text-xs text-sky-300 hover:text-sky-100"
                    ?disabled=${this.inventoryLoadingAccount === account.id}
                    @click=${() => void this.toggleAccountInventory(account)}
                  >
                    ${this.inventoryLoadingAccount === account.id
                      ? translateText("admin_panel.refreshing")
                      : Object.prototype.hasOwnProperty.call(
                            this.inventoryByAccount,
                            account.id,
                          )
                        ? translateText("admin_panel.inventory_hide")
                        : translateText("admin_panel.inventory_items")}
                  </button>
                  ${Object.prototype.hasOwnProperty.call(
                    this.inventoryByAccount,
                    account.id,
                  )
                    ? html`<ul class="mt-2 space-y-2 border-r border-white/10 pr-2 text-xs">
                        ${(this.inventoryByAccount[account.id] ?? []).map(
                          (item) => html`<li class="text-slate-300">
                            <strong>${item.name}</strong>
                            <div class="text-slate-500">
                              ${translateText("admin_panel.inventory_granted_by", {
                                name: item.grantedBy,
                              })}
                            </div>
                            <div class="text-slate-500">
                              ${translateText("admin_panel.inventory_date", {
                                time: new Date(item.createdAt).toLocaleString(
                                  "fa-IR",
                                ),
                              })}
                            </div>
                          </li>`,
                        )}
                        ${(this.inventoryByAccount[account.id] ?? []).length ===
                        0
                          ? html`<li class="text-slate-500">
                              ${translateText("admin_panel.inventory_empty")}
                            </li>`
                          : nothing}
                      </ul>`
                    : nothing}
                </td>
                <td class="px-4 py-3 text-slate-500">${new Date(account.createdAt).toLocaleDateString("fa-IR")}</td>
                <td class="px-4 py-3">
                  <div class="flex justify-end gap-2">
                    <button class="rounded border border-sky-400/20 px-2 py-1 text-xs text-sky-200" ?disabled=${this.submitting} @click=${() => void this.grantProductToAccount(account)}>${translateText("admin_panel.grant_product")}</button>
                    <button class="rounded border border-white/10 px-2 py-1 text-xs text-slate-200" @click=${() => this.editManagedAccount(account)}>${translateText("admin_panel.edit")}</button>
                    <button class="rounded border border-amber-400/20 px-2 py-1 text-xs text-amber-200" ?disabled=${this.submitting} @click=${() => void this.changeManagedAccountBan(account, !(account.banned || (account.bannedUntil ?? 0) > Date.now()))}>${account.banned || (account.bannedUntil ?? 0) > Date.now() ? translateText("admin_panel.unban") : translateText("admin_panel.ban")}</button>
                    <button class="rounded border border-orange-400/20 px-2 py-1 text-xs text-orange-200" ?disabled=${this.submitting} @click=${() => void this.temporarilyBanAccount(account)}>${translateText("admin_panel.temporary_ban")}</button>
                    <button class="rounded border border-yellow-400/20 px-2 py-1 text-xs text-yellow-200" ?disabled=${this.submitting} @click=${() => void this.warnManagedAccount(account)}>${translateText("admin_panel.warn")}</button>
                    <button class="rounded border border-rose-400/20 px-2 py-1 text-xs text-rose-200" ?disabled=${this.submitting} @click=${() => void this.deleteManagedAccount(account)}>${translateText("admin_panel.delete")}</button>
                  </div>
                </td>
              </tr>`,
            )}
            ${this.managedAccounts.length === 0
              ? html`<tr><td colspan="5" class="px-4 py-10 text-center text-slate-500">${translateText("admin_panel.no_accounts")}</td></tr>`
              : ""}
          </tbody>
        </table>
      </div>
      <p class="text-xs text-slate-500">${translateText("admin_panel.local_data_note")}</p>
      <p class="text-xs text-amber-200">${translateText("admin_panel.backup_sensitive_note")}</p>
    </section>`;
  }

  private renderManagedProducts() {
    return html`<section class="space-y-5">
      <section class="rounded-xl border border-white/[0.07] bg-[#111620] p-4 shadow-[0_10px_24px_rgba(0,0,0,.25)]">
        <h2 class="mb-3 font-semibold text-slate-100">${translateText("admin_panel.category")}</h2>
        <form class="mb-4 flex flex-wrap gap-2" @submit=${(event: SubmitEvent) => void this.saveManagedCategory(event)}>
          <input required maxlength="80" .value=${this.categoryDraftName} @input=${(event: InputEvent) => (this.categoryDraftName = (event.target as HTMLInputElement).value)} placeholder=${translateText("admin_panel.category_name")} class="min-w-48 flex-1 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white" />
          <button ?disabled=${this.submitting} class="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">${translateText(this.categoryEditId ? "admin_panel.edit_category" : "admin_panel.add_category")}</button>
          ${this.categoryEditId ? html`<button type="button" class="rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300" @click=${() => { this.categoryEditId = null; this.categoryDraftName = ""; }}>${translateText("admin_panel.cancel")}</button>` : ""}
        </form>
        <div class="flex flex-wrap gap-2">
          ${this.managedCategories.map((category) => html`<div class="flex items-center gap-2 rounded-lg border border-white/10 bg-black/15 px-3 py-2 text-sm text-slate-200">
            <span>${category.name}</span>
            <button class="text-sky-200 hover:text-white" @click=${() => { this.categoryEditId = category.id; this.categoryDraftName = category.name; }}>${translateText("admin_panel.edit")}</button>
            <button class="text-rose-200 hover:text-white" ?disabled=${this.submitting} @click=${() => void this.deleteManagedCategory(category)}>${translateText("admin_panel.delete")}</button>
          </div>`)}
        </div>
      </section>
      <form
        class="grid gap-3 rounded-xl border border-white/[0.07] bg-[#111620] p-4 shadow-[0_10px_24px_rgba(0,0,0,.25)] sm:grid-cols-2"
        @submit=${(event: SubmitEvent) => void this.saveManagedProduct(event)}
      >
        <h2 class="sm:col-span-2 font-semibold text-slate-100">
          ${this.productEditId
            ? translateText("admin_panel.edit_product")
            : translateText("admin_panel.add_product")}
        </h2>
        <input required maxlength="120" .value=${this.productDraftName} @input=${(event: InputEvent) => (this.productDraftName = (event.target as HTMLInputElement).value)} placeholder=${translateText("admin_panel.product_name")} class="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white" />
        <input required type="number" min="0" max="1000000000" step="1" .value=${this.productDraftPrice} @input=${(event: InputEvent) => (this.productDraftPrice = (event.target as HTMLInputElement).value)} placeholder=${translateText("admin_panel.product_price")} class="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white" />
        <select .value=${this.productDraftCurrency} @change=${(event: Event) => (this.productDraftCurrency = (event.target as HTMLSelectElement).value)} class="rounded-lg border border-white/10 bg-[#111620] px-3 py-2 text-sm text-white">
          <option value="تومان">تومان</option><option value="ریال">ریال</option><option value="USD">USD</option>
        </select>
        <select .value=${this.productDraftCategoryId} @change=${(event: Event) => (this.productDraftCategoryId = (event.target as HTMLSelectElement).value)} class="rounded-lg border border-white/10 bg-[#111620] px-3 py-2 text-sm text-white">
          <option value="">${translateText("admin_panel.all_categories")}</option>
          ${this.managedCategories.map((category) => html`<option value=${category.id}>${category.name}</option>`)}
        </select>
        <input type="url" maxlength="2048" .value=${this.productDraftPaymentUrl} @input=${(event: InputEvent) => (this.productDraftPaymentUrl = (event.target as HTMLInputElement).value)} placeholder=${translateText("admin_panel.payment_url")} class="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white" />
        <label class="flex cursor-pointer items-center rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300 hover:bg-white/5">
          ${translateText("admin_panel.select_image")}
          <input type="file" accept="image/png,image/jpeg,image/webp" @change=${(event: Event) => void this.readProductImage(event)} class="sr-only" />
        </label>
        <textarea maxlength="2000" .value=${this.productDraftDescription} @input=${(event: InputEvent) => (this.productDraftDescription = (event.target as HTMLTextAreaElement).value)} placeholder=${translateText("admin_panel.product_description")} class="min-h-20 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white sm:col-span-2"></textarea>
        ${this.productDraftImageUrl
          ? html`<div class="flex items-center gap-3 sm:col-span-2"><img src=${this.productDraftImageUrl} alt="" class="size-16 rounded object-cover" /><button type="button" class="text-xs text-rose-300" @click=${() => { this.productDraftImage = null; this.productDraftImageUrl = null; }}>${translateText("admin_panel.remove_image")}</button></div>`
          : ""}
        <label class="flex items-center gap-2 text-sm text-slate-300"><input type="checkbox" .checked=${this.productDraftActive} @change=${(event: Event) => (this.productDraftActive = (event.target as HTMLInputElement).checked)} />${translateText("admin_panel.product_active")}</label>
        <div class="flex gap-2">
          <button ?disabled=${this.submitting} class="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_6px_14px_rgba(2,132,199,.25)] disabled:opacity-50">${translateText(this.productEditId ? "admin_panel.save_changes" : "admin_panel.add_product")}</button>
          ${this.productEditId
            ? html`<button type="button" class="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300" @click=${() => this.resetProductDraft()}>${translateText("admin_panel.cancel")}</button>`
            : ""}
        </div>
      </form>
      <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        ${this.managedProducts.map(
          (product) => html`          <article class="overflow-hidden rounded-xl border border-white/[0.07] bg-[#111620] shadow-[0_10px_24px_rgba(0,0,0,.25)]">
            ${product.imageUrl ? html`<img src=${product.imageUrl} alt=${product.name} class="h-40 w-full object-cover" />` : ""}
            <div class="space-y-2 p-4">
              <div class="flex justify-between gap-2"><h3 class="font-semibold text-slate-100">${product.name}</h3><span class="text-xs ${product.active ? "text-emerald-300" : "text-slate-500"}">${product.active ? translateText("admin_panel.active") : translateText("admin_panel.hidden")}</span></div>
              <p class="text-sm text-amber-200">${product.price.toLocaleString()} ${product.currency}</p>
              ${product.categoryName ? html`<p class="text-xs text-sky-200">${product.categoryName}</p>` : ""}
              <p class="line-clamp-3 whitespace-pre-wrap text-xs text-slate-400">${product.description}</p>
              ${product.paymentUrl
                ? html`<a href=${product.paymentUrl} target="_blank" rel="noopener noreferrer" class="block truncate text-xs text-sky-300">${product.paymentUrl}</a>`
                : ""}
              <div class="flex gap-2 pt-2">
                <button class="rounded border border-white/10 px-2 py-1 text-xs text-slate-200" @click=${() => this.editManagedProduct(product)}>${translateText("admin_panel.edit")}</button>
                <button class="rounded border border-rose-400/20 px-2 py-1 text-xs text-rose-200" ?disabled=${this.submitting} @click=${() => void this.deleteManagedProduct(product)}>${translateText("admin_panel.delete")}</button>
              </div>
            </div>
          </article>`,
        )}
        ${this.managedProducts.length === 0
          ? html`<p class="col-span-full py-10 text-center text-slate-500">${translateText("admin_panel.no_products")}</p>`
          : ""}
      </div>
      <p class="text-xs text-slate-500">${translateText("admin_panel.product_image_note")}</p>
      <p class="text-xs text-amber-200/80">${translateText("admin_panel.purchase_link_note")}</p>
    </section>`;
  }

  private renderMaintenanceControl() {
    const enabled =
      this.overviews.length > 0 &&
      this.overviews.every((overview) => overview.maintenanceMode);
    return html`
      <section
        class="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-rose-400/20 bg-rose-950/20 p-5"
      >
        <div>
          <h2 class="font-semibold text-rose-100">
            ${translateText("admin_panel.maintenance")}
          </h2>
          <p class="mt-1 text-xs text-rose-200/70">
            ${enabled
              ? translateText("admin_panel.maintenance_enabled")
              : translateText("admin_panel.maintenance_status")}
          </p>
        </div>
        <button
          class="rounded-lg border border-rose-300/30 px-4 py-2 text-sm font-semibold text-rose-100 hover:bg-rose-400/10 disabled:opacity-50"
          ?disabled=${this.loading || this.overviews.length === 0}
          @click=${() => void this.setMaintenanceMode(!enabled)}
        >
          ${enabled
            ? translateText("admin_panel.maintenance_resume")
            : translateText("admin_panel.maintenance")}
        </button>
      </section>
    `;
  }

  private renderLogs() {
    return html`
      <section class="space-y-3">
        <p class="text-xs text-slate-500">
          ${translateText("admin_panel.logs")} · ${this.logs.length}
        </p>
        ${this.systemLogsNotice
          ? html`<p role="status" class="rounded-lg border border-amber-400/20 bg-amber-950/20 p-3 text-sm text-amber-100">${translateText("admin_panel.system_logs_unavailable", { reason: this.systemLogsNotice })}</p>`
          : html`<p class="text-xs text-sky-200">${translateText("admin_panel.system_logs")}</p>`}
        <div
          class="overflow-x-auto rounded-xl border border-white/[0.07] bg-[#111620]"
        >
          <table class="w-full min-w-[760px] text-left font-mono text-xs">
            <thead class="bg-white/[0.025] text-slate-500">
              <tr>
                <th class="px-4 py-3">${translateText("admin_panel.log_time")}</th>
                <th class="px-4 py-3">${translateText("admin_panel.log_level")}</th>
                <th class="px-4 py-3">${translateText("admin_panel.log_worker")}</th>
                <th class="px-4 py-3">${translateText("admin_panel.log_message")}</th>
                <th class="px-4 py-3">${translateText("admin_panel.log_details")}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/[0.06]">
              ${this.logs.map(
                (entry) => html`
                  <tr class="align-top hover:bg-white/[0.025]">
                    <td class="whitespace-nowrap px-4 py-3 text-slate-500">
                      ${new Date(entry.timestamp).toLocaleString("fa-IR")}
                    </td>
                    <td class="px-4 py-3 uppercase text-amber-200">
                      ${entry.level}
                    </td>
                    <td class="px-4 py-3 text-slate-400">${entry.workerId}</td>
                    <td
                      class="max-w-xl whitespace-pre-wrap break-words px-4 py-3 text-slate-200"
                    >
                      ${entry.message}
                    </td>
                    <td
                      class="max-w-md whitespace-pre-wrap break-words px-4 py-3 text-slate-500"
                    >
                      ${JSON.stringify(entry.metadata)}
                    </td>
                  </tr>
                `,
              )}
              ${this.logs.length === 0
                ? html`<tr>
                    <td
                      colspan="5"
                      class="px-4 py-10 text-center text-slate-500"
                    >
                      ${translateText("admin_panel.no_logs")}
                    </td>
                  </tr>`
                : ""}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  private renderDashboard() {
    const players = this.overviews.flatMap((overview) =>
      overview.games.flatMap((game) => game.players),
    );
    const totalGames = this.overviews.reduce(
      (sum, overview) => sum + overview.games.length,
      0,
    );
    const systemMemory = this.overviews.find(
      (overview) => overview.systemMemory !== undefined,
    )?.systemMemory;
    const systemMemoryLabel = systemMemory
      ? `${this.formatBytes(Math.max(0, systemMemory.totalBytes - systemMemory.freeBytes))} / ${this.formatBytes(systemMemory.totalBytes)}`
      : translateText("admin_panel.system_memory_unavailable");
    const content =
      this.tab === "users"
        ? this.renderUsers()
        : this.tab === "accounts"
          ? this.renderManagedAccounts()
          : this.tab === "products"
            ? this.renderManagedProducts()
            : this.tab === "bans"
              ? this.renderBans()
              : this.tab === "games"
                ? this.renderGames()
                : this.tab === "reports"
                  ? this.renderReports()
                  : this.tab === "logs"
                    ? this.renderLogs()
                    : html`
                    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      ${this.statCard(
                        translateText("admin_panel.online_users"),
                        `${players.length}`,
                        "●",
                        "text-emerald-300",
                      )}
                      ${this.statCard(
                        translateText("admin_panel.active_games"),
                        `${totalGames}`,
                        "▣",
                        "text-sky-300",
                      )}
                      ${this.statCard(
                        translateText("admin_panel.memory_rss"),
                        systemMemoryLabel,
                        "▤",
                        "text-sky-300",
                      )}
                      ${this.statCard(
                        translateText("admin_panel.workers"),
                        `${this.overviews.length} / ${this.overviews[0]?.workerCount ?? 0}`,
                        "⌘",
                        "text-amber-300",
                      )}
                    </div>
                    <p class="mt-3 text-xs text-slate-500">
                      ${translateText("admin_panel.online_players_scope")}
                    </p>
                    <section
                      class="mt-5 rounded-xl border border-white/[0.07] bg-[#111620] p-5"
                    >
                      <header
                        class="mb-4 flex items-center justify-between gap-3"
                      >
                        <div>
                          <h2 class="font-semibold">
                            ${translateText("admin_panel.server_health")}
                          </h2>
                          <p class="mt-1 text-xs text-slate-500">
                            ${translateText("admin_panel.health_subtitle")}
                          </p>
                        </div>
                        <span
                          class="inline-flex items-center gap-2 text-xs ${this.unavailableWorkers.length > 0 ? "text-rose-300" : "text-emerald-300"}"
                          ><span
                            class="size-1.5 rounded-full ${this.unavailableWorkers.length > 0 ? "bg-rose-400" : "bg-emerald-400"}"
                          ></span
                          >${this.unavailableWorkers.length > 0
                            ? translateText("admin_panel.workers_partial_health")
                            : translateText("admin_panel.healthy")}</span
                        >
                      </header>
                      <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        ${this.overviews.map(
                          (overview) => html`
                            <article
                              class="rounded-lg border border-white/[0.06] bg-[#0c1018] p-4"
                            >
                              <h3 class="text-sm font-medium">
                                ${translateText("admin_panel.worker")}
                                ${overview.workerId}
                              </h3>
                              <div
                                class="mt-3 space-y-2 text-xs text-slate-400"
                              >
                                <p>
                                  ${translateText("admin_panel.uptime")}:
                                  <span class="text-slate-200"
                                    >${this.formatUptime(
                                      overview.uptimeSeconds,
                                    )}</span
                                  >
                                </p>
                                <p>
                                  ${translateText("admin_panel.worker_memory")}:
                                  <span class="text-slate-200"
                                    >${this.formatBytes(
                                      overview.memory.rss,
                                    )}</span
                                  >
                                </p>
                                <p>
                                  ${translateText("admin_panel.load_average")}:
                                  <span class="text-slate-200"
                                    >${overview.loadAverage
                                      .map((load) => load.toFixed(2))
                                      .join(" / ")}</span
                                  >
                                </p>
                              </div>
                            </article>
                          `,
                        )}
                      </div>
                    </section>
                    ${this.renderMaintenanceControl()}
                    <section
                      class="mt-5 rounded-xl border border-white/[0.07] bg-[#111620]"
                    >
                      <header
                        class="flex items-center justify-between border-b border-white/[0.07] px-5 py-4"
                      >
                        <h2 class="font-semibold">
                          ${translateText("admin_panel.recent_players")}
                        </h2>
                        <button
                          class="text-xs text-sky-300 hover:text-sky-200"
                          @click=${() => (this.tab = "users")}
                        >
                          ${translateText("admin_panel.view_all")}
                        </button>
                      </header>
                      <div class="divide-y divide-white/[0.06]">
                        ${this.filteredPlayers()
                          .slice(0, 6)
                          .map(
                            ({ game, player }) => html`
                              <div
                                class="flex items-center justify-between gap-3 px-5 py-3"
                              >
                                <div class="min-w-0">
                                  <p class="truncate text-sm text-slate-200">
                                    ${player.username}
                                  </p>
                                  <p class="mt-1 text-xs text-slate-500">
                                    ${translateText("admin_panel.game")}
                                    ${game.gameID} · ${player.platform}
                                  </p>
                                </div>
                                <button
                                  class="shrink-0 rounded-md border border-rose-400/20 px-2.5 py-1.5 text-xs text-rose-300 hover:bg-rose-400/10"
                                  @click=${() =>
                                    void this.kick(
                                      game.gameID,
                                      player.clientID,
                                    )}
                                >
                                  ${translateText("admin_panel.kick")}
                                </button>
                                <button
                                  class="shrink-0 rounded-md border border-red-500/30 px-2.5 py-1.5 text-xs text-red-200 hover:bg-red-500/10"
                                  @click=${() =>
                                    void this.setAccountBan(
                                      player.accountKey,
                                      true,
                                    )}
                                >
                                  ${translateText("admin_panel.ban")}
                                </button>
                              </div>
                            `,
                          )}
                        ${players.length === 0
                          ? html`<p
                              class="px-5 py-10 text-center text-sm text-slate-500"
                            >
                              ${translateText("admin_panel.no_players")}
                            </p>`
                          : ""}
                      </div>
                    </section>
                      `;

    return html`
      <style>
        body.admin-panel-open {
          height: auto !important;
          min-height: 100dvh;
          overflow-x: clip !important;
          overflow-y: auto !important;
          flex-direction: column !important;
          flex-wrap: nowrap !important;
        }
        body.admin-panel-open desktop-nav-bar,
        body.admin-panel-open mobile-nav-bar,
        body.admin-panel-open page-footer,
        body.admin-panel-open music-player {
          display: none !important;
        }
        body.admin-panel-open main-layout > main {
          width: 100%;
          max-width: none;
          padding: 0 !important;
        }
        body.admin-panel-open main-layout > main > div {
          width: 100%;
          max-width: none;
          padding: 0 !important;
          overflow: visible;
        }
        body.admin-panel-open main-layout {
          display: block !important;
        }
        body.admin-panel-open main-layout > main,
        body.admin-panel-open main-layout > main > div,
        body.admin-panel-open admin-panel {
          min-height: 100dvh;
          height: auto !important;
          flex: none !important;
        }
        admin-panel main section,
        admin-panel main article {
          box-shadow:
            0 14px 30px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.035);
          transform-style: preserve-3d;
        }
        admin-panel main button {
          transition:
            transform 140ms ease,
            box-shadow 140ms ease;
        }
        admin-panel main button:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.24);
        }
      </style>
      <div dir="rtl" lang="fa" class="flex min-h-screen bg-gradient-to-br from-[#111a25] via-[#0b0e14] to-[#07090d] text-slate-100">
        <aside
          class="hidden w-60 shrink-0 border-r border-white/[0.07] bg-[#0e121a] px-3 py-5 shadow-[8px_0_28px_rgba(0,0,0,.3)] md:flex md:flex-col"
        >
          <div class="mb-8 flex items-center gap-3 px-2">
            <div
              class="grid size-9 place-items-center rounded-lg bg-sky-600 font-black shadow-[0_6px_14px_rgba(2,132,199,.25)]"
            >
              د
            </div>
            <div>
              <p class="text-sm font-bold">${translateText("admin_panel.brand_name")}</p>
              <p class="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                ${translateText("admin_panel.control_panel")}
              </p>
            </div>
          </div>
          <p
            class="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600"
          >
            ${translateText("admin_panel.navigation")}
          </p>
          <nav class="space-y-1">
            ${this.navButton(
              "overview",
              translateText("admin_panel.overview"),
              "⌂",
            )}
            ${this.navButton("games", translateText("admin_panel.games"), "▣")}
            ${this.navButton("users", translateText("admin_panel.users"), "♙")}
            ${this.navButton(
              "accounts",
              translateText("admin_panel.accounts"),
              "♙",
            )}
            ${this.navButton(
              "products",
              translateText("admin_panel.products"),
              "▧",
            )}
            ${this.navButton("bans", translateText("admin_panel.bans"), "⊘")}
            ${this.navButton(
              "reports",
              translateText("admin_panel.reports"),
              "⚑",
            )}
            ${this.navButton("logs", translateText("admin_panel.logs"), "≡")}
          </nav>
          <div
            class="mt-auto rounded-lg border border-white/[0.07] bg-white/[0.02] p-3"
          >
            <div class="flex items-center gap-2 text-xs text-slate-300">
              <span class="size-2 rounded-full bg-emerald-400"></span
              >${translateText("admin_panel.admin_session")}
            </div>
            <button
              class="mt-3 text-xs text-slate-500 hover:text-white"
              @click=${this.signOut}
            >
              ${translateText("admin_panel.sign_out")}
            </button>
          </div>
        </aside>
        <div class="min-w-0 flex-1">
          <header
            class="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-white/[0.07] bg-[#0b0e14]/95 px-4 backdrop-blur sm:px-7"
          >
            <div class="flex items-center gap-3">
              <span
                class="grid size-8 place-items-center rounded-lg bg-sky-600 font-black shadow-[0_6px_14px_rgba(2,132,199,.25)] md:hidden"
                >O</span
              >
              <div>
                <p class="text-sm font-semibold">
                  ${translateText("admin_panel.title")}
                </p>
                <p class="text-xs text-slate-500">
                  ${translateText("admin_panel.eyebrow")}
                </p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span class="hidden text-xs text-slate-500 sm:inline"
                >${this.lastUpdated
                  ? translateText("admin_panel.last_updated", {
                      time: new Date(this.lastUpdated).toLocaleTimeString(
                        "fa-IR",
                      ),
                    })
                  : ""}</span
              >
              <button
                class="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 hover:bg-white/5 disabled:opacity-50"
                ?disabled=${this.loading}
                @click=${() => void this.refresh()}
              >
                ${this.loading
                  ? translateText("admin_panel.refreshing")
                  : translateText("admin_panel.refresh")}
              </button>
              <button
                class="text-xs text-slate-400 hover:text-white md:hidden"
                @click=${this.signOut}
              >
                ${translateText("admin_panel.sign_out")}
              </button>
            </div>
          </header>
          <main class="mx-auto max-w-[1500px] p-4 sm:p-7">
            ${this.error
              ? html`<div
                  role="alert"
                  class="mb-5 rounded-lg border border-rose-400/20 bg-rose-950/30 px-4 py-3 text-sm text-rose-200"
                >
                  ${this.error}
                </div>`
              : ""}
            <div class="mb-5">
              <h1 class="text-xl font-semibold">
                ${translateText(`admin_panel.${this.tab}`)}
              </h1>
              <p class="mt-1 text-sm text-slate-500">
                ${translateText("admin_panel.subtitle")}
              </p>
            </div>
            ${content}
            <footer
              class="mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600"
            >
              <span
                >${translateText("admin_panel.brand_name")} ·
                ${translateText("admin_panel.internal_use")}</span
              >
              <span
                >${this.overviews.length}
                ${translateText("admin_panel.workers_online")}</span
              >
            </footer>
          </main>
        </div>
      </div>
    `;
  }

  private statCard(title: string, value: string, icon: string, color: string) {
    return html`
      <article class="rounded-xl border border-white/[0.07] bg-[#111620] p-4">
        <div class="flex items-center justify-between">
          <p class="text-xs text-slate-400">${title}</p>
          <span
            class="grid size-8 place-items-center rounded-lg bg-white/[0.04] ${color}"
            >${icon}</span
          >
        </div>
        <p class="mt-3 text-2xl font-semibold tracking-tight">${value}</p>
      </article>
    `;
  }

  render() {
    return this.loggedIn ? this.renderDashboard() : this.renderLogin();
  }
}
