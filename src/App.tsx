import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* Temporary sections for testing scroll */}
      <div id="home">Home Section</div>
      <div id="about">About Section</div>
      <div id="projects">Projects Section</div>
      <div id="contact">Contact Section</div>
    </div>
  );
}

export default App;
