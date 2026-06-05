import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/experience" element={<Experience />} />

        <Route path="/education" element={<Education />} />

        <Route
          path="/certifications"
          element={<Certifications />}
        />

        <Route path="/awards" element={<Awards />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;