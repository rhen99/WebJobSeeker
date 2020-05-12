import React from "react";
import { Link } from "react-router-dom";
import "../EmployerForms.css";

function EmployerLoginForm() {
  return (
    <div className="form__container push__footer">
      <div className="form__div">
        <h1 className="form__title">Post a job</h1>
        <form action="#">
          <div className="form__input">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input type="text" className="form__input__field" id="email" />
            <span className="form__error"></span>
          </div>
          <div className="form__input">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              type="password"
              className="form__input__field"
              id="password"
            />
            <span className="form__error"></span>
          </div>
          <input
            type="submit"
            value="LOGIN"
            className="btn__submit btn--secondary"
          />
        </form>
        <div className="redirect__register">
          <div className="redirect__register__title__div">
            <h4 className="redirect__register__title">
              You don't have an account?
            </h4>
          </div>
          <Link
            to="/applicant-register"
            className="redirect__employer__register__btn"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmployerLoginForm;
