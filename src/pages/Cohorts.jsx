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

const W = { maxWidth: 1100, margin: "0 auto" };
const SP = { padding: "112px 24px" };

const pillars = [
  {
    num: "01",
    title: "Blockchain & Web3 Foundations",
    desc: "Build a deep understanding of how blockchain works and why Web3 is transforming the internet.",
    points: [
      "How blockchains process and verify transactions",
      "How wallets, tokens, and smart contracts work",
      "Structure of major blockchain ecosystems",
      "The role of decentralization in the future internet",
    ],
  },
  {
    num: "02",
    title: "Blockchain Data Analysis",
    desc: "Learn to analyze blockchain data and extract insights like professional crypto researchers.",
    points: [
      "How to read blockchain transactions",
      "Use analytics tools to track on-chain activity",
      "Identify trends in crypto markets",
      "How blockchain data is used by analysts and investors",
    ],
  },
  {
    num: "03",
    title: "On-Chain Research",
    desc: "Discover how analysts track wallet activity and movements from major market participants.",
    points: [
      'How to track "smart money" wallets',
      "Analyze token activity and liquidity",
      "How researchers monitor blockchain ecosystems",
      "How on-chain insights influence crypto markets",
    ],
  },
  {
    num: "04",
    title: "Memecoin Market Intelligence",
    desc: "Understand the dynamics behind memecoins and the risks involved.",
    points: [
      "How memecoin trends emerge",
      "How traders identify early opportunities",
      "Evaluate token activity before participating",
      "Risk awareness and responsible decision-making",
    ],
  },
  {
    num: "05",
    title: "Building on Blockchain",
    desc: "Get introduced to the tools developers use to build decentralized applications.",
    points: [
      "Smart contract fundamentals",
      "Architecture of decentralized applications (dApps)",
      "Tools used by Web3 developers",
      "How blockchain products are designed and deployed",
    ],
  },
  {
    num: "06",
    title: "Blockchain Security Research",
    desc: "Explore how blockchain systems are analyzed for vulnerabilities and how to protect users.",
    points: [
      "Common blockchain attack vectors",
      "Smart contract vulnerabilities",
      "How scams and exploits happen in Web3",
      "Best practices for security awareness",
    ],
  },
  {
    num: "07",
    title: "Web3 Career Pathways",
    desc: "Learn how to position yourself for real opportunities in the Web3 industry.",
    points: [
      "Different career roles in Web3",
      "How to build a Web3 portfolio",
      "How to contribute to blockchain communities",
      "Find opportunities in the global crypto ecosystem",
    ],
  },
];

const differentiators = [
  "Practical exposure to blockchain analytics and research tools",
  "Understanding of on-chain market intelligence",
  "Awareness of security risks within blockchain systems",
  "Insights into multiple career paths in the Web3 ecosystem",
  "Access to a community of learners, builders, and researchers",
  "Continuous mentorship even after the cohort ends",
];

const outcomes = [
  "Understand how blockchain ecosystems operate",
  "Interpret blockchain data and on-chain activity",
  "Identify security risks in blockchain systems",
  "Build foundational blockchain applications",
  "Gain clarity on career paths in Web3",
  "Contribute to projects and potentially land internships or Web3 roles",
];

const magnum1Topics = [
  "Blockchain & Web3 foundations",
  "Web3 career exploration",
  "Wallets & security best practices",
  "Solana memecoin trading",
  "On-chain data analysis using Dune",
  "Guest sessions & AMAs",
];

const magnum1Graduates = [
  "Certificate of Completion",
  "Practical Web3 skills",
  "Portfolio ready experience",
  "Lifetime alumni access",
];

const alumniPerks = [
  "A private network for certified graduates.",
  "Continued learning and mentorship.",
  "Long-term networking.",
  "Early access to future programs and initiatives.",
  "Positioning within the academy ecosystem.",
];

