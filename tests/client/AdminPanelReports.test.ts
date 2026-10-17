import { ReportReasonSchema } from "@openfront/shared/WireSchemas";
import { AdminChatReportSchema } from "../../src/client/AdminPanel";

describe("Admin panel report parsing", () => {
  test.each(ReportReasonSchema.options)(
    "accepts game reports with reason %s",
    (reason) => {
      const result = AdminChatReportSchema.safeParse({
        id: "game-1:report-1",
        source: "game",
        gameID: "game-1",
        workerId: 1,
        reportedBy: { clientID: "client-1", username: "Reporter" },
        reported: { clientID: "client-2", username: "Reported" },
        reason,
        createdAt: Date.now(),
      });

      expect(result.success).toBe(true);
    },
  );
});
