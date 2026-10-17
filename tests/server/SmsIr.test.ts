// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  sendSmsIrVerificationCode,
  SmsIrConfigurationError,
  SmsIrRequestError,
} from "../../src/server/SmsIr";

describe("SMS.ir verification sender", () => {
  const originalEnv = {
    apiKey: process.env.SMSIR_API_KEY,
    templateId: process.env.SMSIR_OTP_TEMPLATE_ID,
    parameter: process.env.SMSIR_OTP_PARAMETER,
  };

  beforeEach(() => {
    process.env.SMSIR_API_KEY = "test-sms-ir-key";
    process.env.SMSIR_OTP_TEMPLATE_ID = "123456";
    process.env.SMSIR_OTP_PARAMETER = "CODE";
  });

  afterEach(() => {
    restoreEnv("SMSIR_API_KEY", originalEnv.apiKey);
    restoreEnv("SMSIR_OTP_TEMPLATE_ID", originalEnv.templateId);
    restoreEnv("SMSIR_OTP_PARAMETER", originalEnv.parameter);
    vi.unstubAllGlobals();
  });

  it("uses SMS.ir's VERIFY endpoint and request contract", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ status: 1, message: "success" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    await sendSmsIrVerificationCode("9123456789", "012345");

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("https://api.sms.ir/v1/send/verify");
    expect(new Headers(init.headers).get("X-API-KEY")).toBe("test-sms-ir-key");
    expect(JSON.parse(String(init.body))).toEqual({
      mobile: "9123456789",
      templateId: 123456,
      parameters: [{ name: "CODE", value: "012345" }],
    });
  });

  it("rejects missing SMS.ir settings", async () => {
    delete process.env.SMSIR_API_KEY;
    await expect(
      sendSmsIrVerificationCode("9123456789", "012345"),
    ).rejects.toBeInstanceOf(SmsIrConfigurationError);
  });

  it("rejects SMS.ir responses with a non-success status", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ status: 2, message: "failure" }), {
          status: 200,
        }),
      ),
    );
    await expect(
      sendSmsIrVerificationCode("9123456789", "012345"),
    ).rejects.toBeInstanceOf(SmsIrRequestError);
  });
});

function restoreEnv(key: string, value: string | undefined): void {
  if (value === undefined) delete process.env[key];
  else process.env[key] = value;
}
