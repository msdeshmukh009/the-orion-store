import { MultiRangeSlider } from "../../components";
import "./productListing.css";
const FilterList = ({ filterStyles, setFilterStyles }) => {
  return (
    <section className={filterStyles} id="filters">
      <button className="filter-close-btn" onClick={() => setFilterStyles("filters")}>
        <span className="btn-icon">
          <i className="fas fa-times"></i>
        </span>
      </button>

      <div className="filter-title">
        <h3>Filters</h3>
        <button className="link-btn">Clear</button>
      </div>

      <ul className="no-style-list styled-list filter-list flex-column">
        <li className="filter-list-item">
          <h3>Price</h3>
          <div>
            <input type="radio" name="price" id="high-to-low" />
            <label htmlFor="high-to-low">Price-high to low</label>
          </div>
          <div>
            <input type="radio" name="price" id="low-to-high" />
            <label htmlFor="low-to-high">Price-low to high</label>
          </div>
        </li>

        <li>
          <h3 className="price-range-heading">Select price range</h3>
          <MultiRangeSlider min="1000" max="10000" />
        </li>

        <li className="filter-list-item">
          <h3>Categories</h3>
          <div>
            <input type="checkbox" name="category" id="coffee-mugs" />
            <label htmlFor="coffee-mugs">Coffee Mugs</label>
          </div>
          <div>
            <input type="checkbox" name="category" id="posters" />
            <label htmlFor="posters">Posters</label>
          </div>
          <div>
            <input type="checkbox" name="category" id="t-shirts" />
            <label htmlFor="t-shirts">T-shirts</label>
          </div>
          <div>
            <input type="checkbox" name="category" id="accessories" />
            <label htmlFor="accessories">Accessories</label>
          </div>
        </li>

        <li className="filter-list-item">
          <h3>Rating</h3>
          <div>
            <input type="radio" name="rating" id="4-star" />
            <label htmlFor="4-star">4 stars and above</label>
          </div>
          <div>
            <input type="radio" name="rating" id="3-stars" />
            <label htmlFor="3-stars">3 stars and above</label>
          </div>
          <div>
            <input type="radio" name="rating" id="2-stars" />
            <label htmlFor="2-stars">2 stars and above</label>
          </div>
          <div>
            <input type="radio" name="rating" id="1-stars" />
            <label htmlFor="1-stars">1 stars and above</label>
          </div>
        </li>

        <li>
          <h3>Other</h3>
          <div>
            <input type="checkbox" name="include-out-of-stock" id="include-out-of-stock" />
            <label htmlFor="include-out-of-stock">Include out of stock</label>
          </div>
        </li>
      </ul>
    </section>
  );
};

export { FilterList };
