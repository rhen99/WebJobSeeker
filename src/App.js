import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";
import HirePeople from "./components/HirePeople/HirePeople";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import HowItWorks from "./components/HowItWorks/HowItWorks";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/how-it-works">
          <HowItWorks />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Showcase />
          <HirePeople />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
