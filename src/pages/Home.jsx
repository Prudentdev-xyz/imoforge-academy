// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const coreValues = [
  {
    title: "Hands-On Learning",
    desc: "Learn by building real projects, not just theory.",
  },
  {
    title: "Security First",
    desc: "Every builder understands security fundamentals.",
  },
  {
    title: "Innovation & Impact",
    desc: "Creating practical solutions for real-world problems.",
  },
  {
    title: "Global Collaboration",
    desc: "Connect with builders across Africa and beyond.",
  },
  {
    title: "Builder-Driven Education",
    desc: "Curriculum designed by active Web3 practitioners.",
  },
];

const vaultTopics = [
  {
    title: "Introduction to Blockchain & Web3",
    desc: "Foundational understanding of decentralized systems and protocols.",
  },
  {
    title: "Blockchain Data Analysis",
    desc: "Learn to extract and interpret on-chain data insights.",
  },
  {
    title: "On-Chain Analysis & Wallet Tracking",
    desc: "Track wallets, decode transactions, understand behavioral signals.",
  },
  {
    title: "Market Analysis & Memecoin Fundamentals",
    desc: "Understand token cycles, hype mechanics, and market psychology.",
  },
  {
    title: "Blockchain Engineering & Development",
    desc: "Core smart contract logic and development workflows.",
  },
  {
    title: "Blockchain Security Research",
    desc: "Threat models, vulnerabilities, and protocol-level risk awareness.",
  },
  {
    title: "Branding & Career in Web3",
    desc: "Position yourself for long-term relevance in the ecosystem.",
  },
];

export default function Home() {
  return (
    <main className="w-full">
      {/* ── Announcement Banner ── */}
      <div className="w-full bg-[#3D2F6B] text-white text-center py-3 px-4 text-[12.5px] tracking-wide font-medium">
        <span className="opacity-60 mr-2">New </span>
        Ìmòforge Gratia Vault — 2026 Edition ·{" "}
        <a
          href="https://imoforgeacademy.com/#workshop-details"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          Learn more
        </a>
      </div>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-[#F7F5FC]">
        {/* subtle background texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C4BADF22 0%, transparent 60%), radial-gradient(circle at 80% 20%, #8B7DB520 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          {/* Logo mark */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <img
              src={logo}
              alt="Ìmòforge"
              className="h-26 w-26 object-contain"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-6xl md:text-8xl font-light text-[#251C45] leading-none tracking-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Ìmòforge Academy
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-xl md:text-2xl font-light text-[#3D2F6B] tracking-wide"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Connecting Builders. Empowering the Decentralized Future.
          </motion.p>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="max-w-2xl text-[15px] leading-relaxed text-[#0D0D0D]/60 font-light"
          >
            Ìmòforge Academy is a global Web3 and DeFi deep-tech academy
            training builders, analysts, traders, and security professionals
            through hands-on, project-driven learning.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <a
              href="https://t.me/+BN_iOjD8s2BhZjZk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3D2F6B] text-white text-[13.5px] font-medium tracking-wide hover:bg-[#251C45] transition-all duration-300"
            >
              Join the Waitlist <ArrowRight size={15} />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#8B7DB5] text-[#3D2F6B] text-[13.5px] font-medium tracking-wide hover:bg-[#C4BADF]/20 transition-all duration-300"
            >
              View Curriculum <MoveRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] tracking-widest text-[#8B7DB5] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-[#8B7DB5]/50"
          />
        </motion.div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#8B7DB5] font-medium">
              About Ìmòforge Academy
            </span>
            <h2
              className="text-5xl font-light text-[#251C45] leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Who We Are
            </h2>
            <p className="text-[14.5px] leading-[1.9] text-[#0D0D0D]/60 font-light">
              Ìmòforge Academy is a global Web3 and DeFi deep tech education hub
              focused on blockchain engineering, DeFi tool and infrastructure
              development, Web3 security, and on-chain trading & market
              analytics. We train and connect learners from Africa and around
              the world through hands-on, project-driven programs, real-world
              applications, and one of the fastest growing Web3 alumni networks
              empowering graduates to build, trade, secure, and scale the
              decentralized future.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="flex flex-col gap-6 md:pt-12"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#8B7DB5] font-medium">
              The Lab Behind the Academy
            </span>
            <h3
              className="text-4xl font-light text-[#251C45]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Àkàńó Labs
            </h3>
            <p className="text-[14.5px] leading-[1.9] text-[#0D0D0D]/60 font-light">
              Àkàńó Labs is a technology and blockchain-focused innovation lab
              dedicated to education, research, and the development of secure,
              data-driven products across Web2 and Web3 technologies. We combine
              learning, experimentation, and real-world building to prepare
              individuals for the digital and decentralized future.
            </p>
            <p className="text-[14.5px] leading-[1.9] text-[#0D0D0D]/60 font-light">
              Founded by Oyelude Waliullahi, Àkàńó Labs operates both as an
              innovation lab that builds and researches products and as an
              education ecosystem through its academy. Ìmòforge Academy is the
              official education arm, focused on structured learning,
              mentorship, and hands-on training in Web2, Web3, blockchain
              development, data analytics, DeFi, and digital finance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-28 px-6 bg-[#F7F5FC]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16 flex flex-col gap-4"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#8B7DB5] font-medium">
              What We Stand For
            </span>
            <h2
              className="text-5xl font-light text-[#251C45]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, i) => (
              <motion.div
                key={val.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.5}
                className="group p-8 bg-white border border-[#C4BADF]/30 rounded-2xl hover:border-[#8B7DB5]/60 hover:shadow-md transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-8 h-[2px] bg-[#8B7DB5] group-hover:w-14 transition-all duration-300" />
                <h3
                  className="text-xl font-medium text-[#251C45]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {val.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#0D0D0D]/55 font-light">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gratia Vault 2026 ── */}
      <section className="py-28 px-6 bg-[#251C45] text-white overflow-hidden relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 90% 10%, #8B7DB530 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C4BADF15 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16 flex flex-col gap-5"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#C4BADF]/70 font-medium">
              Free Workshop
            </span>
            <h2
              className="text-5xl md:text-6xl font-light leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Ìmòforge Gratia Vault
              <span className="block text-[#C4BADF]">2026 Edition</span>
            </h2>
            <p
              className="text-lg font-light text-white/50 italic"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              The lantern lights, yet the path is yours.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              {["March 30, 2026", "2 Weeks Intensive", "First Edition"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full border border-[#C4BADF]/30 text-[12px] text-[#C4BADF]/80 tracking-wide"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {vaultTopics.map((topic, i) => (
              <motion.div
                key={topic.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.4}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col gap-3"
              >
                <span className="text-[11px] text-[#C4BADF]/50 font-medium tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4
                  className="text-[15px] font-medium text-white/90"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {topic.title}
                </h4>
                <p className="text-[12.5px] leading-relaxed text-white/45 font-light">
                  {topic.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <a
              href="https://t.me/imoforge_waitlist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#251C45] text-[13.5px] font-medium tracking-wide hover:bg-[#C4BADF] transition-all duration-300"
            >
              Reserve a Seat <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
