import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    emailjs.send(
      "service_j0byqo4",
      "template_4pe13xr",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      "CTjSzYjpzLeOK3qks"
    )
    .then((res) => {
      console.log("SUCCESS:", res);

      setLoading(false);
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    })
    .catch((err) => {
      console.log("EMAILJS ERROR:", err);

      setLoading(false);
      setError("Failed to send message. Check EmailJS setup.");
    });
  };

  const styles = {
    section: {
      minHeight: "100vh",
      padding: "100px 8%",
      background: "#0f172a",
      color: "white"
    },

    title: {
      textAlign: "center",
      fontSize: "3rem",
      color: "#38bdf8",
      marginBottom: "50px"
    },

    container: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px"
    },

    card: {
      background: "#1e293b",
      padding: "30px",
      borderRadius: "20px",
      boxShadow: "0 0 20px rgba(56,189,248,.2)"
    },

    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginTop: "20px",
      fontSize: "1rem",
      wordBreak: "break-word"
    },

    social: {
      display: "flex",
      gap: "20px",
      marginTop: "30px",
      flexWrap: "wrap"
    },

    socialIcon: {
      color: "#38bdf8",
      fontSize: "2rem",
      transition: ".3s"
    },

    input: {
      width: "100%",
      padding: "15px",
      marginBottom: "15px",
      borderRadius: "10px",
      border: "none",
      outline: "none",
      background: "#334155",
      color: "white"
    },

    textarea: {
      width: "100%",
      padding: "15px",
      borderRadius: "10px",
      border: "none",
      outline: "none",
      background: "#334155",
      color: "white",
      resize: "none"
    },

    button: {
      width: "100%",
      marginTop: "20px",
      padding: "15px",
      border: "none",
      borderRadius: "10px",
      background: "#38bdf8",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer"
    }
  };

  return (
    <section id="contact" style={styles.section}>

      <style>{`
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr !important;
          }

          .contact-title {
            font-size: 2.2rem !important;
          }

          .contact-card {
            padding: 20px !important;
          }

          .contact-heading {
            font-size: 1.6rem !important;
          }

          .contact-item {
            font-size: 0.95rem !important;
          }

          .social-icon {
            font-size: 1.8rem !important;
          }

          .contact-section {
            padding: 100px 5% !important;
          }
        }

        @media (max-width: 480px) {
          .contact-title {
            font-size: 1.8rem !important;
          }

          .contact-heading {
            font-size: 1.4rem !important;
          }

          .contact-item {
            font-size: 0.9rem !important;
          }

          .social-icon {
            font-size: 1.6rem !important;
          }

          .contact-section {
            padding: 90px 4% !important;
          }
        }
      `}</style>

      <motion.h2
        className="contact-title"
        style={styles.title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Contact Me
      </motion.h2>

      <div
        className="contact-container"
        style={styles.container}
      >

        <motion.div
          className="contact-card"
          style={styles.card}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h3
            className="contact-heading"
            style={{ fontSize: "2rem", marginBottom: "20px" }}
          >
            Let's Connect 🚀
          </h3>

          <p style={{ lineHeight: "1.8" }}>
            Actively seeking opportunities as AI Engineer, Software Engineer,
            Generative AI Engineer, Python Developer, and Full Stack Developer.
          </p>

          <div className="contact-item" style={styles.contactItem}>
            <FaEnvelope color="#38bdf8" />
            <span>muthuraja89109@gmail.com</span>
          </div>

          <div className="contact-item" style={styles.contactItem}>
            <FaPhone color="#38bdf8" />
            <span>+91 9698469871</span>
          </div>

          <div className="contact-item" style={styles.contactItem}>
            <FaMapMarkerAlt color="#38bdf8" />
            <span>Tamil Nadu, India</span>
          </div>

          <div style={styles.social}>
            <a href="https://github.com/Muthuraja18" target="_blank" rel="noreferrer">
              <FaGithub className="social-icon" style={styles.socialIcon} />
            </a>

            <a href="https://www.linkedin.com/in/muthuraja-l-24232830b/" target="_blank" rel="noreferrer">
              <FaLinkedin className="social-icon" style={styles.socialIcon} />
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-card"
          style={styles.card}
          onSubmit={sendEmail}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Tell me about your project or opportunity..."
            style={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" style={styles.button}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p style={{ color: "#22c55e", marginTop: "10px" }}>
              Message sent successfully ✅
            </p>
          )}

          {error && (
            <p style={{ color: "red", marginTop: "10px" }}>
              {error}
            </p>
          )}
        </motion.form>

      </div>

    </section>
  );
}
