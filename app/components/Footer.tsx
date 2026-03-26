import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col items-center border-t-4 border-primary bg-black px-8 py-16 text-center">
      <div className="font-headline mb-8 text-4xl font-black uppercase tracking-tighter text-primary">
        FITLAB
      </div>
      <div className="mb-12 flex flex-wrap justify-center gap-8">
        <Link
          href="/#programs"
          className="font-headline text-sm font-bold uppercase tracking-widest text-primary underline decoration-4"
        >
          Programs
        </Link>
        <Link
          href="/services"
          className="font-headline text-sm font-bold uppercase tracking-widest text-gray-400 transition-all hover:text-primary"
        >
          Membership
        </Link>
        <Link
          href="/about"
          className="font-headline text-sm font-bold uppercase tracking-widest text-gray-400 transition-all hover:text-primary"
        >
          Trainers
        </Link>
        <Link
          href="/contact"
          className="font-headline text-sm font-bold uppercase tracking-widest text-gray-400 transition-all hover:text-primary"
        >
          Contact
        </Link>
        <Link
          href="/faq"
          className="font-headline text-sm font-bold uppercase tracking-widest text-gray-400 transition-all hover:text-primary"
        >
          FAQ
        </Link>
      </div>
      <div className="font-headline text-xs uppercase tracking-widest text-gray-400">
        © {currentYear} FITLAB. KOYE FECHE, ADDIS ABABA, ET
      </div>
      <div className="mt-8 flex justify-center gap-6 text-primary">
        <span className="material-symbols-outlined cursor-pointer" aria-hidden>
          social_leaderboard
        </span>
        <span className="material-symbols-outlined cursor-pointer" aria-hidden>
          photo_camera
        </span>
        <span className="material-symbols-outlined cursor-pointer" aria-hidden>
          youtube_activity
        </span>
      </div>
      <div className="mt-10 flex flex-col items-center gap-2 border-t border-outline-variant/30 pt-8 text-sm text-gray-500">
        <span>
          Developed by{" "}
          <a
            href="https://www.shalops.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-400 transition-colors hover:text-primary"
          >
            Shalops Digitals
          </a>
        </span>
        <Link
          href="/admin/login"
          className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 transition-colors hover:text-primary"
          title="Admin portal"
        >
          <span className="material-symbols-outlined text-sm">lock</span>
          <span>Admin</span>
        </Link>
      </div>
    </footer>
  );
}
