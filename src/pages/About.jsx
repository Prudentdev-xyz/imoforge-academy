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
  {
    num: "01",
    title: "Blockchain Fundamentals",
    desc: "Understand the foundations of blockchain, decentralization, and trustless systems.",
  },
  {
    num: "02",
    title: "Blockchain Engineering & DeFi Tools",
    desc: "Design and build smart contracts, protocols, and decentralized infrastructure.",
  },
  {
    num: "03",
    title: "Web3 Security",
    desc: "Audit smart contracts, identify vulnerabilities, and secure on-chain systems.",
  },
  {
    num: "04",
    title: "On-Chain Trading & Analytics",
    desc: "Read market behavior through on-chain data and develop informed trading strategies.",
  },
  {
    num: "05",
    title: "Blockchain Data Analysis",
    desc: "Analyze blockchain datasets using tools like Dune to extract real insights.",
  },
  {
    num: "06",
    title: "Web3 Careers & Branding",
    desc: "Position yourself professionally and unlock global Web3 opportunities.",
  },
  {
    num: "07",
    title: "Advanced Trading & DeFi",
    desc: "Master advanced DeFi strategies, yield mechanics, and on-chain capital flow.",
  },
];

const whyUs = [
  {
    title: "Learning by Building",
    desc: "We believe mastery comes from practice. Every learner builds real smart contracts, DeFi tools, dashboards, and trading systems.",
  },
  {
    title: "Globally Connected, Locally Rooted",
    desc: "Our community spans Africa and beyond, connecting learners with builders, mentors, and innovators worldwide.",
  },
  {
    title: "Support Beyond Graduation",
    desc: "We don't stop at teaching. Our alumni network opens doors to jobs, grants, collaborations, and long-term growth.",
  },
  {
    title: "Built for the Future of Web3",
    desc: "From blockchain engineering to data, security, and trading — our focus is on skills that remain relevant.",
  },
];

export default function About() {
  return (
    <main className="w-full">
      {/* ── Page Header ── */}
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-16 lg:px-24 bg-[#F7F5FC]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="flex flex-col gap-5"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#8B7DB5] font-medium">
              About Imòforge Academy
            </span>
            <h1
              className="text-5xl md:text-7xl font-light text-[#251C45] leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Who We Are & <br className="hidden md:block" /> What We Stand For
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="flex flex-col gap-5"
          >
            <div className="w-8 h-[2px] bg-[#8B7DB5]" />
            <h2
              className="text-3xl md:text-4xl font-light text-[#251C45]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Our Vision
            </h2>
            <p className="text-[14px] md:text-[14.5px] leading-[1.9] text-[#0D0D0D]/60 font-light">
              To build a globally respected education and innovation ecosystem
              that produces thoughtful builders, researchers, and analysts
              capable of shaping the future of decentralized and data-driven
              technologies.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="flex flex-col gap-5"
          >
            <div className="w-8 h-[2px] bg-[#8B7DB5]" />
            <h2
              className="text-3xl md:text-4xl font-light text-[#251C45]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Our Mission
            </h2>
            <p className="text-[14px] md:text-[14.5px] leading-[1.9] text-[#0D0D0D]/60 font-light">
              To educate, mentor, and empower individuals through rigorous,
              project-driven programs that combine research, experimentation,
              and real-world building — while fostering a strong, values-driven
              community of global Web3 professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-[#F7F5FC]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="flex flex-col gap-5 mb-12"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#8B7DB5] font-medium">
              Academy Curriculum
            </span>
            <h2
              className="text-4xl md:text-5xl font-light text-[#251C45]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              What You'll Learn
            </h2>
            <p className="text-[14px] md:text-[14.5px] leading-[1.9] text-[#0D0D0D]/60 font-light max-w-2xl">
              At Imòforge Academy, we prepare builders, analysts, and traders
              for the future of decentralized technology through structured
              learning, hands-on projects, and real-world exposure.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((item, i) => (
              <motion.div
                key={item.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.08}
                className="group p-9 bg-white border border-[#C4BADF]/30 rounded-2xl hover:border-[#8B7DB5]/60 hover:shadow-md transition-all duration-300 flex flex-col gap-4"
              >
                <span className="text-[11px] text-[#C4BADF] font-medium tracking-widest">
                  {item.num}
                </span>
                <h3
                  className="text-xl font-medium text-[#251C45]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#0D0D0D]/55 font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="flex flex-col gap-5 mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-light text-[#251C45]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Why Learners Choose Imòforge
            </h2>
            <p className="text-[14px] md:text-[14.5px] leading-[1.9] text-[#0D0D0D]/60 font-light max-w-2xl">
              We are building more than courses. We are shaping confident Web3
              builders with strong foundations, global perspective, and
              long-term support.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.08}
                className="group p-9 bg-[#F7F5FC] border border-[#C4BADF]/30 rounded-2xl hover:border-[#8B7DB5]/60 hover:shadow-md transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-8 h-[2px] bg-[#8B7DB5] group-hover:w-14 transition-all duration-300" />
                <h3
                  className="text-xl font-medium text-[#251C45]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#0D0D0D]/55 font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 pb-32 bg-[#251C45] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="flex flex-col gap-3 mb-12"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#C4BADF]/70 font-medium">
              Founder
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            className="flex flex-col md:flex-row gap-10 md:gap-16 items-start"
          >
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl overflow-hidden bg-[#3D2F6B] border border-[#C4BADF]/20 flex-shrink-0 flex items-center justify-center">
              <span className="text-[#C4BADF]/40 text-[12px] tracking-wide">
                Photo
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <h2
                className="text-4xl md:text-5xl font-light text-white"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Oyelude Waliullahi
              </h2>
              <p className="text-[13px] text-[#C4BADF]/70 font-medium tracking-wide">
                Founder & CEO, Akano Labs · Blockchain Data Analyst, DeFi Tool
                Developer, Trader, and Cybersecurity Student
              </p>
              <p className="text-[14px] md:text-[14.5px] leading-[1.9] text-white/60 font-light max-w-2xl">
                Waliullahi is passionate about building technology, training,
                and connecting builders worldwide — empowering skilled
                individuals to shape the decentralized future.
              </p>
              <p
                className="text-xl md:text-2xl font-light text-[#C4BADF] italic mt-2"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                "Skilled individuals and technology will transform the world."
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            className="mt-14"
          >
            <Link
              to="/cohorts"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#251C45] text-[13.5px] font-medium tracking-wide hover:bg-[#C4BADF] transition-all duration-300"
            >
              View Cohorts & Alumni
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
