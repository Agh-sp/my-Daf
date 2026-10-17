import { z } from "zod";

const SMS_IR_VERIFY_URL = "https://api.sms.ir/v1/send/verify";

export class SmsIrConfigurationError extends Error {
  constructor() {
    super("SMS.ir OTP settings are not configured");
    this.name = "SmsIrConfigurationError";
  }
}

export class SmsIrRequestError extends Error {
  constructor(
    readonly httpStatus?: number,
    readonly providerStatus?: number,
  ) {
    super("SMS.ir rejected the verification message");
    this.name = "SmsIrRequestError";
  }
}

export async function sendSmsIrVerificationCode(
  mobile: string,
  code: string,
): Promise<void> {
  const apiKey = process.env.SMSIR_API_KEY?.trim();
  const templateId = Number(process.env.SMSIR_OTP_TEMPLATE_ID);
  const parameterName = process.env.SMSIR_OTP_PARAMETER?.trim();
  if (
    !apiKey ||
    !Number.isSafeInteger(templateId) ||
    templateId <= 0 ||
    !parameterName
  ) {
    throw new SmsIrConfigurationError();
  }

  let response: Response;
  try {
    response = await fetch(SMS_IR_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
      body: JSON.stringify({
        mobile,
        templateId,
        parameters: [{ name: parameterName, value: code }],
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    throw new SmsIrRequestError();
  }

  if (!response.ok) {
    throw new SmsIrRequestError(response.status);
  }

  const result = z
    .object({
      status: z.number().int(),
      message: z.string().optional(),
    })
    .passthrough()
    .safeParse(await response.json());
  if (!result.success || result.data.status !== 1) {
    throw new SmsIrRequestError(
      response.status,
      result.success ? result.data.status : undefined,
    );
  }
}
