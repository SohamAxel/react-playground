import { useRef, useState } from "react";
import FormInputElement from "./FormInputElement";
import { validateEmail, validatePassword } from "../validator/formValidators";

function FormValidationProject() {
  const emailRef = useRef("");
  const passRef = useRef("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const passErrorValue = validatePassword(passRef.current.value);
    const emailErrorValue = validateEmail(emailRef.current.value);

    setPassError(passErrorValue);
    setEmailError(emailErrorValue);
    setHasSubmitted(true);

    if (!passErrorValue && !emailErrorValue) {
      alert("Success");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <FormInputElement
        inputRef={emailRef}
        type="email"
        label="Email"
        error={emailError}
        handleChange={
          hasSubmitted
            ? (e) => {
                setEmailError(validateEmail(e.target.value));
              }
            : null
        }
      />
      <FormInputElement
        inputRef={passRef}
        type="password"
        label="Password"
        error={passError}
        handleChange={
          hasSubmitted
            ? (e) => {
                setPassError(validatePassword(e.target.value));
              }
            : null
        }
      />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default FormValidationProject;
