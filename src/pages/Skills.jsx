const skillCategories = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Responsive Design"
  ],

  Backend: [
    "Python",
    "Node JS",
    "FastAPI",
    "REST API"
  ],

  Database: [
    "SQL",
    "MySQL",
    "MongoDB",
    "Firebase"
  ],

  "AI & Machine Learning": [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "LLMs",
    "RAG",
    "LangChain",
    "CrewAI"
  ],

  "Cloud & Tools": [
    "Google Cloud",
    "Git",
    "GitHub",
    "VS Code"
  ]
};

export default function Skills() {
  return (
    <section
      className="skills-section"
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
          .skills-section {
            padding: 80px 5% !important;
          }

          .skills-title {
            font-size: 2.2rem !important;
            margin-bottom: 40px !important;
          }

          .skill-category-card {
            padding: 22px !important;
            margin-bottom: 20px !important;
          }

          .skill-category-title {
            font-size: 1.3rem !important;
          }

          .skills-wrapper {
            gap: 10px !important;
          }

          .skill-badge {
            padding: 10px 16px !important;
            font-size: 14px !important;
          }

          .interest-title {
            font-size: 1.4rem !important;
          }

          .interest-badge {
            padding: 12px 18px !important;
            font-size: 14px !important;
          }
        }

        @media (max-width: 480px) {
          .skills-section {
            padding: 70px 4% !important;
          }

          .skills-title {
            font-size: 1.8rem !important;
          }

          .skill-category-card {
            padding: 18px !important;
            border-radius: 15px !important;
          }

          .skill-category-title {
            font-size: 1.1rem !important;
          }

          .skill-badge {
            padding: 8px 14px !important;
            font-size: 13px !important;
          }

          .interest-title {
            font-size: 1.2rem !important;
          }

          .interest-badge {
            width: 100%;
            text-align: center;
            padding: 12px !important;
            font-size: 13px !important;
          }
        }
      `}</style>

      <h2
        className="skills-title"
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
        Technical Skills
      </h2>

      {Object.entries(skillCategories).map(
        ([category, skills]) => (
          <div
            key={category}
            className="skill-category-card"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.2)"
            }}
          >
            <h3
              className="skill-category-title"
              style={{
                color: "#06b6d4",
                marginBottom: "20px",
                fontSize: "1.5rem"
              }}
            >
              {category}
            </h3>

            <div
              className="skills-wrapper"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px"
              }}
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="skill-badge"
                  style={{
                    padding: "12px 20px",
                    borderRadius: "30px",
                    background:
                      "linear-gradient(90deg,#06b6d4,#8b5cf6)",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "15px",
                    transition: "0.3s ease"
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )
      )}

      <div
        style={{
          marginTop: "50px",
          textAlign: "center"
        }}
      >
        <h3
          className="interest-title"
          style={{
            color: "#06b6d4",
            marginBottom: "20px"
          }}
        >
          Areas of Interest
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px"
          }}
        >
          {[
            "AI Engineering",
            "Software Engineering",
            "Generative AI",
            "Full Stack Development",
            "Machine Learning"
          ].map((item) => (
            <div
              key={item}
              className="interest-badge"
              style={{
                padding: "14px 24px",
                borderRadius: "30px",
                border: "2px solid #06b6d4",
                color: "#06b6d4",
                fontWeight: "600"
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
