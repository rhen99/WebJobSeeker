import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    setSticky(
      document.body.scrollTop > 70 || document.documentElement.scrollTop > 70
    );
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const toggleIsOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className={isSticky ? "navbar sticky" : "navbar"}>
      <div className="container navbar__container">
        <div className="navbar__logo">
          <h1 className="navbar__logo__h1">WebJobSeeker</h1>
          <a href="#" className="navbar__mobile__btn" onClick={toggleIsOpen}>
            <i className="fas fa-bars"></i>
          </a>
        </div>
        <ul
          className={
            isOpen
              ? "navbar__list navbar__list--left navbar__list--opened"
              : "navbar__list navbar__list--left"
          }
        >
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
        <ul
          className={
            isOpen
              ? "navbar__list navbar__list--right navbar__list--opened"
              : "navbar__list navbar__list--right"
          }
        >
          <li className="navbar__item">
            <Link className="navbar__auth btn--primary" to="/applicant-login">
              Get a Job
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__auth btn--secondary" to="/employer-login">
              Post a Job
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
