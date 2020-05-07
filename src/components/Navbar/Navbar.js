import React from "react";
import "./Navbar.css";
import { Link, Switch, Route } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <h1 className="navbar__logo__h1">WebJobSeeker</h1>
          <a href="#" className="navbar__mobile__btn device--mobile">
            <i className="fas fa-bars"></i>
          </a>
        </div>
        <ul className="navbar__list navbar__list--left">
          <li className="navbar__item">
            <Link className="navbar__link" to="/">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/about">
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/how-it-works">
              How It Works
            </Link>
          </li>
        </ul>
        <ul className="navbar__list navbar__list--right">
          <li className="navbar__item">
            <Link className="navbar__link" to="/register">
              Register
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/login">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
