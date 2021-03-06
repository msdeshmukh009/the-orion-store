import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input, Loading, OverlayContainer } from "../../components";
import { useAuth } from "../../context";
import "./authentication.css";
import { validLoginFormChecker } from "./utils";
import { PasswordInput } from "../../components/input/PasswordInput";

const Signin = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { login } = useAuth();
  let location = useLocation();
  const from = location.state?.from.pathname || "/";

  const changeHandler = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    setSubmitted(true);

    if (!(Object.values(formErrors).length > 0)) {
      login(userInput, setLoader, setError, from);
      setFormErrors({});
    }
  };

  const loginWithGuest = e => {
    e.preventDefault();
    setSubmitted(true);
    setUserInput({
      email: "jonathan@gmail.com",
      password: "Jojo@999",
    });
    login({ email: "jonathan@gmail.com", password: "Jojo@999" }, setLoader, setError, from);
  };

  useEffect(() => {
    setFormErrors(() => validLoginFormChecker(userInput));
  }, [userInput, submitted]);

  return (
    <div className="form-container flex-total-center">
      <form className="form-grp">
        <h2 className="text-center text-lg">Signin</h2>
        <OverlayContainer display={loader}>
          <Loading />
        </OverlayContainer>

        {error && <p className="text-danger text-center">{error}</p>}

        <Input
          type="Email"
          required={true}
          label="Email"
          name="email"
          defaultValue={userInput.email}
          changeHandler={changeHandler}
          showError={submitted}
          helperText={formErrors.email}
        />

        <PasswordInput
          required={true}
          label="Password"
          name="password"
          defaultValue={userInput.password}
          changeHandler={changeHandler}
          showError={submitted}
          helperText={formErrors.password}
        />

        <div className="options">
          <input type="checkbox" name="remember me" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>

          <a className="link-btn" href="/">
            Forgot your password?
          </a>
        </div>

        <button className="btn btn-primary btn-submit" onClick={e => formSubmitHandler(e)}>
          Login
        </button>
        <button className="btn btn-outline btn-submit" onClick={e => loginWithGuest(e)}>
          Login with test credentials
        </button>

        <div className="redirect-link text-center">
          <Link className="link-btn" to="/signup">
            Create new account<i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </form>
    </div>
  );
};

export { Signin };
