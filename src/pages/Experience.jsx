export default function Experience() {
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
        Internship Experience
      </h2>

      <div
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
          style={{
            fontSize: "2rem",
            color: "#06b6d4",
            marginBottom: "10px"
          }}
        >
          AI Intern
        </h3>

        <h4
          style={{
            color: "#8b5cf6",
            marginBottom: "10px"
          }}
        >
          Infosys Springboard
        </h4>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "25px"
          }}
        >
          December 2024 – February 2025
        </p>

        <p
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