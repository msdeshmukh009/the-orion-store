import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input, Loading, OverlayContainer } from "../../components";
import "./authentication.css";
import { useAuth } from "../../context";
import { validFormChecker, changeHandler } from "./utils";

const Signup = () => {
  const { signup } = useAuth();
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [userInput, setUserInput] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const changeHandler = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  useEffect(() => {
    setFormErrors(() => validFormChecker(userInput));
  }, [userInput, submitted]);

  const formSubmitHandler = e => {
    e.preventDefault();
    setSubmitted(true);
    if (!(Object.values(formErrors).length > 0)) {
      signup(userInput, setLoader, setError);
      setFormErrors({});
    }
  };

  return (
    <div className="form-container flex-total-center">
      <form className="form-grp">
        <h2 className="text-center text-lg">Signup</h2>

        <OverlayContainer display={loader}>
          <Loading />
        </OverlayContainer>

        {error && <p className="text-danger text-center">{error}</p>}

        <Input
          type="text"
          defaultValue={userInput.name}
          name="name"
          label="Name"
          helperText={formErrors.name}
          showError={submitted}
          required={true}
          changeHandler={changeHandler}
        />
        <Input
          type="text"
          defaultValue={userInput.lastName}
          name="lastName"
          label="Lastname"
          helperText={formErrors.lastName}
          showError={submitted}
          required={true}
          changeHandler={changeHandler}
        />
        <Input
          type="email"
          defaultValue={userInput.email}
          name="email"
          label="Email"
          helperText={formErrors.email}
          showError={submitted}
          required={true}
          changeHandler={changeHandler}
        />
        <Input
          type="password"
          defaultValue={userInput.password}
          name="password"
          label="Password"
          helperText={formErrors.password}
          showError={submitted}
          required={true}
          changeHandler={changeHandler}
        />

        <div className="options">
          <input type="checkbox" name="agreement" id="agreement" />
          <label htmlFor="agreement">I agree to all Terms & Conditions</label>
        </div>

        <button className="btn btn-primary btn-submit" onClick={e => formSubmitHandler(e)}>
          Create new account
        </button>

        <div className="redirect-link text-center">
          <Link className="link-btn" to="/signin">
            Already have an account<i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </form>
    </div>
  );
};

export { Signup };
