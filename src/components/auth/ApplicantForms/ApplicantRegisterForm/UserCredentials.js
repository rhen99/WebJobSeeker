import React from "react";

function UserCredentials() {
  return (
    <div className="form__container push__footer">
      <div className="form__div">
        <div className="form__progress" style={{ width: "33.3%" }}></div>
        <h1 className="form__title">Sign In Info</h1>
        <form action="#">
          <div className="form__input">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input type="text" className="form__input__field" name="email" />
          </div>
          <div className="form__input">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              type="password"
              className="form__input__field"
              name="password"
            />
          </div>
          <div className="form__input">
            <label htmlFor="confirm__password" className="form__label">
              Re-Enter Password
            </label>
            <input
              type="password"
              className="form__input__field"
              name="confirm_password"
            />
          </div>
          <div className="form__navigation">
            <button className="form__back form__nav__btn">
              <i className="fas fa-angle-left"></i> Back
            </button>
            <button className="form__next btn--primary form__nav__btn">
              Next <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserCredentials;
