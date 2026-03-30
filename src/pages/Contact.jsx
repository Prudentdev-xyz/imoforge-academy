import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { a } from "framer-motion/client";

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

const socials = [
  { label: "X (Twitter)", href: "https://x.com/Imoforge_Acad" },
  { label: "TikTok", href: "https://www.tiktok.com/@imoforge_acad" },
  { label: "Instagram", href: "https://www.instagram.com/imoforge_acad" },
  { label: "Telegram", href: "https://t.me/imoforge_Acad" },
];

const faqs = [
  {
    q: "What is Àkàńó Labs and its connection to Ìmòforge Academy?",
    a: "Àkàńó Labs is a technology and blockchain-focused innovation lab dedicated to education, research, and the development of secure, data-driven products across Web2 and Web3 technologies. We combine learning, experimentation, and real-world building to prepare individuals for the digital and decentralized future. Founded by Oyelude Waliullahi, a blockchain data analyst, Web3 developer, and researcher, Àkàńó Labs operates as both an innovation lab building and researching technology products, and an education ecosystem through its academy and training programs. Ìmòforge Academy is the official education arm of Àkàńó Labs, focused on structured learning, mentorship, and hands-on training in Web2, Web3, blockchain development, data analytics, DeFi, and digital finance.",
  },
  {
    q: "What is Ìmòforge Academy?",
    a: "Ìmòforge Academy is the structured learning and training platform of Àkàńó Labs. It provides practical, mentor-guided learning to help participants develop real-world skills and long-term positioning in Web3 and modern technology systems.",
  },
  {
    q: "What is Magnum Ìmò 2.0?",
    a: "Magnum Ìmò 2.0 is the second cohort of Ìmòforge Academy. It is a Web3-first, 10-week intensive program designed to build strong technical foundations, on-chain thinking, and long-term positioning across modern tech ecosystems. Theme: A journey of a thousand miles begins with a single step. No hype. No shortcuts. No recycled content.",
  },
  {
    q: "When does Magnum Ìmò 2.0 start and how long does it last?",
    a: "Start date: 27 April, 2026. Duration: 10 weeks (intensive). Participants receive onboarding and preparation details prior to the cohort start date.",
  },
  {
    q: "Who is Magnum Ìmò 2.0 for?",
    a: "Magnum Ìmò 2.0 is designed for both beginners and professionals. Whether you're new to blockchain or looking to formalize your skills, this 10-week program will teach you practical, career-ready skills in Web3, blockchain technology, and digital assets.",
  },
  {
    q: "Do I need prior experience to join?",
    a: "No prior experience is required. The program starts with foundational concepts and gradually moves to hands-on projects and advanced applications, making it beginner-friendly while still valuable for professionals.",
  },
  {
    q: "What makes Ìmòforge Academy different from other academies?",
    a: "System-level understanding over memorizing tools. Transferable technical thinking across Web2 and Web3. Practical context without exposing proprietary frameworks. Long-term skill development, not content overload. This is guided learning with depth, not just lessons. Graduates also gain access to our exclusive alumni community, continuing to learn, collaborate, and grow even after their cohort has finished.",
  },
  {
    q: "What will I learn?",
    a: "Web3 & Blockchain Technology, Blockchain Data & Analysis, On-Chain Research, Digital Asset & Trading Fundamentals, Building on Blockchain, Blockchain Safety & Security, Building a Career in Web3.",
  },
  {
    q: "How long is the program?",
    a: "The cohort runs for 10 weeks, with interactive sessions, practical exercises, and mentorship support throughout.",
  },
  {
    q: "How is the program delivered?",
    a: "Magnum Ìmò 2.0 is fully online and cohort-based, meaning you'll learn alongside peers, participate in live sessions, and get guidance from mentors. All resources are accessible digitally.",
  },
  {
    q: "What are the benefits of joining Magnum Ìmò 2.0?",
    a: "Receive a certificate of completion after successfully finishing the program. Gain access to the exclusive Ìmòforge Alumni Community for networking, mentorship, and continued learning. Develop career-ready skills in Web3 and blockchain. Work on hands-on projects with guidance from industry mentors.",
  },
  {
    q: "What outcomes can I expect?",
    a: "Understand Web3 and blockchain technology. Analyze blockchain data and digital project activity. Build basic blockchain applications. Apply safe strategies to digital assets. Have a personal roadmap to start or advance a Web3 career. Receive a certificate and join the Ìmòforge alumni network.",
  },
  {
    q: "How much does it cost?",
    a: "The Magnum Ìmò 2.0 program is $50. This includes all live sessions, hands-on exercises, mentorship, learning resources, and access to the alumni community. Limited seats ensure personalized guidance.",
  },
  {
    q: "When does registration and payment open and close?",
    a: "Opens: 20 April, 2026. Closes: 27 April, 2026. Admission is via the Academy Waitlist only.",
  },
  {
    q: "How do I register for Magnum Ìmò 2.0?",
    a: "Join the official Ìmòforge Academy Waitlist. Receive the registration announcement. Complete payment within the registration window. Access is limited and slots are not guaranteed.",
  },
  {
    q: "Is Magnum Ìmò 2.0 for everyone?",
    a: "No. This program is not for individuals seeking quick money. It is not for those looking for signals or shortcuts. It is not for passive learning. It is for those committed to real understanding and long-term growth.",
  },
  {
    q: "Is the payment refundable?",
    a: "No. Once payment is made, it is non-refundable due to the structured and limited nature of the cohort.",
  },
  {
    q: "What is the Ìmòforge Academy Alumni Community?",
    a: "A private network for certified graduates. Continued learning and mentorship. Long-term networking. Early access to future programs and initiatives. Positioning within the academy ecosystem.",
  },
  {
    q: "How do I stay updated and engaged?",
    a: "Follow Ìmòforge Academy and Àkàńó Labs on all official social media. Stay active in official channels. Track announcements, updates, and onboarding instructions. Staying connected ensures you do not miss any important information.",
  },
  {
    q: "Does Ìmòforge Academy offer any free programs?",
    a: "Yes. Ìmòforge Academy has launched its annual free workshop called Ìmòforge Gratia Vault. Edition: 2026. Duration: 2 weeks. Start Date: 30 March 2026. End Date: 12 April 2026. Frequency: Held every year. This workshop is designed to introduce learners to core concepts and prepare them for advanced programs.",
  },
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={index * 0.05}
      style={{ borderBottom: "1px solid rgba(196,186,223,0.3)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "24px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#251C45",
            lineHeight: 1.6,
          }}
        >
          {q}
        </span>
        <span
          style={{
            fontSize: 20,
            color: "#8B7DB5",
            flexShrink: 0,
            transition: "transform 0.3s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.9,
                color: "rgba(13,13,13,0.6)",
                fontWeight: 300,
                margin: 0,
                paddingBottom: 24,
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Connect() {
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
              Contact & Support
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
              Reach Out to Us
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
              We're always open to questions, conversations, and meaningful
              connections. Reach out anytime — we're here to support your
              journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Info ── */}
      <section style={{ ...SP, background: "#fff" }}>
        <div
          style={{
            ...W,
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
            custom={0}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <div style={{ width: 32, height: 2, background: "#8B7DB5" }} />
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 300,
                color: "#251C45",
                margin: 0,
              }}
            >
              Email Support
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
              For inquiries, guidance, or general support, you can reach us
              directly via email. We respond with care and clarity.
            </p>

            <a
              href="mailto:support@imoforge.academy"
              style={{
                fontSize: 15,
                color: "#3D2F6B",
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid #C4BADF",
                paddingBottom: 4,
                width: "fit-content",
              }}
            >
              support@imoforge.academy
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <div style={{ width: 32, height: 2, background: "#8B7DB5" }} />
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 300,
                color: "#251C45",
                margin: 0,
              }}
            >
              Social Channels
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
              Connect with us, ask questions, and stay updated through our
              official social platforms.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "10px 20px",
                    borderRadius: 999,
                    border: "1px solid rgba(139,125,181,0.4)",
                    fontSize: 13,
                    color: "#3D2F6B",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
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
              gap: 16,
              marginBottom: 56,
            }}
          >
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "#251C45",
                margin: 0,
              }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
