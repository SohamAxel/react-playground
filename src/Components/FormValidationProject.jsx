import { useCallback, useEffect, useRef, useState } from "react";
import FormInputElement from "./FormInputElement";

function FormValidationProject() {
  const emailRef = useRef("");
  const passRef = useRef("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const validatePassword = useCallback(() => {
    const value = passRef.current.value;

    if (value === "") {
      return "Required (Cannot be blank)";
    }

    if (value.length < 10) {
      return "Must Be 10 characters or Longer";
    }

    if (!/[a-z]/.test(value)) {
      return "Must include a lowercase letter";
    }
    if (!/[A-Z]/.test(value)) {
      return "Must include a uppercase letter";
    }
    if (!/[0-9]/.test(value)) {
      return "Must include a number";
    }

    return false;
  }, [passRef]);

  const validateEmail = useCallback(() => {
    const value = emailRef.current.value;

    if (value === "") {
      return "Required (Cannot be blank)";
    }

    if (!/\@webdevsimplified.com$/.test(value)) {
      return "Must end in @webdevsimplified.com";
    }

    return false;
  }, [emailRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassError(validatePassword());
    setEmailError(validateEmail());
    setHasSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <FormInputElement
        inputRef={emailRef}
        type="email"
        label="Email"
        error={emailError}
        handleChange={hasSubmitted ? handleSubmit : null}
      />
      <FormInputElement
        inputRef={passRef}
        type="password"
        label="Password"
        error={passError}
        handleChange={hasSubmitted ? handleSubmit : null}
      />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default FormValidationProject;
