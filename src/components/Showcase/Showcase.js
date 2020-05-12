import React from "react";
import { Link } from "react-router-dom";
import "./Showcase.css";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase__inner">
        <h1 className="showcase__title">Seek Your Dreams</h1>
        <p className="showcase__secondary">Web Job Seeker</p>
        <Link className="showcase__action btn--primary" to="/applicant-login">
          Get A Job
        </Link>
        <Link to="/employer-login" className=" showcase__action btn--secondary">
          Post A Job
        </Link>
      </div>
    </div>
  );
};
export default Showcase;
