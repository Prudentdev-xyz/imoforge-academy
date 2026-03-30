// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const curriculum = [
  { num: "01", title: "Blockchain Fundamentals", desc: "Understand the foundations of blockchain, decentralization, and trustless systems." },
  { num: "02", title: "Blockchain Engineering & DeFi Tools", desc: "Design and build smart contracts, protocols, and decentralized infrastructure." },
  { num: "03", title: "Web3 Security", desc: "Audit smart contracts, identify vulnerabilities, and secure on-chain systems." },
  { num: "04", title: "On-Chain Trading & Analytics", desc: "Read market behavior through on-chain data and develop informed trading strategies." },
  { num: "05", title: "Blockchain Data Analysis", desc: "Analyze blockchain datasets using tools like Dune to extract real insights." },
  { num: "06", title: "Web3 Careers & Branding", desc: "Position yourself professionally and unlock global Web3 opportunities." },
  { num: "07", title: "Advanced Trading & DeFi", desc: "Master advanced DeFi strategies, yield mechanics, and on-chain capital flow." },
];

const whyUs = [
  { title: "Learning by Building", desc: "We believe mastery comes from practice. Every learner builds real smart contracts, DeFi tools, dashboards, and trading systems." },
  { title: "Globally Connected, Locally Rooted", desc: "Our community spans Africa and beyond, connecting learners with builders, mentors, and innovators worldwide." },
  { title: "Support Beyond Graduation", desc: "We don't stop at teaching. Our alumni network opens doors to jobs, grants, collaborations, and long-term growth." },
  { title: "Built for the Future of Web3", desc: "From blockchain engineering to data, security, and trading — our focus is on skills that remain relevant." },
];

const W = { maxWidth: 1100, margin: "0 auto" };
const SP = { padding: "112px 24px" };

export default function About() {
  return (
    <main style={{ width: "100%" }}>

      {/* ── Page Header ── */}
      <section style={{ background: "#F7F5FC", padding: "80px 24px" }}>
        <div style={W}>
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B7DB5", fontWeight: 500 }}>
              About Ìmòforge Academy
            </span>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, color: "#251C45", lineHeight: 1.4, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
              <span>Who We Are</span>
              <span style={{ color: "#8B7DB5" }}>&</span>
              <span>What We Stand For</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section style={{ ...SP, background: "#fff" }}>
        <div style={{ ...W, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px 64px", alignItems: "start" }}>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={0}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <div style={{ width: 32, height: 2, background: "#8B7DB5" }} />
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, color: "#251C45", margin: 0 }}>
              Our Vision
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "rgba(13,13,13,0.6)", fontWeight: 300, margin: 0 }}>
              To build a globally respected education and innovation ecosystem that produces thoughtful builders, researchers, and analysts capable of shaping the future of decentralized and data-driven technologies.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={1}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <div style={{ width: 32, height: 2, background: "#8B7DB5" }} />
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, color: "#251C45", margin: 0 }}>
              Our Mission
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "rgba(13,13,13,0.6)", fontWeight: 300, margin: 0 }}>
              To educate, mentor, and empower individuals through rigorous, project-driven programs that combine research, experimentation, and real-world building — while fostering a strong, values-driven community of global Web3 professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section style={{ ...SP, background: "#F7F5FC" }}>
        <div style={W}>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={0}
            style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 56 }}
          >
            <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B7DB5", fontWeight: 500 }}>
              Academy Curriculum
            </span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#251C45", margin: 0 }}>
              What You'll Learn
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "rgba(13,13,13,0.6)", fontWeight: 300, margin: 0, maxWidth: 600 }}>
              At Ìmòforge Academy, we prepare builders, analysts, and traders for the future of decentralized technology through structured learning, hands-on projects, and real-world exposure.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {curriculum.map((item, i) => (
              <motion.div
                key={item.num}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} custom={i * 0.08}
                style={{ padding: 32, background: "#fff", border: "1px solid rgba(196,186,223,0.3)", borderRadius: 16, display: "flex", flexDirection: "column", gap: 16 }}
              >
                <span style={{ fontSize: 11, color: "#C4BADF", fontWeight: 500, letterSpacing: "0.15em" }}>
                  {item.num}
                </span>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 500, color: "#251C45", margin: 0 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "rgba(13,13,13,0.55)", fontWeight: 300, margin: 0 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section style={{ ...SP, background: "#fff" }}>
        <div style={W}>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={0}
            style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 56 }}
          >
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#251C45", margin: 0 }}>
              Why Learners Choose Ìmòforge
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "rgba(13,13,13,0.6)", fontWeight: 300, margin: 0, maxWidth: 600 }}>
              We are building more than courses. We are shaping confident Web3 builders with strong foundations, global perspective, and long-term support.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} custom={i * 0.08}
                style={{ padding: 32, background: "#F7F5FC", border: "1px solid rgba(196,186,223,0.3)", borderRadius: 16, display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div style={{ width: 32, height: 2, background: "#8B7DB5" }} />
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 500, color: "#251C45", margin: 0 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "rgba(13,13,13,0.55)", fontWeight: 300, margin: 0 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section style={{ ...SP, background: "#251C45", color: "#fff" }}>
        <div style={W}>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={0}
            style={{ marginBottom: 48 }}
          >
            <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(196,186,223,0.7)", fontWeight: 500 }}>
              Founder
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={0.1}
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 48, alignItems: "flex-start" }}
          >
            <div style={{ width: 160, height: 160, borderRadius: 16, overflow: "hidden", background: "#3D2F6B", border: "1px solid rgba(196,186,223,0.2)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 12, color: "rgba(196,186,223,0.4)", letterSpacing: "0.1em" }}>Photo</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1, minWidth: 260 }}>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#fff", margin: 0 }}>
                Oyelude Waliullahi
              </h2>
              <p style={{ fontSize: 13, color: "rgba(196,186,223,0.7)", fontWeight: 500, letterSpacing: "0.05em", margin: 0 }}>
                Founder & CEO, Àkàńó Labs · Blockchain Data Analyst, DeFi Tool Developer, Trader, and Cybersecurity Student
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "rgba(255,255,255,0.6)", fontWeight: 300, margin: 0 }}>
                Waliullahi is passionate about building technology, training, and connecting builders worldwide — empowering skilled individuals to shape the decentralized future.
              </p>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.2rem, 2vw, 1.5rem)", fontWeight: 300, color: "#C4BADF", fontStyle: "italic", margin: 0 }}>
                "Skilled individuals and technology will transform the world."
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={0.2}
            style={{ marginTop: 56 }}
          >
            <Link
              to="/cohorts"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 36px", borderRadius: 999, background: "#fff", color: "#251C45", fontSize: 13.5, fontWeight: 500, textDecoration: "none" }}
            >
              View Cohorts & Alumni
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}