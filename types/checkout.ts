export type ShippingMethod = "free" | "flat" | "local";
export type PaymentMethod = "paypal" | "debit" | "bank" | "check" | "cod";

export interface OrderItem {
  id: string;
  name: string;
  qty: number;
  price: number;
}
