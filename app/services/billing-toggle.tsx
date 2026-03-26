"use client";

import { useState, createContext, useContext, ReactNode } from "react";

interface BillingContextType {
  billingPeriod: "monthly" | "yearly";
  setBillingPeriod: (period: "monthly" | "yearly") => void;
}

const BillingContext = createContext<BillingContextType | undefined>(undefined);

export function BillingProvider({ children }: { children: ReactNode }) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <BillingContext.Provider value={{ billingPeriod, setBillingPeriod }}>
      {children}
    </BillingContext.Provider>
  );
}

export function useBillingPeriod() {
  const context = useContext(BillingContext);
  if (context === undefined) {
    throw new Error("useBillingPeriod must be used within BillingProvider");
  }
  return context;
}

export function BillingToggle() {
  const { billingPeriod, setBillingPeriod } = useBillingPeriod();

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="bg-card-dark p-1 rounded-xl inline-flex border border-border-dark relative">
        <button
          onClick={() => setBillingPeriod("monthly")}
          className={`relative z-10 px-6 py-2 rounded-lg text-sm font-bold transition-all ${
            billingPeriod === "monthly"
              ? "text-black bg-primary shadow-sm"
              : "text-white/60 hover:text-white"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingPeriod("yearly")}
          className={`relative z-10 px-6 py-2 rounded-lg text-sm font-bold transition-all ${
            billingPeriod === "yearly"
              ? "text-black bg-primary shadow-sm"
              : "text-white/60 hover:text-white"
          }`}
        >
          Yearly{" "}
          <span className="text-[10px] ml-1 text-primary align-top font-normal">
            -20%
          </span>
        </button>
      </div>
    </div>
  );
}


