const validationSignUpForm = (values) => {
  const errors = {};
  const required = 'this field is required';
  const tooShort = 'this field is too short';
  const tooLarge = 'this field is too large';


  if (!values.name) {
    errors.name = required;
  } else if (values.name.length < 3) {
    errors.name = tooShort;
  } else if (values.name.length > 20) {
    errors.name = tooLarge;
  }

  if (!values.email) {
    errors.email = required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid format';
  }

  if (!values.password) {
    errors.password = required;
  } else if (values.password.length < 6) {
    errors.password = tooShort;
  } else if (values.password.length > 15) {
    errors.password = tooLarge;
  }

  if (!values.confirmationPass) {
    errors.confirmationPass = required;
  } else if (values.password !== values.confirmationPass) {
    errors.confirmationPass = 'your passwords dont match';
  }
  return errors;
};

export default validationSignUpForm;
