import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">Anish</a>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-buttons">
        <a href="https://www.linkedin.com/in/anish-pathak-018ba631a/" target="_blank"><FaLinkedin className="icon" /></a>
        <a href="https://github.com/pathakanish41" target="_blank"><FaGithub className="icon" /></a>
        <a href="/ANISH-PATHAK-CV.pdf" download className="btn">Download CV</a>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776; {/* hamburger icon */}
      </div>

    </nav>
  );
};

export default Navbar;
