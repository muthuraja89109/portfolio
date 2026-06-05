import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "100px 8%",
        background:
          "linear-gradient(135deg,#0f172a,#111827,#1e1b4b)",
        color: "white"
      }}
    >
      <motion.div
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
          style={{
            textAlign: "center",
            color: "#06b6d4",
            marginBottom: "30px"
          }}
        >
          AI Engineer | Software Engineer
        </h3>

        <p
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
              style={{
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "20px",
                padding: "25px",
                textAlign: "center"
              }}
            >
              <h4
                style={{
                  color: "#06b6d4",
                  fontSize: "2rem",
                  marginBottom: "10px"
                }}
              >
                {item.value}
              </h4>

              <p style={{ color: "#cbd5e1" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}