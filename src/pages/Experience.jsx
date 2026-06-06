export default function Experience() {
  return (
    <section
      className="experience-section"
      style={{
        minHeight: "100vh",
        padding: "100px 8%",
        background:
          "linear-gradient(135deg,#0f172a,#111827,#1e1b4b)",
        color: "white"
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .experience-section {
            padding: 80px 5% !important;
          }

          .experience-title {
            font-size: 2.2rem !important;
            margin-bottom: 40px !important;
          }

          .experience-card {
            padding: 25px !important;
          }

          .experience-role {
            font-size: 1.6rem !important;
          }

          .experience-grid {
            grid-template-columns: 1fr !important;
          }

          .experience-tag {
            display: inline-block;
            text-align: center;
            padding: 10px 18px !important;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .experience-section {
            padding: 70px 4% !important;
          }

          .experience-title {
            font-size: 1.8rem !important;
          }

          .experience-card {
            padding: 20px !important;
            border-radius: 18px !important;
          }

          .experience-role {
            font-size: 1.3rem !important;
          }

          .experience-company {
            font-size: 1rem !important;
          }

          .experience-date {
            font-size: 0.9rem !important;
          }

          .experience-description {
            font-size: 0.95rem !important;
            line-height: 1.7 !important;
          }

          .experience-item {
            font-size: 0.9rem !important;
            padding: 12px !important;
          }

          .experience-tag {
            width: 100%;
            display: block;
            font-size: 0.85rem;
          }
        }
      `}</style>

      <h2
        className="experience-title"
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "50px",
          background:
            "linear-gradient(90deg,#06b6d4,#8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        Internship Experience
      </h2>

      <div
        className="experience-card"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "25px",
          padding: "40px",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.3)"
        }}
      >
        <h3
          className="experience-role"
          style={{
            fontSize: "2rem",
            color: "#06b6d4",
            marginBottom: "10px"
          }}
        >
          AI Intern
        </h3>

        <h4
          className="experience-company"
          style={{
            color: "#8b5cf6",
            marginBottom: "10px"
          }}
        >
          Infosys Springboard
        </h4>

        <p
          className="experience-date"
          style={{
            color: "#cbd5e1",
            marginBottom: "25px"
          }}
        >
          December 2024 – February 2025
        </p>

        <p
          className="experience-description"
          style={{
            lineHeight: "1.8",
            color: "#e2e8f0",
            marginBottom: "25px"
          }}
        >
          Completed an Artificial Intelligence internship
          focused on developing intelligent applications,
          learning AI concepts, integrating APIs, and
          building real-world solutions using modern
          software development practices.
        </p>

        <div
          className="experience-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px"
          }}
        >
          {[
            "Worked on AI & Machine Learning Projects",
            "Developed LLM-based Applications",
            "REST API Integration",
            "Data Analysis & Visualization",
            "Problem Solving & Debugging",
            "Software Development Lifecycle"
          ].map((item, index) => (
            <div
              key={index}
              className="experience-item"
              style={{
                padding: "15px",
                borderRadius: "15px",
                background:
                  "rgba(255,255,255,0.05)",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                color: "#cbd5e1"
              }}
            >
              ✓ {item}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "30px",
            textAlign: "center"
          }}
        >
          <span
            className="experience-tag"
            style={{
              padding: "12px 25px",
              borderRadius: "30px",
              background:
                "linear-gradient(90deg,#06b6d4,#8b5cf6)",
              fontWeight: "600"
            }}
          >
            AI • LLMs • APIs • Data Analytics
          </span>
        </div>
      </div>
    </section>
  );
}
