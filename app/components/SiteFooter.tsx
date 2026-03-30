import Link from "next/link";

const TIKTOK_URL = "https://www.tiktok.com/@yaredbarch";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-background px-6 py-28 md:py-32">
      <div className="mx-auto max-w-[1440px] px-10 md:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-8 text-4xl font-black uppercase italic tracking-tighter text-primary">
              Fitlab Gym &amp; Spa
            </div>
            <p className="max-w-sm text-sm font-medium uppercase italic leading-relaxed text-white/40">
              Elite performance facility dedicated to physical excellence and
              holistic recovery in the heart of Koyefeche. Built for those who
              demand more from themselves.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-black uppercase italic tracking-widest text-primary">
              Social Channels
            </h4>
            <div className="flex flex-col gap-4">
              <a
                className="text-xl font-black uppercase italic tracking-tighter transition-colors hover:text-primary"
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="text-xl font-black uppercase italic tracking-tighter transition-colors hover:text-primary"
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                className="text-xl font-black uppercase italic tracking-tighter transition-colors hover:text-primary"
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-black uppercase italic tracking-widest text-primary">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm font-bold uppercase">
              <p>Sheger city, Koye Feche, Nfas Lilk</p>
              <p>091 296 7931</p>
              <p className="pt-2 text-xs font-black uppercase tracking-widest text-white/60">
                Mon - Fri: 05:00 - 21:00
              </p>
              <p className="text-xs font-black uppercase tracking-widest text-white/60">
                Saturday: 06:00 - 19:00
              </p>
              <p className="text-xs font-black uppercase tracking-widest text-white/60">
                Sunday: 08:00 - 14:00
              </p>
              <p className="mt-5 text-xs font-black uppercase tracking-widest text-white/40">
                © {currentYear} Fitlab Gym &amp; Spa
              </p>
              <Link
                href="/admin/login"
                className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-white/30 transition-colors hover:text-primary"
                title="Admin portal"
              >
                <span className="material-symbols-outlined text-sm">lock</span>
                Admin login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
