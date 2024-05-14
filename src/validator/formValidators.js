const validatePassword = (value) => {
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
};

const validateEmail = (value) => {
  if (value === "") {
    return "Required (Cannot be blank)";
  }

  if (!/\@webdevsimplified.com$/.test(value)) {
    return "Must end in @webdevsimplified.com";
  }

  return false;
};

export { validateEmail, validatePassword };
