import { Link } from "react-router-dom";
import { Input } from "../../components";
import "./authentication.css";

const Signup = () => {
  return (
    <div className="form-container flex-total-center">
      <form className="form-grp">
        <h2 className="text-center text-lg">Signup</h2>

        <Input type="email" label="Email" required={true} />
        <Input type="text" label="Username" required={true} />
        <Input type="password" label="Password" required={true} />
        <Input type="password" label="Confirm password" required={true} />

        <div className="options">
          <input type="checkbox" name="agreement" id="agreement" />
          <label htmlFor="agreement">I agree to all Terms & Conditions</label>
        </div>

        <button className="btn btn-primary btn-submit">Create new account</button>

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
