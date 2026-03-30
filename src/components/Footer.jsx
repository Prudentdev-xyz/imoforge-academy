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

const W = { maxWidth: 1100, margin: "0 auto" };

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0D0D0D",
        color: "#fff",
        padding: "80px 24px 40px",
      }}
    >
      <div style={W}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px 64px",
            marginBottom: 64,
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src={logo}
                alt="Ìmòforge Academy"
                style={{
                  height: 40,
                  width: 40,
                  objectFit: "contain",
                }}
              />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Ìmòforge Academy
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.4)",
                fontWeight: 300,
                maxWidth: 280,
                margin: 0,
              }}
            >
              Empowering builders worldwide with hands on Web3 programs, real
              world projects, and a global alumni network.
            </p>
          </div>

          {/* Navigate */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                fontWeight: 500,
              }}
            >
              Navigate
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {navigate.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  style={{
                    fontSize: 13.5,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                fontWeight: 500,
              }}
            >
              Connect with Us
            </span>
            <a
              href="mailto:support@imoforge.academy"
              style={{
                fontSize: 13.5,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
              }}
            >
              support@imoforge.academy
            </a>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 12.5,
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
            © 2026 Ìmòforge Academy · All rights reserved
          </span>
          <div
            style={{
              width: 32,
              height: 1,
              background: "rgba(139,125,181,0.4)",
            }}
          />
        </div>
      </div>
    </footer>
  );
}
