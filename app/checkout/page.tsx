"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import { PaymentMethod, ShippingMethod } from "@/types/checkout";
import { FLAT_RATE, LOCAL_PICKUP, mockOrderItems } from "@/data/checkout";
import { Field } from "@/components/common/form/FormInput";

const inputCls =
  "w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-main focus:outline-none focus:ring-1 focus:ring-main/30";

const CheckoutPage = () => {
  const [couponVisible, setCouponVisible] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("Vietnam");
  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [shipDifferent, setShipDifferent] = useState(false);
  const [orderNotes, setOrderNotes] = useState("");

  const [shipping, setShipping] = useState<ShippingMethod>("free");
  const [payment, setPayment] = useState<PaymentMethod>("paypal");
  const [captcha, setCaptcha] = useState("");

  const subtotal = mockOrderItems.reduce((s, i) => s + i.price * i.qty, 0);
  const shippingCost =
    shipping === "flat" ? FLAT_RATE : shipping === "local" ? LOCAL_PICKUP : 0;
  const total = subtotal + shippingCost;

  return (
    <>
      <Breadcrumb
        title="Checkout"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Checkout" }]}
      />

      <div className="mx-auto max-w-330 px-3 py-6 sm:px-4 sm:py-8 md:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 rounded border border-[#f5d9c0] bg-[#fef6ef] px-4 py-3 text-sm text-gray-700">
              <Info className="h-4 w-4 shrink-0 text-[#e07b39]" />
              <span>
                Have a coupon?{" "}
                <button
                  type="button"
                  onClick={() => setCouponVisible((v) => !v)}
                  className="font-medium text-[#e07b39] underline underline-offset-2 hover:opacity-80"
                >
                  Click here to enter your code
                </button>
              </span>
            </div>

            {couponVisible && (
              <div className="flex flex-col sm:flex-row items-center gap-3 rounded border border-gray-200 bg-white px-4 py-4 shadow-sm">
                <input
                  type="text"
                  placeholder="Coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-64 rounded border border-gray-300 px-3 py-2 text-sm focus:border-main focus:outline-none"
                />
                <button
                  type="button"
                  className="rounded border border-gray-800 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-gray-800 transition hover:bg-gray-800 hover:text-white"
                >
                  Apply Coupon
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr_1fr]">
              <div>
                <h2 className="mb-5 text-[17px] font-bold text-gray-900">
                  Billing Details
                </h2>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="First name" required>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Last name" required>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={inputCls}
                      />
                    </Field>
                  </div>

                  <Field label="Country / Region" required>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className={inputCls}
                    >
                      {[
                        "Vietnam",
                        "India",
                        "United States",
                        "United Kingdom",
                        "Australia",
                        "Germany",
                        "France",
                        "Japan",
                      ].map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Street address" required>
                    <input
                      type="text"
                      placeholder="House number and street name"
                      value={street1}
                      onChange={(e) => setStreet1(e.target.value)}
                      className={`${inputCls} mb-2`}
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      value={street2}
                      onChange={(e) => setStreet2(e.target.value)}
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Postcode / ZIP (optional)">
                    <input
                      type="text"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Town / City" required>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Phone (optional)">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Email address" required>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputCls}
                    />
                  </Field>
                </div>
              </div>

              <div>
                <label className="mb-5 flex cursor-pointer items-center gap-2 text-[15px] font-bold text-gray-900">
                  <input
                    type="checkbox"
                    checked={shipDifferent}
                    onChange={(e) => setShipDifferent(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 accent-main"
                  />
                  Ship To A Different Address?
                </label>
                {shipDifferent && (
                  <div className="mb-6 flex flex-col gap-4 rounded border border-gray-100 bg-gray-50 p-4">
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="First name" required>
                        <input type="text" className={inputCls} />
                      </Field>
                      <Field label="Last name" required>
                        <input type="text" className={inputCls} />
                      </Field>
                    </div>
                    <Field label="Country / Region" required>
                      <select className={inputCls}>
                        {["Vietnam", "India", "United States"].map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Street address" required>
                      <input
                        type="text"
                        placeholder="House number and street name"
                        className={`${inputCls} mb-2`}
                      />
                      <input
                        type="text"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Town / City" required>
                      <input type="text" className={inputCls} />
                    </Field>
                  </div>
                )}

                <Field label="Order notes (optional)">
                  <textarea
                    rows={7}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    className={`${inputCls} resize-none`}
                  />
                </Field>
              </div>

              <div>
                <div className="rounded border border-gray-200 bg-white">
                  <h2 className="border-b border-gray-200 px-5 py-4 text-[17px] font-bold text-gray-900">
                    Your Order
                  </h2>

                  <div className="flex items-center justify-between border-b border-gray-100 px-5 py-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Product
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Subtotal
                    </span>
                  </div>

                  {mockOrderItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b border-gray-100 px-5 py-3"
                    >
                      <span className="text-sm text-gray-700">
                        {item.name}{" "}
                        <span className="font-semibold text-gray-900">
                          × {item.qty}
                        </span>
                      </span>
                      <span className="text-sm text-gray-800">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  ))}

                  <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
                    <span className="text-sm font-medium text-gray-700">
                      Subtotal
                    </span>
                    <span className="text-sm font-bold text-main">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="border-b border-gray-100 px-5 py-3">
                    <div className="flex items-start justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Shipment
                      </span>
                      <div className="flex flex-col gap-2 text-right">
                        <label className="flex cursor-pointer items-center justify-end gap-2 text-sm text-gray-700">
                          Free shipping
                          <input
                            type="radio"
                            name="shipping"
                            checked={shipping === "free"}
                            onChange={() => setShipping("free")}
                            className="accent-main"
                          />
                        </label>
                        <label className="flex cursor-pointer items-center justify-end gap-2 text-sm text-gray-500">
                          Flat rate: ${FLAT_RATE.toFixed(2)}
                          <input
                            type="radio"
                            name="shipping"
                            checked={shipping === "flat"}
                            onChange={() => setShipping("flat")}
                            className="accent-main"
                          />
                        </label>
                        <label className="flex cursor-pointer items-center justify-end gap-2 text-sm text-gray-500">
                          Local pickup: ${LOCAL_PICKUP.toFixed(2)}
                          <input
                            type="radio"
                            name="shipping"
                            checked={shipping === "local"}
                            onChange={() => setShipping("local")}
                            className="accent-main"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-sm font-bold text-gray-900">
                      Total
                    </span>
                    <span className="text-base font-bold text-main">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-4 rounded border border-gray-200 bg-white">
                  <label className="flex cursor-pointer items-center gap-3 border-b border-gray-100 px-5 py-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={payment === "paypal"}
                      onChange={() => setPayment("paypal")}
                      className="accent-main"
                    />
                    <span className="text-sm font-medium text-gray-800">
                      PayPal
                    </span>
                  </label>

                  {payment === "paypal" && (
                    <div className="border-b border-gray-100 bg-gray-50 px-5 py-3">
                      <p className="text-xs text-gray-500">Pay Via PayPal.</p>
                    </div>
                  )}

                  {(
                    [
                      { key: "debit", label: "Debit & Credit Cards" },
                      { key: "bank", label: "Direct bank transfer" },
                      { key: "check", label: "Check payments" },
                      { key: "cod", label: "Cash on delivery" },
                    ] as { key: PaymentMethod; label: string }[]
                  ).map(({ key, label }) => (
                    <label
                      key={key}
                      className="flex cursor-pointer items-center gap-3 border-b border-gray-100 px-5 py-2.5 last:border-0"
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={payment === key}
                        onChange={() => setPayment(key)}
                        className="accent-main"
                      />
                      <span className="text-sm text-gray-600">{label}</span>
                    </label>
                  ))}

                  <div className="border-t border-gray-100 px-5 py-4">
                    <p className="mb-3 text-xs leading-relaxed text-gray-500">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our{" "}
                      <a href="/privacy-policy" className="text-main underline">
                        privacy policy
                      </a>
                      .
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-600">
                        Are you human? Please solve:
                      </span>
                      <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-bold text-gray-700">
                        4 + 6
                      </span>
                      <input
                        type="text"
                        value={captcha}
                        onChange={(e) => setCaptcha(e.target.value)}
                        className="w-16 rounded border border-gray-300 px-2 py-1 text-sm focus:border-main focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded bg-[#ffc439] py-3.5 text-sm font-bold text-[#003087] shadow-sm transition hover:brightness-105"
                >
                  Pay with PayPal
                </button>
              </div>
            </div>
          </div>

          <NewsletterBanner />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
