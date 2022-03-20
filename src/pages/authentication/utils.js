const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

const validFormChecker = userInput => {
  const { name, lastName, email, password } = userInput;
  const err = {};
  if (!name) {
    err.name = "Enter valid name";
  }

  if (!lastName) {
    err.lastName = "Enter valid lastname";
  }

  if (!email.match(mailFormat)) {
    err.email = "Enter valid email";
  }

  if (!password) {
    err.password = "Enter valid password";
  }
  if (!password.match(passwordFormat)) {
    err.password = "Too weak!!";
  }

  return err;
};
const validLoginFormChecker = userInput => {
  const { email, password } = userInput;
  const err = {};

  if (!email.match(mailFormat)) {
    err.email = "Enter valid email";
  }

  if (!password) {
    err.password = "Enter valid password";
  }

  return err;
};

export { validFormChecker, validLoginFormChecker };
