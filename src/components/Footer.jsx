import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const socials = [
  { label: "X (Twitter)", href: "https://x.com/Imoforge_Acad" },
  { label: "Instagram", href: "https://www.instagram.com/imoforge_acad" },
  { label: "TikTok", href: "https://www.tiktok.com/@imoforge_acad" },
  { label: "Telegram", href: "https://t.me/imoforge_Acad" },
];

const navigate = [
  { label: "Programs", to: "/cohorts" },
  { label: "About", to: "/about" },
  { label: "Founder", to: "/about" },
  { label: "Contact / Support", to: "/connect" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white px-6 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Ìmòforge Academy"
                className="h-10 w-10 object-contain rounded-full"
              />
              <span className="text-[15px] font-medium text-white/90">
                Ìmòforge Academy
              </span>
            </div>
            <p className="text-[13px] leading-relaxed text-white/40 font-light max-w-xs">
              Empowering builders worldwide with hands on Web3 programs, real
              world projects, and a global alumni network.
            </p>
          </div>

          {/* Navigate */}
          <div className="flex flex-col gap-5">
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/30 font-medium">
              Navigate
            </span>
            <div className="flex flex-col gap-3">
              {navigate.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-[13.5px] text-white/50 hover:text-white transition-colors duration-200 w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-5">
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/30 font-medium">
              Connect with Us
            </span>
            <a
              href="mailto:support@imoforge.academy"
              className="text-[13.5px] text-white/50 hover:text-white transition-colors duration-200 w-fit"
            >
              support@imoforge.academy
            </a>
            <div className="flex flex-wrap gap-4 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12.5px] text-white/40 hover:text-white transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[12px] text-white/25">
            © 2026 Ìmòforge Academy · All rights reserved
          </span>
          <div className="w-8 h-[1px] bg-[#8B7DB5]/40" />
        </div>
      </div>
    </footer>
  );
}
