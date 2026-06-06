import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero">

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
          padding: 40px 20px;
        }

        .profile-img {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #38bdf8;
          box-shadow: 0 0 25px rgba(56,189,248,0.5);
          margin-bottom: 20px;
        }

        h1 {
          font-size: 2.8rem;
          margin: 10px 0;
          color: #38bdf8;
        }

        .job-title {
          font-size: 1.3rem;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .open-to-work {
          display: inline-block;
          padding: 8px 18px;
          margin-bottom: 15px;
          border-radius: 30px;
          background: rgba(0, 255, 136, 0.15);
          color: #00ff88;
          border: 1px solid #00ff88;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .hero-desc {
          max-width: 800px;
          font-size: 1rem;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 30px;
        }

        .buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .resume-btn,
        .contact-btn {
          padding: 12px 22px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: bold;
          transition: 0.3s;
        }

        .resume-btn {
          background: #38bdf8;
          color: #000;
        }

        .resume-btn:hover {
          background: #0ea5e9;
          transform: translateY(-2px);
        }

        .contact-btn {
          background: transparent;
          border: 2px solid #38bdf8;
          color: #38bdf8;
        }

        .contact-btn:hover {
          background: #38bdf8;
          color: #000;
          transform: translateY(-2px);
        }

        /* Tablet */
        @media (max-width: 768px) {
          .hero {
            padding: 100px 20px 50px;
            min-height: auto;
          }

          h1 {
            font-size: 2.2rem;
            line-height: 1.3;
          }

          .job-title {
            font-size: 1.1rem;
          }

          .hero-desc {
            font-size: 0.95rem;
            line-height: 1.7;
            max-width: 100%;
          }

          .profile-img {
            width: 140px;
            height: 140px;
          }

          .buttons {
            width: 100%;
            flex-direction: column;
            align-items: center;
          }

          .resume-btn,
          .contact-btn {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .hero {
            padding: 120px 15px 40px;
          }

          h1 {
            font-size: 1.8rem;
          }

          .job-title {
            font-size: 1rem;
          }

          .hero-desc {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .profile-img {
            width: 120px;
            height: 120px;
          }

          .open-to-work {
            font-size: 0.85rem;
            padding: 6px 14px;
          }

          .resume-btn,
          .contact-btn {
            width: 100%;
            max-width: 280px;
            padding: 12px 18px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* PROFILE IMAGE */}
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        src="/profile.jpg"
        alt="Muthuraja L"
        className="profile-img"
      />

      {/* NAME */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Muthuraja L
      </motion.h1>

      {/* OPEN TO WORK */}
      <motion.div
        className="open-to-work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        🟢 Open to Work | Immediate Joiner
      </motion.div>

      {/* TITLE */}
      <motion.p
        className="job-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        AI Engineer | Software Engineer
      </motion.p>

      {/* DESCRIPTION */}
      <motion.p
        className="hero-desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Recent B.Tech Information Technology graduate actively seeking opportunities
        as an AI Engineer, Software Engineer, Full Stack Developer, or Python Developer.
        Skilled in Python, SQL, React, Machine Learning, and Generative AI with
        hands-on experience building AI-powered applications, web solutions, and
        real-world software projects. Passionate about solving problems through
        technology and developing scalable software solutions.
      </motion.p>

      {/* BUTTONS */}
      <div className="buttons">
        <a href="/resume.pdf" download className="resume-btn">
          📄 Download Resume
        </a>

        <a href="/contact" className="contact-btn">
          📩 Contact Me
        </a>
      </div>

    </section>
  );
}
