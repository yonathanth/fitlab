"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { potentialCustomersApi } from "@/lib/api";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

function RegisterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "quarterly" | "annual">("quarterly");
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceId: "",
    age: "",
    height: "",
    telegramUsername: "",
    remark: "",
    objective: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  useEffect(() => {
    const pkg = searchParams.get("package");
    if (pkg) setSelectedPackage(pkg);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await potentialCustomersApi.register({
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        email: formData.email || undefined,
        serviceId: undefined,
        notes: `Selected package: ${selectedPackage || "N/A"} | Selected plan: ${selectedPlan}`,
        age: formData.age ? Number(formData.age) : undefined,
        height: formData.height || undefined,
        telegramUsername: formData.telegramUsername || undefined,
        remark: formData.remark || undefined,
        objective: formData.objective || undefined,
      });

      setSuccess(true);
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        serviceId: "",
        age: "",
        height: "",
        telegramUsername: "",
        remark: "",
        objective: "",
      });
      setSelectedPackage("");
      setSelectedPlan("quarterly");
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Registration failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      <SiteNav />

      <main className="flex w-full flex-col pt-20">
        <section className="bg-background py-16 md:py-20">
          <div className="mx-auto w-full max-w-[1440px] px-6">
            <div className="mx-auto max-w-2xl bg-surface p-10">
              <div className="mb-10">
                <p className="text-xs font-black uppercase italic tracking-widest text-primary">
                  Your details
                </p>
                <h2 className="mt-3 text-4xl font-black uppercase italic tracking-tighter md:text-5xl">
                  LET’S START
                </h2>
                <p className="mt-4 text-sm font-medium uppercase italic leading-relaxed text-white/60">
                  Fill in the form — we handle the rest.
                </p>
              </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-white/60">
                    Full Name
                  </span>
                  <div className="relative">
                    <input
                      className="h-12 w-full border-2 border-primary/10 bg-background px-4 text-white placeholder-white/30 transition-all focus:border-primary focus:outline-none"
                      placeholder="e.g. Abebe Bikila"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-white/60">
                    Phone Number
                  </span>
                  <div className="relative">
                    <input
                      className="h-12 w-full border-2 border-primary/10 bg-background px-4 text-white placeholder-white/30 transition-all focus:border-primary focus:outline-none"
                      placeholder="+251 911 000 000"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-white/60">
                  Email Address
                </span>
                <div className="relative">
                  <input
                    className="h-12 w-full border-2 border-primary/10 bg-background px-4 text-white placeholder-white/30 transition-all focus:border-primary focus:outline-none"
                    placeholder="name@example.com"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-white/60">
                  Membership Package (optional)
                </span>
                <div className="relative">
                  <input
                    className="h-12 w-full border-2 border-primary/10 bg-background px-4 text-white placeholder-white/30 transition-all focus:border-primary focus:outline-none"
                    placeholder="e.g. Full time • 1 month • +Aerobics"
                    type="text"
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                  />
                </div>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-white/60">Age (optional)</span>
                  <input
                    className="h-12 w-full border-2 border-primary/10 bg-background px-4 text-white placeholder-white/30 transition-all focus:border-primary focus:outline-none"
                    placeholder="e.g. 25"
                    type="number"
                    min={1}
                    max={120}
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-white/60">Height (optional)</span>
                  <input
                    className="h-12 w-full border-2 border-primary/10 bg-background px-4 text-white placeholder-white/30 transition-all focus:border-primary focus:outline-none"
                    placeholder="e.g. 175 cm"
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-white/60">Telegram username (optional)</span>
                <input
                  className="h-12 w-full border-2 border-primary/10 bg-background px-4 text-white placeholder-white/30 transition-all focus:border-primary focus:outline-none"
                  placeholder="@username"
                  type="text"
                  name="telegramUsername"
                  value={formData.telegramUsername}
                  onChange={handleInputChange}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-white/60">Objective (optional)</span>
                <select
                  className="h-12 w-full cursor-pointer appearance-none border-2 border-primary/10 bg-background px-4 text-white transition-all focus:border-primary focus:outline-none"
                  name="objective"
                  value={formData.objective}
                  onChange={handleInputChange}
                >
                  <option value="">Select objective</option>
                  <option value="Weight Loss">Weight Loss</option>
                  <option value="Muscle Gain">Muscle Gain</option>
                  <option value="Weight Gain">Weight Gain</option>
                  <option value="Endurance">Endurance</option>
                  <option value="Speed">Speed</option>
                  <option value="Strength / Power">Strength / Power</option>
                  <option value="Cardiovascular Development (Strengthening heart & breathing capacity)">Cardiovascular Development (Strengthening heart & breathing capacity)</option>
                  <option value="Others">Others</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-white/60">Remark (optional)</span>
                <textarea
                  className="min-h-[96px] w-full border-2 border-primary/10 bg-background px-4 py-3 text-white placeholder-white/30 transition-all focus:border-primary focus:outline-none"
                  placeholder="Notes or remarks"
                  name="remark"
                  value={formData.remark}
                  onChange={handleInputChange}
                  rows={2}
                />
              </label>

              {error && (
                <div className="mt-4 border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                  {error}
                </div>
              )}

              <button
                className="brutalist-shadow mt-4 flex h-14 w-full items-center justify-center gap-2 bg-primary text-lg font-black uppercase tracking-tighter text-on-primary transition-transform hover:-translate-y-1 hover:translate-x-1 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span>Registering...</span>
                ) : (
                  <>
                    <span>Register Today</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>
            </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Success popup – redirects to home */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md border-4 border-primary bg-surface-dark p-8 text-center shadow-xl">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center border-2 border-emerald-500/50 bg-emerald-500/20">
              <span className="material-symbols-outlined text-emerald-400 text-4xl">
                check_circle
              </span>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Registration successful!</h3>
            <p className="mb-6 text-sm text-white/70">
              We&apos;ll contact you soon. Welcome to Fit Lab.
            </p>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="font-headline flex h-12 w-full items-center justify-center gap-2 bg-primary font-black uppercase tracking-wider text-on-primary transition-colors hover:bg-yellow-400 hover:text-black"
            >
              <span>Back to Home</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-background text-on-background font-body px-6 py-24 text-center">
          <div className="mx-auto max-w-[1440px]">
            <div className="text-white/60">Loading...</div>
          </div>
        </div>
      }
    >
      <RegisterContent />
    </Suspense>
  );
}









