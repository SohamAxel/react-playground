import React from "react";

function FormInputElement({ type, label, inputRef, error, handleChange }) {
  return (
    <div className={`form-group ${!!error && "error"}`}>
      <label className="label" htmlFor="email">
        {label}
      </label>
      <input
        ref={inputRef}
        className="input"
        type={type}
        id={type}
        onChange={handleChange}
      />
      {!!error && <div className="msg">{error}</div>}
    </div>
  );
}

export default FormInputElement;
