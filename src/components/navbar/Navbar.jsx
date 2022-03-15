import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <header className="nav-header flex-total-center">
        <div className="burger-menu">
          <i className="fas fa-bars"></i>
        </div>
        <h2>Orion Store</h2>
      </header>

      <div className="nav-search-bar">
        <button className="btn">
          <i className="fas fa-search"></i>
        </button>
        <input className="form-field" type="search" placeholder="search" />
      </div>

      <ul className="inline-style-list no-style-list nav-list flex-total-center">
        <li>
          <a className="anchor-tag-badge-container">
            <span className="badge-container">
              <i className="fas fa-shopping-cart"></i>
              <span className="status-badge number-badge flex-total-center">3</span>
            </span>
          </a>
        </li>

        <li>
          <a className="anchor-tag-badge-container" href="example.com">
            <span className="badge-container">
              <i className="fas fa-heart"></i>
              <span className="status-badge number-badge flex-total-center">3</span>
            </span>
          </a>
        </li>

        <li>
          <a className="anchor-tag-badge-container" href="/pages/profile/profile.html">
            <i className="fas fa-user "></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
