export type PaymentUiState =
  | "ready"
  | "sending"
  | "phone"
  | "confirming"
  | "success"
  | "failed"
  | "cancelled"
  | "timed_out"
  | "pending";

const SUCCESS = new Set(["successful", "success", "completed", "complete", "paid", "succeeded"]);
const FAILED = new Set(["failed", "refunded", "rejected"]);
const CANCELLED = new Set(["cancelled", "canceled"]);
const TIMED_OUT = new Set(["expired", "timed_out", "timeout"]);

export function normalizePaymentState(value: unknown, hasEntitlement = false): PaymentUiState {
  if (hasEntitlement) return "success";
  const status = String(value ?? "").trim().toLowerCase();
  if (SUCCESS.has(status)) return "success";
  if (FAILED.has(status)) return "failed";
  if (CANCELLED.has(status)) return "cancelled";
  if (TIMED_OUT.has(status)) return "timed_out";
  return "pending";
}

export function paymentStateMessage(state: PaymentUiState) {
  if (state === "success") return "Payment verified. Your access is active.";
  if (state === "cancelled") return "The payment was cancelled. No access was granted.";
  if (state === "timed_out") return "The payment request timed out. No access was granted.";
  if (state === "failed") return "The payment was not completed. No access was granted.";
  return "Avant is securely confirming your payment.";
}