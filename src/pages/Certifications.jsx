import { motion } from "framer-motion";
import {
  FaCertificate,
  FaGraduationCap,
  FaShieldAlt,
  FaEye,
  FaDownload,
} from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      icon: <FaCertificate />,
      title: "AI Foundation Certificate",
      issuer: "Infosys Springboard",
      description:
        "Fundamentals of Artificial Intelligence, Machine Learning concepts, and AI applications.",
      link: "/certificates/ai-foundation.pdf",
    },
    {
      icon: <FaGraduationCap />,
      title: "Artificial Intelligence Primer",
      issuer: "Infosys Springboard",
      description:
        "Comprehensive introduction to AI technologies, intelligent systems, and modern AI solutions.",
      link: "/certificates/ai-primer.pdf",
    },
    {
      icon: <FaShieldAlt />,
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      description:
        "Understanding digital privacy, cybersecurity principles, and social media security practices.",
      link: "/certificates/privacy-security.pdf",
    },
    {
      icon: <FaCertificate />,
      title: "AI Intern Completion Certificate",
      issuer: "Infosys Springboard",
      description:
        "Successfully completed AI Internship and gained hands-on experience in Artificial Intelligence, Machine Learning, LLMs, RAG, API Integration, and AI-powered application development.",
      link: "/certificates/ai-intern-certificate.pdf",
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <style>{`
        .certifications-section {
          padding: 80px 20px;
          background: #0b1220;
          color: white;
          text-align: center;
        }

        .section-title {
          font-size: 2.5rem;
          color: #38bdf8;
          margin-bottom: 50px;
          font-weight: bold;
        }

        .certification-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          max-width: 1200px;
          margin: auto;
        }

        .cert-card {
          background: #1e293b;
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          transition: 0.3s;
          text-align: left;
        }

        .cert-card:hover {
          transform: translateY(-8px);
          background: #24364f;
        }

        .cert-icon {
          font-size: 2rem;
          color: #38bdf8;
          margin-bottom: 12px;
        }

        .cert-card h3 {
          color: #38bdf8;
          margin-bottom: 6px;
          font-size: 1.2rem;
        }

        .cert-card h4 {
          color: #94a3b8;
          margin-bottom: 12px;
          font-weight: 500;
        }

        .cert-card p {
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .cert-buttons {
          display: flex;
          gap: 10px;
          margin-top: 18px;
          flex-wrap: wrap;
        }

        .view-btn,
        .download-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
          font-size: 0.9rem;
        }

        .view-btn {
          border: 2px solid #38bdf8;
          color: #38bdf8;
          background: transparent;
        }

        .view-btn:hover {
          background: #38bdf8;
          color: #0b1220;
        }

        .download-btn {
          background: #38bdf8;
          color: #0b1220;
        }

        .download-btn:hover {
          background: #0ea5e9;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .certifications-section {
            padding: 70px 15px;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 40px;
          }

          .certification-grid {
            gap: 20px;
          }

          .cert-card {
            padding: 20px;
          }

          .cert-buttons {
            flex-direction: column;
          }

          .view-btn,
          .download-btn {
            width: 100%;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .certifications-section {
            padding: 60px 12px;
          }

          .section-title {
            font-size: 1.8rem;
            margin-bottom: 35px;
          }

          .certification-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .cert-card {
            padding: 18px;
            border-radius: 12px;
          }

          .cert-icon {
            font-size: 1.8rem;
          }

          .cert-card h3 {
            font-size: 1rem;
          }

          .cert-card h4 {
            font-size: 0.9rem;
          }

          .cert-card p {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .view-btn,
          .download-btn {
            width: 100%;
            padding: 12px;
            font-size: 0.85rem;
          }
        }
      `}</style>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Certifications
      </motion.h2>

      <div className="certification-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <div className="cert-icon">{cert.icon}</div>

            <h3>{cert.title}</h3>

            <h4>{cert.issuer}</h4>

            <p>{cert.description}</p>

            <div className="cert-buttons">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                <FaEye />
                View Certificate
              </a>

              <a
                href={cert.link}
                download
                className="download-btn"
              >
                <FaDownload />
                Download Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
