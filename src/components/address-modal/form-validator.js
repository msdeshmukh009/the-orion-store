const validFormChecker = userInput => {
  const { name, mobile, zipCode, street, state, country } = userInput;
  const err = {};
  if (!name) {
    err.name = "Enter valid name";
  }

  if (!street) {
    err.street = "Enter valid street";
  }

  if (!state) {
    err.state = "Enter valid state";
  }

  if (!country) {
    err.country = "Enter valid country";
  }

  if (isNaN(parseFloat(mobile))) {
    err.mobile = "Only numbers are allowed";
  } else if (!(mobile.length === 10)) {
    err.mobile = "Enter a valid 10 digit mobile number";
  }

  if (isNaN(parseFloat(zipCode))) {
    err.zipCode = "Only numbers are allowed";
  } else if (!(zipCode.length === 6)) {
    err.zipCode = "Enter a valid 6 digit zip-code";
  }

  return err;
};
export { validFormChecker };
