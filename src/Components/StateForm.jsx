import { useState, useMemo } from "react";
import { validateEmail, validatePassword } from "../validator/formValidators";

export function StateForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  const emailErrors = useMemo(() => {
    return isAfterFirstSubmit ? validateEmail(email) : [];
  }, [isAfterFirstSubmit, email]);

  const passwordErrors = useMemo(() => {
    return isAfterFirstSubmit ? validatePassword(password) : [];
  }, [isAfterFirstSubmit, password]);

  function onSubmit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const emailResults = validateEmail(email);
    const passwordResults = validatePassword(password);

    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert("Success");
    }
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordErrors.length > 0 && (
          <div className="msg">{passwordErrors.join(", ")}</div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
