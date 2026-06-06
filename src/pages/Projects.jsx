const projects = [
  {
    title: "AI Quiz Platform",
    desc:
      "AI-powered quiz platform with MCQ generation, leaderboard, chatbot integration and multiple topics.",
    tech: "Python, React, LLM, Groq API, Hugging Face",
    link:
      "https://huggingface.co/spaces/Muthuraja18/quiz-home"
  },

  {
    title: "Institute Chatbot",
    desc:
      "AI chatbot developed for admission guidance, student support, FAQs and intelligent query handling.",
    tech: "React, FastAPI, LLM, RAG",
    link:
      "https://chatbot-delta-red-77.vercel.app/"
  },

  {
    title: "AI Call Assistant",
    desc:
      "Voice-enabled AI sales assistant with speech recognition, CRM integration, sentiment analysis and RAG.",
    tech: "Python, Streamlit, RAG, Groq API",
    link: ""
  },

  {
    title: "MyTestSpot Team Collaboration",
    desc:
      "Team-developed educational assessment platform with online tests, collaboration features and AI integration.",
    tech: "React, Python, SQL",
    link: ""
  },

  {
    title: "AI Shopping Mall",
    desc:
      "AI-powered shopping recommendation system with intelligent product suggestions and chatbot assistance.",
    tech: "Python, FastAPI, AI Models",
    link: ""
  },

  {
    title: "Bus Tracking & Prediction System",
    desc:
      "Real-time bus tracking platform with arrival time prediction using AI and location analytics.",
    tech: "Python, Streamlit, Machine Learning",
    link: ""
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
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
          .projects-section {
            padding: 80px 5% !important;
          }

          .projects-title {
            font-size: 2.2rem !important;
            margin-bottom: 40px !important;
          }

          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          .project-card {
            padding: 20px !important;
          }

          .project-title {
            font-size: 1.2rem !important;
          }

          .project-desc {
            font-size: 0.95rem !important;
            line-height: 1.7 !important;
          }

          .project-tech {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          .projects-section {
            padding: 70px 4% !important;
          }

          .projects-title {
            font-size: 1.8rem !important;
          }

          .project-card {
            padding: 18px !important;
            border-radius: 15px !important;
          }

          .project-title {
            font-size: 1.05rem !important;
          }

          .project-desc {
            font-size: 0.9rem !important;
          }

          .project-tech {
            font-size: 0.85rem !important;
          }

          .project-btn {
            width: 100%;
            text-align: center;
            padding: 12px !important;
          }
        }
      `}</style>

      <h2
        className="projects-title"
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
        Featured Projects
      </h2>

      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "25px"
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              background: "rgba(255,255,255,.05)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255,255,255,.1)",
              borderRadius: "20px",
              padding: "25px",
              transition: "0.3s"
            }}
          >
            <h3
              className="project-title"
              style={{
                color: "#06b6d4",
                marginBottom: "15px"
              }}
            >
              {project.title}
            </h3>

            <p
              className="project-desc"
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                marginBottom: "15px"
              }}
            >
              {project.desc}
            </p>

            <p
              className="project-tech"
              style={{
                color: "#8b5cf6",
                fontWeight: "600",
                marginBottom: "20px"
              }}
            >
              {project.tech}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
                style={{
                  display: "inline-block",
                  padding: "12px 22px",
                  background:
                    "linear-gradient(90deg,#06b6d4,#8b5cf6)",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "10px",
                  fontWeight: "600"
                }}
              >
                View Live Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
