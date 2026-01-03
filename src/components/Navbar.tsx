import React from "react";
import "../styles/Navbar.css";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // install react-icons if not already

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="#home">Ashberg</a>
      </div>

      {/* Navigation links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right side buttons */}
      <div className="nav-buttons">
        <a href="https://www.linkedin.com/in/anish-pathak-018ba631a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/pathakanish41" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="/ANISH-PATHAK-CV.pdf" download className="btn">Download CV</a>
      </div>
    </nav>
  );
};

export default Navbar;
