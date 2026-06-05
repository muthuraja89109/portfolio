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
      fontSize: "1rem"
    },

    social: {
      display: "flex",
      gap: "20px",
      marginTop: "30px"
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

      <motion.h2
        style={styles.title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Contact Me
      </motion.h2>

      <div style={styles.container}>

        {/* LEFT SIDE */}
        <motion.div
          style={styles.card}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >

          <h3 style={{ fontSize: "2rem", marginBottom: "20px" }}>
            Let's Connect 🚀
          </h3>

          <p style={{ lineHeight: "1.8" }}>
            Actively seeking opportunities as AI Engineer, Software Engineer,
            Generative AI Engineer, Python Developer, and Full Stack Developer.
          </p>

          <div style={styles.contactItem}>
            <FaEnvelope color="#38bdf8" />
            <span>muthuraja89109@gmail.com</span>
          </div>

          <div style={styles.contactItem}>
            <FaPhone color="#38bdf8" />
            <span>+91 9698469871</span>
          </div>

          <div style={styles.contactItem}>
            <FaMapMarkerAlt color="#38bdf8" />
            <span>Tamil Nadu, India</span>
          </div>

          <div style={styles.social}>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub style={styles.socialIcon} />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin style={styles.socialIcon} />
            </a>
          </div>

        </motion.div>

        {/* FORM */}
        <motion.form
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