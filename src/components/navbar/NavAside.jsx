import { Link } from "react-router-dom";
import { useAuth } from "../../context";

const NavAside = ({ navAside, setNavAside }) => {
  const {
    state: { token },
    logout,
  } = useAuth();
  return (
    <>
      <div
        className={`nav-aside-background ${navAside ? "show-nav-background" : ""}`}
        onClick={() => setNavAside(prevState => !prevState)}
      ></div>
      <div className={`nav-aside ${navAside ? "show-nav-aside" : ""}`}>
        <div className="nav-aside-head">
          <div className="nav-aside-user">
            <i className="fas fa-user"></i>
          </div>
          <i className="fas fa-times" onClick={() => setNavAside(prevStatus => !prevStatus)}></i>
        </div>
        <ul className="nav-aside-list no-style-list styled-list">
          <li>
            <Link to="/" className="nav-aside-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-aside-link">
              Shop Now
            </Link>
          </li>
          {!token ? (
            <>
              <li>
                <Link to="/signin" className="nav-aside-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="nav-aside-link">
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <li onClick={() => logout()}>Logout</li>
          )}
        </ul>
      </div>
    </>
  );
};

export { NavAside };
