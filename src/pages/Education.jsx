import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      icon: <FaGraduationCap />,
      degree: "B.Tech Information Technology",
      institution: "Sethu Institute of Technology",
      year: "2022 - 2026",
      score: "CGPA: 8.69",
    },
    {
      icon: <FaUniversity />,
      degree: "Higher Secondary Education (HSC)",
      institution: "Pasumalai Higher Secondary School",
      year: "2021 - 2022",
      score: "75.16%",
    },
    {
      icon: <FaSchool />,
      degree: "Secondary School Education (SSLC)",
      institution: "Anusha Vidyalaya Matriculation School",
      year: "2019 - 2020",
      score: "97.4%",
    },
  ];

  return (
    <section id="education" className="education-section">
      
      <style>{`
        .education-section {
          padding: 80px 20px;
          background: #0f172a;
          color: #fff;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 50px;
          color: #38bdf8;
          font-weight: 700;
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: auto;
        }

        .timeline::before {
          content: "";
          position: absolute;
          top: 0;
          left: 30px;
          width: 3px;
          height: 100%;
          background: #38bdf8;
        }

        .timeline-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 40px;
          position: relative;
        }

        .timeline-icon {
          width: 60px;
          height: 60px;
          background: #38bdf8;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 1.5rem;
          z-index: 1;
          flex-shrink: 0;
        }

        .timeline-content {
          margin-left: 20px;
          background: #1e293b;
          padding: 20px;
          border-radius: 10px;
          width: 100%;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
        }

        .timeline-content h3 {
          margin: 0;
          color: #38bdf8;
        }

        .timeline-content h4 {
          margin: 5px 0;
          color: #e2e8f0;
        }

        .timeline-content p {
          margin: 5px 0;
          color: #94a3b8;
        }

        .timeline-content span {
          display: inline-block;
          margin-top: 8px;
          font-weight: bold;
          color: #22c55e;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .education-section {
            padding: 70px 15px;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 40px;
          }

          .timeline::before {
            left: 25px;
          }

          .timeline-icon {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }

          .timeline-content {
            margin-left: 15px;
            padding: 18px;
          }

          .timeline-content h3 {
            font-size: 1.1rem;
          }

          .timeline-content h4 {
            font-size: 1rem;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .education-section {
            padding: 60px 12px;
          }

          .section-title {
            font-size: 1.8rem;
            margin-bottom: 35px;
          }

          .timeline::before {
            left: 20px;
          }

          .timeline-item {
            margin-bottom: 30px;
          }

          .timeline-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }

          .timeline-content {
            margin-left: 12px;
            padding: 15px;
          }

          .timeline-content h3 {
            font-size: 1rem;
            line-height: 1.4;
          }

          .timeline-content h4 {
            font-size: 0.9rem;
          }

          .timeline-content p,
          .timeline-content span {
            font-size: 0.85rem;
          }
        }
      `}</style>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Education
      </motion.h2>

      <div className="timeline">
        {education.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon">{item.icon}</div>

            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p>{item.year}</p>
              <span>{item.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
