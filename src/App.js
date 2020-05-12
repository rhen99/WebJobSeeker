import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";
import HirePeople from "./components/HirePeople/HirePeople";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import ApplicantLoginForm from "./components/auth/ApplicantForms/ApplicantLoginForm/ApplicantLoginForm";
import EmployerLoginForm from "./components/auth/EmployerForms/EmployerLoginForm/EmployerLoginForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/employer-login" exact component={EmployerLoginForm} />
        <Route path="/applicant-login" exact component={ApplicantLoginForm} />
        <Route path="/how-it-works" exact component={HowItWorks} />
        <Route path="/about" exact component={About} />
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
