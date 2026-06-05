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
      style={{
        minHeight: "100vh",
        padding: "100px 8%",
        background:
          "linear-gradient(135deg,#0f172a,#111827,#1e1b4b)",
        color: "white"
      }}
    >
      <h2
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
              style={{
                color: "#06b6d4",
                marginBottom: "20px",
                fontSize: "1.5rem"
              }}
            >
              {category}
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px"
              }}
            >
              {skills.map((skill) => (
                <div
                  key={skill}
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