import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Cohorts & Alumni", to: "/cohorts" },
  { label: "Connect", to: "/connect" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-[#C4BADF]/30"
            : "bg-transparent border-b border-[#C4BADF]/30"
        }`}
      >
       <div style={{ padding: "0 80px" }} className="w-full h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Ìmòforge Academy"
              className="h-12 w-12 object-contain"
            />
            <span className="text-[20px] font-semibold tracking-wide text-[#3D2F6B] hidden sm:block">
              Ìmòforge Academy
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[15px] font-medium tracking-wide transition-colors duration-200 relative group ${
                    active
                      ? "text-[#3D2F6B]"
                      : "text-[#0D0D0D]/60 hover:text-[#3D2F6B]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-[#8B7DB5] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://t.me/+BN_iOjD8s2BhZjZk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "12px 32px" }}
              className="hidden md:inline-flex items-center rounded-full text-[15px] font-semibold tracking-wide bg-[#3D2F6B] text-white hover:bg-[#251C45] transition-all duration-300"
            >
              Join Waitlist
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-[#3D2F6B]"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-[#C4BADF]/40 shadow-lg px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[15px] font-medium ${
                  location.pathname === link.to
                    ? "text-[#3D2F6B]"
                    : "text-[#0D0D0D]/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://t.me/+BN_iOjD8s2BhZjZk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full text-[13px] font-medium bg-[#3D2F6B] text-white"
            >
              Join Waitlist
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
