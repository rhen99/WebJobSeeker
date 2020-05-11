import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <div className="howitworks push__footer">
      <div className="container">
        <h1 className="howitworks__title">How It Works</h1>
        <div className="howitworks__section">
          <h2 className="howitworks__section__title">If You Are Applying</h2>
          <p className="howitworks__section__text">
            First you need to click the green button that says Get A Job. That
            will take you to a form, where you need to register to have an
            account. After you fill out all the necessary inputs, click the Sign
            Up button. You will be logged in to your dashboard, and from there
            you can start applying for jobs.
          </p>
        </div>
        <div className="howitworks__section">
          <h2 className="howitworks__section__title">If You Are Hiring</h2>
          <p className="howitworks__section__text">
            If you want to Post A Job click the orange button, that says Post A
            Job. You will also be taken to a form to register. After that you
            will also be logged in, and taken to your dashboard where you'll see
            the jobs that you have posted. If someone applied for a position the
            application will be sent to you via email.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
