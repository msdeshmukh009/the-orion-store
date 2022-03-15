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
        <button className="link-btn" href="#">
          Clear
        </button>
      </div>
      <ul className="no-style-list styled-list filter-list">
        <li className="text-bold">Price</li>
        <li>
          <input type="radio" name="price" id="high-to-low" />
          <label htmlFor="high-to-low">Price-high to low</label>
        </li>
        <li>
          <input type="radio" name="price" id="low-to-high" />
          <label htmlFor="low-to-high">Price-low to high</label>
        </li>
        <hr className="divider-hr" />
        <li className="text-bold">Select price range</li>
        <MultiRangeSlider min="1000" max="10000" />
        <hr className="divider-hr" />
        <li className="text-bold">Categories</li>
        <li>
          <input type="checkbox" name="category" id="" />
          Coffee Mugs
        </li>
        <li>
          <input type="checkbox" name="category" id="" />
          Posters
        </li>
        <li>
          <input type="checkbox" name="category" id="" />
          T-shirts
        </li>
        <li>
          <input type="checkbox" name="category" id="" />
          Accessories
        </li>
        <hr className="divider-hr" />
        <li className="text-bold">Rating</li>
        <li>
          <input type="radio" name="rating" id="" />4 stars and above
        </li>
        <li>
          <input type="radio" name="rating" id="" />3 stars and above
        </li>
        <li>
          <input type="radio" name="rating" id="" />2 stars and above
        </li>
        <li>
          <input type="radio" name="rating" id="" />1 stars and above
        </li>
      </ul>
    </section>
  );
};

export { FilterList };
