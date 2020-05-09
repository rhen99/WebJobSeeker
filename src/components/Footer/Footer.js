import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__links">
          <div className="footer__lists">
            <ul className="footer__list">
              <li className="footer__list__item">
                <Link to="#" className="footer__list__link">
                  Home
                </Link>
              </li>
              <li className="footer__list__item">
                <Link to="#" className="footer__list__link">
                  About
                </Link>
              </li>
              <li className="footer__list__item">
                <Link to="#" className="footer__list__link">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__social__media">
            <a href="#" className="footer__social__media__link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="footer__social__media__link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="footer__social__media__link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
