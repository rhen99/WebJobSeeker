import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";
import HirePeople from "./components/HirePeople/HirePeople";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Showcase />
      <HirePeople />
      <Footer />
    </Router>
  );
}

export default App;
