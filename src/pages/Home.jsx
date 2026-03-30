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

const W = { maxWidth: 1100, margin: "0 auto", padding: "0 24px" };

export default function Home() {
  return (
    <main style={{ width: "100%" }}>
      {/* Hero */}
      <section
        style={{
          background: "#F7F5FC",
          padding: "80px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C4BADF22 0%, transparent 60%), radial-gradient(circle at 80% 20%, #8B7DB520 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 680,
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <img
              src={logo}
              alt="Ìmòforge"
              style={{ height: 96, width: 96, objectFit: "contain" }}
            />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              fontWeight: 300,
              color: "#251C45",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Ìmòforge Academy
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              fontWeight: 300,
              color: "#3D2F6B",
              letterSpacing: "0.02em",
              margin: 0,
            }}
          >
            Connecting Builders. Empowering the Decentralized Future.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: "rgba(13,13,13,0.6)",
              fontWeight: 300,
              margin: 0,
              maxWidth: 500,
            }}
          >
            Ìmòforge Academy is a global Web3 and DeFi deep-tech academy
            training builders, analysts, traders, and security professionals
            through hands-on, project-driven learning.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 16,
              marginTop: 8,
            }}
          >
            <a
              href="https://t.me/+BN_iOjD8s2BhZjZk"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "14px 36px",
                background: "#3D2F6B",
                color: "#fff",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
              }}
            >
              Join the Waitlist <ArrowRight size={16} />
            </a>
            <Link
              to="/about"
              style={{
                padding: "14px 36px",
                border: "1.5px solid #8B7DB5",
                color: "#3D2F6B",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
              }}
            >
              View Curriculum <MoveRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding: "112px 24px", background: "#fff" }}>
        <div style={W}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "48px 64px",
              alignItems: "start",
            }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#8B7DB5",
                  fontWeight: 500,
                }}
              >
                About Ìmòforge Academy
              </span>
              <h2
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 300,
                  color: "#251C45",
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                Who We Are
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.9,
                  color: "rgba(13,13,13,0.6)",
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                Ìmòforge Academy is a global Web3 and DeFi deep tech education
                hub focused on blockchain engineering, DeFi tool and
                infrastructure development, Web3 security, and on-chain trading
                & market analytics. We train and connect learners from Africa
                and around the world through hands-on, project-driven programs,
                real-world applications, and one of the fastest growing Web3
                alumni networks empowering graduates to build, trade, secure,
                and scale the decentralized future.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#8B7DB5",
                  fontWeight: 500,
                }}
              >
                The Lab Behind the Academy
              </span>
              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 300,
                  color: "#251C45",
                  margin: 0,
                }}
              >
                Àkàńó Labs
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.9,
                  color: "rgba(13,13,13,0.6)",
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                Àkàńó Labs is a technology and blockchain-focused innovation lab
                dedicated to education, research, and the development of secure,
                data-driven products across Web2 and Web3 technologies. We
                combine learning, experimentation, and real-world building to
                prepare individuals for the digital and decentralized future.
              </p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.9,
                  color: "rgba(13,13,13,0.6)",
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                Founded by Oyelude Waliullahi, Àkàńó Labs operates both as an
                innovation lab that builds and researches products and as an
                education ecosystem through its academy. Ìmòforge Academy is the
                official education arm, focused on structured learning,
                mentorship, and hands-on training in Web2, Web3, blockchain
                development, data analytics, DeFi, and digital finance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: "112px 24px", background: "#F7F5FC" }}>
        <div style={W}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 64,
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#8B7DB5",
                fontWeight: 500,
              }}
            >
              What We Stand For
            </span>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "#251C45",
                margin: 0,
              }}
            >
              Our Core Values
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {coreValues.map((val, i) => (
              <motion.div
                key={val.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.5}
                style={{
                  padding: 32,
                  background: "#fff",
                  border: "1px solid rgba(196,186,223,0.3)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ width: 32, height: 2, background: "#8B7DB5" }} />
                <h3
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "#251C45",
                    margin: 0,
                  }}
                >
                  {val.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.75,
                    color: "rgba(13,13,13,0.55)",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gratia Vault */}
      <section
        style={{
          padding: "112px 24px",
          background: "#251C45",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "radial-gradient(circle at 90% 10%, #8B7DB530 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C4BADF15 0%, transparent 50%)",
          }}
        />
        <div style={{ ...W, position: "relative", zIndex: 1 }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              marginBottom: 64,
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(196,186,223,0.7)",
                fontWeight: 500,
              }}
            >
              Free Workshop
            </span>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Ìmòforge Gratia Vault
              <span style={{ display: "block", color: "#C4BADF" }}>
                2026 Edition
              </span>
            </h2>
            <p
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.1rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              The lantern lights, yet the path is yours.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 8,
              }}
            >
              {["March 30, 2026", "2 Weeks Intensive", "First Edition"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "6px 16px",
                      borderRadius: 999,
                      border: "1px solid rgba(196,186,223,0.3)",
                      fontSize: 12,
                      color: "rgba(196,186,223,0.8)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              marginBottom: 56,
            }}
          >
            {vaultTopics.map((topic, i) => (
              <motion.div
                key={topic.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.4}
                style={{
                  padding: 24,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: "rgba(196,186,223,0.5)",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.9)",
                    margin: 0,
                  }}
                >
                  {topic.title}
                </h4>
                <p
                  style={{
                    fontSize: 12.5,
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
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
              style={{
                padding: "14px 36px",
                background: "#fff",
                color: "#251C45",
                borderRadius: 999,
                fontSize: 13.5,
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
              }}
            >
              Reserve a Seat <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
