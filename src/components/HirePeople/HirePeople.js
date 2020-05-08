import React from "react";
import { Link } from "react-router-dom";
import "./HirePeople.css";

function HirePeople() {
  return (
    <div className="hire__people">
      <div className="container">
        <h1 className="hire__title">Top Paying Jobs</h1>
        <div className="hire__people__grid">
          <div className="hire__people__job">
            <h1 className="job__title">Software Developer</h1>
            <p className="job__company__name">Satterfield, O'Hara and Hayes</p>
            <p className="job__paying__details">
              <p className="job__salary">$50,000 a year</p>
              <span className="job__type">Full time</span>
            </p>
            <Link className="job__view__btn btn--primary">View Job</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HirePeople;
