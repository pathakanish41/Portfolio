import React from "react";
import Navbar from "./components/Navbar"; // you can keep navbar for now
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />   {/* optional, can leave or comment out */}
      <Home />     {/* Home section with background image and text */}
    </div>
  );
}

export default App;
