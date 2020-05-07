import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Showcase } from "./components/Showcase/Showcase";

function App() {
  return (
    <Router>
      <Navbar />
      <Showcase />
    </Router>
  );
}

export default App;