export default function Cohorts() {
  return (
    <main style={{ width: "100%" }}>
      {/* ── Page Header ── */}
      <section style={{ background: "#F7F5FC", padding: "80px 24px" }}>
        <div style={W}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              alignItems: "center",
              textAlign: "center",
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
              Programs
            </span>
            <h1
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 300,
                color: "#251C45",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Cohorts <span style={{ color: "#8B7DB5" }}>&</span> Programs
            </h1>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "rgba(13,13,13,0.6)",
                fontWeight: 300,
                margin: 0,
                maxWidth: 560,
              }}
            >
              Structured learning experiences built for real understanding
              across the blockchain and Web3 ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Magnum Ìmò 2.0 ── */}
      <section style={{ ...SP, background: "#fff" }}>
        <div style={W}>
          {/* Badge + Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              marginBottom: 64,
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "6px 18px",
                borderRadius: 999,
                background: "#3D2F6B",
                color: "#C4BADF",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 500,
                width: "fit-content",
              }}
            >
              Upcoming
            </span>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                color: "#251C45",
                margin: 0,
              }}
            >
              Magnum Ìmò 2.0
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "#8B7DB5",
                fontWeight: 500,
                letterSpacing: "0.05em",
                margin: 0,
              }}
            >
              Ìmòforge Academy · Second Cohort · 10-Week Intensive
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(13,13,13,0.5)",
                fontWeight: 500,
                margin: 0,
              }}
            >
              Starts 27 April, 2026
            </p>
            <p
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                fontWeight: 300,
                color: "#3D2F6B",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              "A journey of a thousand miles begins with a step."
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "rgba(13,13,13,0.6)",
                fontWeight: 300,
                margin: 0,
                maxWidth: 700,
              }}
            >
              A practical Web3 learning program designed to help students
              understand blockchain technology, analyze on-chain data, identify
              opportunities in the crypto ecosystem, build decentralized
              applications, and explore careers in the global Web3 industry.
            </p>
          </motion.div>

          {/* What You Will Learn */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginBottom: 40,
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
              What You Will Learn
            </span>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "rgba(13,13,13,0.6)",
                fontWeight: 300,
                margin: 0,
              }}
            >
              Seven core pillars taught with practical context and hands-on
              thinking — no recycled content, no shortcuts.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              marginBottom: 64,
            }}
          >
            {pillars.map((item, i) => (
              <motion.div
                key={item.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.08}
                style={{
                  padding: 32,
                  background: "#F7F5FC",
                  border: "1px solid rgba(196,186,223,0.3)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: "#8B7DB5",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                  }}
                >
                  {item.num}
                </span>
                <h3
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "#251C45",
                    margin: 0,
                  }}
                >
                  {item.title}
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
                  {item.desc}
                </p>
                <ul
                  style={{
                    paddingLeft: 16,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {item.points.map((pt) => (
                    <li
                      key={pt}
                      style={{
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "rgba(13,13,13,0.5)",
                        fontWeight: 300,
                      }}
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* What Makes It Different */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "48px 64px",
              marginBottom: 64,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ width: 32, height: 2, background: "#8B7DB5" }} />
              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 300,
                  color: "#251C45",
                  margin: 0,
                }}
              >
                What Makes It Different
              </h3>
              <ul
                style={{
                  paddingLeft: 16,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {differentiators.map((d) => (
                  <li
                    key={d}
                    style={{
                      fontSize: 14,
                      lineHeight: 1.8,
                      color: "rgba(13,13,13,0.6)",
                      fontWeight: 300,
                    }}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ width: 32, height: 2, background: "#8B7DB5" }} />
              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 300,
                  color: "#251C45",
                  margin: 0,
                }}
              >
                Program Outcome
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "rgba(13,13,13,0.6)",
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                By the end of Magnum Ìmò 2.0, students will have built a
                foundation that translates directly into real-world
                opportunities.
              </p>
              <ul
                style={{
                  paddingLeft: 16,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {outcomes.map((o) => (
                  <li
                    key={o}
                    style={{
                      fontSize: 14,
                      lineHeight: 1.8,
                      color: "rgba(13,13,13,0.6)",
                      fontWeight: 300,
                    }}
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Internship & Recognition ── */}
      <section style={{ ...SP, background: "#251C45", color: "#fff" }}>
        <div style={W}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 56,
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
              Internship & Recognition
            </span>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "#fff",
                margin: 0,
              }}
            >
              Rewards for Top Performers
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.5)",
                fontWeight: 300,
                margin: 0,
                maxWidth: 600,
              }}
            >
              This system creates scarcity, competition, and social proof
              driving students to perform and share their success.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginBottom: 64,
            }}
          >
            {[
              {
                tag: "Top 10 Students",
                title: "Exclusive Internship",
                desc: "Exclusive internship at Àkàńó Labs real-world experience in Web3 research, data analysis, and product building.",
              },
              {
                tag: "Top 20 Students",
                title: "Public Recognition",
                desc: "Publicly recognized with certificates, social media features, and mentorship opportunities creating prestige and motivation.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.tag}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.1}
                style={{
                  padding: 32,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(196,186,223,0.15)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 14px",
                    borderRadius: 999,
                    background: "rgba(196,186,223,0.15)",
                    color: "#C4BADF",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    width: "fit-content",
                  }}
                >
                  {item.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.55)",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Access Note + CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                fontWeight: 300,
                margin: 0,
              }}
            >
              Admission is via the Academy waitlist only. Starts 27 April, 2026.
            </p>

            <a
              href="https://t.me/+BN_iOjD8s2BhZjZk"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 36px",
                borderRadius: 999,
                background: "#fff",
                color: "#251C45",
                fontSize: 13.5,
                fontWeight: 500,
                textDecoration: "none",
                width: "fit-content",
              }}
            >
              Join the Academy Waitlist
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Magnum Ìmò 1.0 ── */}
      <section style={{ ...SP, background: "#F7F5FC" }}>
        <div style={W}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              marginBottom: 56,
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "6px 18px",
                borderRadius: 999,
                border: "1px solid rgba(139,125,181,0.4)",
                color: "#8B7DB5",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 500,
                width: "fit-content",
              }}
            >
              Completed
            </span>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                color: "#251C45",
                margin: 0,
              }}
            >
              Magnum Ìmò 1.0
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "#8B7DB5",
                fontWeight: 500,
                letterSpacing: "0.05em",
                margin: 0,
              }}
            >
              Ìmòforge Academy · First Cohort · 2-Week Intensive
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "rgba(13,13,13,0.6)",
                fontWeight: 300,
                margin: 0,
                maxWidth: 680,
              }}
            >
              The founding cohort of Ìmòforge Academy a 2-week intensive
              introduction to Web3 foundations, wallets, on-chain trading, and
              data analysis. Students left with practical skills and a
              foundation for deeper exploration.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "48px 64px",
            }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div style={{ width: 32, height: 2, background: "#8B7DB5" }} />
              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.4rem",
                  fontWeight: 300,
                  color: "#251C45",
                  margin: 0,
                }}
              >
                Topics Covered
              </h3>
              <ul
                style={{
                  paddingLeft: 16,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {magnum1Topics.map((t) => (
                  <li
                    key={t}
                    style={{
                      fontSize: 14,
                      lineHeight: 1.8,
                      color: "rgba(13,13,13,0.6)",
                      fontWeight: 300,
                    }}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div style={{ width: 32, height: 2, background: "#8B7DB5" }} />
              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.4rem",
                  fontWeight: 300,
                  color: "#251C45",
                  margin: 0,
                }}
              >
                Graduates Receive
              </h3>
              <ul
                style={{
                  paddingLeft: 16,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {magnum1Graduates.map((g) => (
                  <li
                    key={g}
                    style={{
                      fontSize: 14,
                      lineHeight: 1.8,
                      color: "rgba(13,13,13,0.6)",
                      fontWeight: 300,
                    }}
                  >
                    {g}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginTop: 8,
                }}
              >
                {[
                  "Guest sessions & AMAs",
                  "First DeFi tools",
                  "Trading experience",
                  "Alumni network",
                ].map((a) => (
                  <span
                    key={a}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 999,
                      background: "#fff",
                      border: "1px solid rgba(196,186,223,0.4)",
                      fontSize: 12,
                      color: "#3D2F6B",
                      fontWeight: 500,
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ ...SP, background: "#fff" }}>
        <div style={W}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 56,
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
              Testimonials & Success Stories
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
              What Students Say
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.08}
                style={{
                  padding: 32,
                  background: "#F7F5FC",
                  border: "1px solid rgba(196,186,223,0.3)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  minHeight: 180,
                }}
              >
                <div style={{ width: 32, height: 2, background: "#C4BADF" }} />
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "rgba(13,13,13,0.4)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  Student testimonial coming soon...
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alumni Benefits ── */}
      <section style={{ ...SP, background: "#251C45", color: "#fff" }}>
        <div style={W}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 56,
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
              Ìmòforge Academy Alumni Community
            </span>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "#fff",
                margin: 0,
              }}
            >
              Life After Graduation
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {alumniPerks.map((perk, i) => (
              <motion.div
                key={perk}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.08}
                style={{
                  padding: 32,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(196,186,223,0.15)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ width: 32, height: 2, background: "#8B7DB5" }} />
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.65)",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {perk}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            style={{ marginTop: 56 }}
          >
            <Link
              to="/connect"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 36px",
                borderRadius: 999,
                background: "#0D0D0D",
                color: "#fff",
                fontSize: 13.5,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
