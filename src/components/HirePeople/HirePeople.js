import React from "react";
import { Link } from "react-router-dom";
import "./HirePeople.css";

function HirePeople() {
  return (
    <div className="hire__people push__footer">
      <div className="container">
        <h1 className="hire__title">Top Paying Jobs</h1>
        <div className="hire__people__grid">
          {/* <div className="hire__people__job">
            <h1 className="job__title">Software Developer</h1>
            <div className="job__details">
              <p className="job__company__name">
                <span className="job__detail__label">Company</span>:
                Satterfield, O'Hara and Hayes
              </p>
              <p className="salary__details">
                <span className="job__detail__label">Salary</span>: $50,000
                yearly
              </p>
            </div>
            <Link to="#" className="job__view__btn btn--primary">
              View Job
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HirePeople;
