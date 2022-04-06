import "./productListing.css";
import { MultiRangeSlider } from "../../components";
import { useCategory, useFilter, useProducts } from "../../context";
import { filterActions } from "../../reducer/constant";

const { SORT, TOGGLE_OUT_OF_STOCK, ADD_CATEGORY, SET_RATING, CLEAR } = filterActions;

const FilterList = ({ showFilters, setShowFilters }) => {
  const { state, dispatch } = useFilter();
  const { priceRange } = useProducts();
  const { categories } = useCategory();
  const categoryNames = categories.map(category => category.categoryName);

  return (
    <section className={`filters ${showFilters ? "show-filters" : ""}`} id="filters">
      <div className="filter-title">
        <h3 className="filter-title-web">Filters</h3>
        <button
          className="link-btn"
          onClick={() =>
            dispatch({ type: CLEAR, payload: { min: priceRange.min, max: priceRange.max } })
          }
        >
          Clear
        </button>
      </div>

      <ul className="no-style-list styled-list filter-list flex-column">
        <li className="filter-list-item">
          <h3>Price</h3>
          <div>
            <input
              type="radio"
              name="price"
              id="high-to-low"
              checked={state.sort === "high-to-low"}
              onChange={() => dispatch({ type: SORT, payload: "high-to-low" })}
            />
            <label htmlFor="high-to-low">Price-high to low</label>
          </div>
          <div>
            <input
              type="radio"
              name="price"
              id="low-to-high"
              checked={state.sort === "low-to-high"}
              onChange={() => dispatch({ type: SORT, payload: "low-to-high" })}
            />
            <label htmlFor="low-to-high">Price-low to high</label>
          </div>
        </li>

        <li>
          <h3 className="price-range-heading">Select price range</h3>
          <MultiRangeSlider min={priceRange.min} max={priceRange.max} />
        </li>

        <li className="filter-list-item">
          <h3>Categories</h3>
          <div>
            <input
              type="checkbox"
              id="all"
              checked={
                state.category.length === 0 || state.category.length === categoryNames.length
              }
              onChange={() => dispatch({ type: ADD_CATEGORY, payload: "all" })}
            />
            <label htmlFor="all">all</label>
          </div>

          {categoryNames.map(category => {
            return (
              <div key={category}>
                <label>
                  <input
                    type="checkbox"
                    checked={state.category.includes(category)}
                    onChange={() => dispatch({ type: ADD_CATEGORY, payload: category })}
                  />
                  {category}
                </label>
              </div>
            );
          })}
        </li>

        <li className="filter-list-item">
          <h3>Rating</h3>
          {[4, 3, 2, 1].map(rating => (
            <div key={rating}>
              <label>
                <input
                  type="radio"
                  name="rating"
                  checked={state.rating === rating}
                  onChange={() => dispatch({ type: SET_RATING, payload: rating })}
                />
                {rating} stars and above
              </label>
            </div>
          ))}
        </li>

        <li>
          <h3>Other</h3>
          <div>
            <input
              type="checkbox"
              name="include-out-of-stock"
              id="include-out-of-stock"
              checked={state.includeOutOfStock}
              onChange={() => dispatch({ type: TOGGLE_OUT_OF_STOCK })}
            />
            <label htmlFor="include-out-of-stock">Include out of stock</label>
          </div>
        </li>
      </ul>
    </section>
  );
};

export { FilterList };
