import React from "react";

function PersonalInfo({ formData, handleChange, setStep }) {
  const next = (e) => {
    e.preventDefault();
    setStep((step) => step + 1);
  };
  return (
    <div className="form__container push__footer">
      <div className="form__div">
        <div className="form__progress"></div>
        <h1 className="form__title">Personal Info</h1>
        <form action="#">
          <div className="form__inline__inputs">
            <div className="form__input">
              <label htmlFor="firstname" className="form__label">
                First Name
              </label>
              <input
                type="text"
                className="form__input__field"
                id="firstname"
                name="firstname"
                onChange={handleChange}
                value={formData.firstname}
              />
              <span className="form__error"></span>
            </div>
            <div className="form__input">
              <label htmlFor="lastname" className="form__label">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                className="form__input__field"
                id="lastname"
                onChange={handleChange}
                value={formData.lastname}
              />
              <span className="form__error"></span>
            </div>
          </div>
          <div className="form__input">
            <label htmlFor="describe" className="form__label">
              Describe Yourself
            </label>
            <textarea
              id="describe"
              name="describe"
              className="form__input__field"
              value={formData.describe}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form__navigation">
            <button
              className="form__next btn--primary form__nav__btn"
              onClick={next}
            >
              Next <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
