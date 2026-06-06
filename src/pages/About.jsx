import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      style={{
        minHeight: "100vh",
        padding: "100px 8%",
        background:
          "linear-gradient(135deg,#0f172a,#111827,#1e1b4b)",
        color: "white"
      }}
    >
      <style>{`
        /* Tablet */
        @media (max-width: 768px) {
          .about-section {
            padding: 80px 5% !important;
          }

          .about-card {
            padding: 30px !important;
          }

          .about-title {
            font-size: 2.2rem !important;
          }

          .about-subtitle {
            font-size: 1.1rem !important;
          }

          .about-text {
            font-size: 1rem !important;
            line-height: 1.8 !important;
          }

          .about-buttons {
            gap: 15px !important;
          }

          .about-btn {
            padding: 12px 24px !important;
          }

          .about-stats {
            gap: 15px !important;
          }

          .about-stat-value {
            font-size: 1.8rem !important;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .about-section {
            padding: 70px 4% !important;
          }

          .about-card {
            padding: 20px !important;
            border-radius: 18px !important;
          }

          .about-title {
            font-size: 1.8rem !important;
            margin-bottom: 10px !important;
          }

          .about-subtitle {
            font-size: 1rem !important;
            margin-bottom: 20px !important;
          }

          .about-text {
            font-size: 0.95rem !important;
            line-height: 1.7 !important;
          }

          .about-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }

          .about-btn {
            width: 100% !important;
            max-width: 280px !important;
            text-align: center !important;
            padding: 12px !important;
          }

          .about-stats {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }

          .about-stat-card {
            padding: 18px !important;
          }

          .about-stat-value {
            font-size: 1.5rem !important;
          }

          .about-stat-label {
            font-size: 0.9rem !important;
          }
        }
      `}</style>

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "rgba(255,255,255,.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: "25px",
          padding: "50px"
        }}
      >
        <h2
          className="about-title"
          style={{
            fontSize: "3rem",
            textAlign: "center",
            marginBottom: "15px",
            background:
              "linear-gradient(90deg,#06b6d4,#8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          About Me
        </h2>

        <h3
          className="about-subtitle"
          style={{
            textAlign: "center",
            color: "#06b6d4",
            marginBottom: "30px"
          }}
        >
          AI Engineer | Software Engineer
        </h3>

        <p
          className="about-text"
          style={{
            lineHeight: "1.9",
            color: "#cbd5e1",
            marginBottom: "20px",
            fontSize: "1.05rem"
          }}
        >
          Hello! I'm <strong>Muthuraja L</strong>, a Final Year
          Information Technology student passionate about
          Artificial Intelligence, Software Engineering,
          Generative AI, Full Stack Development and Cloud Technologies.
        </p>

        <p
          className="about-text"
          style={{
            lineHeight: "1.9",
            color: "#cbd5e1",
            marginBottom: "20px",
            fontSize: "1.05rem"
          }}
        >
          I have built AI-powered applications including
          AI Call Assistants, Institute Chatbots,
          Educational Platforms, Shopping Mall AI Systems,
          Bus Tracking Systems and Team Collaboration Platforms.
        </p>

        <p
          className="about-text"
          style={{
            lineHeight: "1.9",
            color: "#cbd5e1",
            marginBottom: "30px",
            fontSize: "1.05rem"
          }}
        >
          I am actively seeking opportunities as an
          AI Engineer, Software Engineer, Python Developer,
          Full Stack Developer or Generative AI Engineer.
        </p>

        <div
          className="about-buttons"
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "40px"
          }}
        >
          <a
            href="/resume.pdf"
            download
            className="about-btn"
            style={{
              padding: "15px 30px",
              borderRadius: "12px",
              textDecoration: "none",
              background:
                "linear-gradient(90deg,#06b6d4,#8b5cf6)",
              color: "white",
              fontWeight: "bold"
            }}
          >
            Download Resume
          </a>

          <a
            href="/contact"
            className="about-btn"
            style={{
              padding: "15px 30px",
              borderRadius: "12px",
              textDecoration: "none",
              border: "2px solid #06b6d4",
              color: "#06b6d4",
              fontWeight: "bold"
            }}
          >
            Contact Me
          </a>
        </div>

        <div
          className="about-stats"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px"
          }}
        >
          {[
            { value: "10+", label: "Projects" },
            { value: "15+", label: "Skills" },
            { value: "4+", label: "Awards" },
            { value: "2026", label: "Graduate" }
          ].map((item, index) => (
            <div
              key={index}
              className="about-stat-card"
              style={{
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "20px",
                padding: "25px",
                textAlign: "center"
              }}
            >
              <h4
                className="about-stat-value"
                style={{
                  color: "#06b6d4",
                  fontSize: "2rem",
                  marginBottom: "10px"
                }}
              >
                {item.value}
              </h4>

              <p
                className="about-stat-label"
                style={{ color: "#cbd5e1" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
