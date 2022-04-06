import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useCart, useFilter, useProducts, useWishlist } from "../../context";
import { filterActions } from "../../reducer/constant";

const { APPLY_SEARCH_TERM, CLEAR } = filterActions;

import "./navbar.css";
const Navbar = ({ navAside, setNavAside }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    state: { token },
    logout,
  } = useAuth();

  const {
    state: { cartItems },
  } = useCart();

  const {
    state: { wishedItems },
  } = useWishlist();

  const {
    state: { appliedSearchTerm },
    dispatch: filterDispatch,
  } = useFilter();

  const { priceRange } = useProducts();

  const handleSearchInput = e => {
    if (pathname !== "/products") {
      navigate("/products");
    }
    filterDispatch({ type: CLEAR, payload: { min: priceRange?.min, max: priceRange?.max } });
    filterDispatch({ type: APPLY_SEARCH_TERM, payload: e.target.value });
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav">
        <header className="nav-header flex-total-center">
          <div className="burger-menu">
            <button className="btn btn-outline">
              <i className="fas fa-bars" onClick={() => setNavAside(prevState => !prevState)}></i>
            </button>
          </div>
          <Link to="/" className="nav-link">
            <h2 className="nav-heading">Orion</h2>
          </Link>
        </header>

        <div className="nav-search-bar">
          <input
            className="form-field"
            type="search"
            placeholder="search"
            value={appliedSearchTerm}
            onChange={e => handleSearchInput(e)}
          />
        </div>

        <ul className="inline-style-list no-style-list nav-list flex-total-center ">
          <li className="nav-list-web-item">
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
                  className={
                    token && wishedItems.length > 0
                      ? "status-badge number-badge flex-total-center"
                      : "display-none"
                  }
                >
                  {wishedItems.length}
                </span>
              </span>
            </Link>
          </li>

          {token ? (
            <li className="nav-list-web-item">
              <button className="btn btn-outline" onClick={() => logout()}>
                <i className="fas fa-sign-out"></i>
              </button>
            </li>
          ) : (
            <li className="nav-list-web-item">
              <Link to="/signin" className="anchor-tag-badge-container ">
                <i className="fas fa-user "></i>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="nav-search-bar mobile-search-bar">
        <input
          className="form-field"
          type="search"
          placeholder="search"
          value={appliedSearchTerm}
          onChange={e => handleSearchInput(e)}
        />
      </div>
    </nav>
  );
};

export { Navbar };
