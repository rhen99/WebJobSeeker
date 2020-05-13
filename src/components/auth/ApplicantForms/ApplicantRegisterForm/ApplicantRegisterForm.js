import React, { useState } from "react";
import { useForm } from "../../../../hooks/useForm";
import PersonalInfo from "./PersonalInfo";
import UserCredentials from "./UserCredentials";
import Confirm from "./Confirm";

const formFields = {
  firstname: "",
  lastname: "",
  describe: "",
  email: "",
  password: "",
  confirm_password: "",
};

function ApplicantRegisterForm() {
  const { handleChange, formData } = useForm(formFields);
  const [step, setStep] = useState(1);
  const props = { handleChange, formData, setStep };

  switch (step) {
    case 1:
      return <PersonalInfo {...props} />;
      break;
    case 2:
      return <UserCredentials {...props} />;
      break;

    default:
      return null;
  }
}

export default ApplicantRegisterForm;
