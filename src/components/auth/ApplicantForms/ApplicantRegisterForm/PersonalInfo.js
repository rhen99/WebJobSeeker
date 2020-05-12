import React from "react";

function PersonalInfo() {
  return (
    <div className="form__container push__footer">
      <div className="form__div">
        <h1 className="form__title">Personal Info</h1>
        <form action="#" className="form">
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
            value="Next"
            className="btn__next btn--primary"
          />
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
