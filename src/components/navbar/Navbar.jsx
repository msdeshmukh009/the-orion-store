import { Link } from "react-router-dom";
import { useAuth, useCart } from "../../context";
import "./navbar.css";
const Navbar = () => {
  const {
    state: { token },
    logout,
  } = useAuth();
  const {
    state: { cartItems },
  } = useCart();
  return (
    <nav className="nav">
      <header className="nav-header flex-total-center">
        <div className="burger-menu">
          <i className="fas fa-bars"></i>
        </div>
        <Link to="/" className="nav-link">
          <h2 className="nav-heading">Orion</h2>
        </Link>
      </header>

      <div className="nav-search-bar">
        <button className="btn">
          <i className="fas fa-search"></i>
        </button>
        <input className="form-field" type="search" placeholder="search" />
      </div>

      <ul className="inline-style-list no-style-list nav-list flex-total-center ">
        <li>
          <Link className="link-btn" to="/products">
            Shop now
          </Link>
        </li>
        <li>
          <Link to="/cart" className="anchor-tag-badge-container">
            <span className="badge-container">
              <i className="fas fa-shopping-cart"></i>
              <span
                className={
                  token && cartItems.length > 0
                    ? "status-badge number-badge flex-total-center"
                    : "display-none"
                }
              >
                {cartItems.length}
              </span>
            </span>
          </Link>
        </li>

        <li>
          <Link to="/wishlist" className="anchor-tag-badge-container">
            <span className="badge-container">
              <i className="fas fa-heart"></i>
              <span
                className={token ? "status-badge number-badge flex-total-center" : "display-none"}
              >
                0
              </span>
            </span>
          </Link>
        </li>

        {token ? (
          <li>
            <button className="btn btn-outline" onClick={() => logout()}>
              <i className="fas fa-sign-out"></i>
            </button>
          </li>
        ) : (
          <li>
            <Link to="/signin" className="anchor-tag-badge-container ">
              <i className="fas fa-user "></i>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export { Navbar };
