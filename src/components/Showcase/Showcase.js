import React from "react";
import { Link } from "react-router-dom";
import "./Showcase.css";

export const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase__inner">
        <h1 className="showcase__title">Seek Your Dreams</h1>
        <p className="showcase__secondary">Web Job Seeker</p>
        <Link to="/register">Post A Job</Link>
        <Link to="/register">Get A Job</Link>
      </div>
    </div>
  );
};
