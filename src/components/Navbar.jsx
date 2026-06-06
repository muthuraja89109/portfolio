import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">
        Muthuraja L
      </h2>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>

        <li>
          <Link to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="/experience" onClick={() => setMenuOpen(false)}>
            Experience
          </Link>
        </li>

        <li>
          <Link to="/education" onClick={() => setMenuOpen(false)}>
            Education
          </Link>
        </li>

        <li>
          <Link to="/certifications" onClick={() => setMenuOpen(false)}>
            Certificates
          </Link>
        </li>

        <li>
          <Link to="/awards" onClick={() => setMenuOpen(false)}>
            Awards
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>

      </ul>

    </nav>
  );
}
