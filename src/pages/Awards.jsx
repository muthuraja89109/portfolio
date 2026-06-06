import { motion } from "framer-motion";
import { FaAward, FaMedal, FaTrophy } from "react-icons/fa";

export default function Awards() {
  const awards = [
    {
      icon: <FaTrophy />,
      title: "AI Games",
      position: "2nd Prize",
      college: "Sri Eshwar Engineering College",
      description:
        "Developed engaging and intelligent AI-based games demonstrating AI problem-solving capabilities.",
    },
    {
      icon: <FaMedal />,
      title: "MAKE_A_THON",
      position: "2nd Prize",
      college: "Sri Eshwar Engineering College",
      description:
        "Built functional IoT hardware devices showcasing innovation and technical excellence.",
    },
    {
      icon: <FaAward />,
      title: "IoT Mastermind",
      position: "3rd Prize",
      college: "Sri Eshwar Engineering College",
      description:
        "Recognized for innovative use of IoT technologies in smart systems development.",
    },
    {
      icon: <FaAward />,
      title: "BOT Battle",
      position: "3rd Prize",
      college: "Sri Eshwar Engineering College",
      description:
        "Created an intelligent AI chatbot and demonstrated conversational AI capabilities.",
    },
  ];

  return (
    <section id="awards" className="awards-section">

      <style>{`
        .awards-section {
          padding: 80px 20px;
          background: #0a0f1c;
          color: #fff;
          text-align: center;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 50px;
          color: #4a34c6;
          font-weight: bold;
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          max-width: 1100px;
          margin: auto;
        }

        .award-card {
          background: #1e293b;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.4);
          transition: all 0.3s ease;
          text-align: left;
          position: relative;
          overflow: hidden;
          border: 1px solid transparent;
        }

        .award-card:hover {
          transform: translateY(-10px);
          border: 1px solid #fbbf24;
          box-shadow: 0 0 25px rgba(251, 191, 36, 0.3);
        }

        .award-icon {
          font-size: 2.2rem;
          color: #fbbf24;
          margin-bottom: 10px;
        }

        .award-card h3 {
          margin: 10px 0 5px;
          color: #38bdf8;
          font-size: 1.2rem;
        }

        .award-card h4 {
          display: inline-block;
          background: #fbbf24;
          color: #0a0f1c;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.85rem;
          margin-bottom: 10px;
        }

        .college {
          color: #94a3b8;
          font-size: 0.9rem;
          margin-bottom: 10px;
        }

        .award-card p {
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .awards-section {
            padding: 70px 15px;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 40px;
          }

          .awards-grid {
            gap: 20px;
          }

          .award-card {
            padding: 20px;
          }

          .award-icon {
            font-size: 2rem;
          }

          .award-card h3 {
            font-size: 1.1rem;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .awards-section {
            padding: 60px 12px;
          }

          .section-title {
            font-size: 1.8rem;
            margin-bottom: 35px;
          }

          .awards-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .award-card {
            padding: 18px;
            border-radius: 12px;
          }

          .award-icon {
            font-size: 1.8rem;
          }

          .award-card h3 {
            font-size: 1rem;
          }

          .award-card h4 {
            font-size: 0.8rem;
            padding: 4px 8px;
          }

          .college {
            font-size: 0.85rem;
          }

          .award-card p {
            font-size: 0.9rem;
            line-height: 1.6;
          }
        }
      `}</style>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Awards & Achievements
      </motion.h2>

      <div className="awards-grid">
        {awards.map((award, index) => (
          <motion.div
            className="award-card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="award-icon">{award.icon}</div>

            <h3>{award.title}</h3>
            <h4>{award.position}</h4>
            <p className="college">{award.college}</p>
            <p>{award.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
