import { Loading, VerticalCard } from "../../components";
import "./productListing.css";
import { useFilter, useProducts } from "../../context";
import { filterProducts, sortProducts } from "../../utils";

const ProductsGrid = ({ setFilterStyles }) => {
  const { state } = useFilter();
  const { products, loader, error } = useProducts();

  const sortedList = sortProducts(state.sort, products);
  const filteredList = filterProducts(state, sortedList);

  const filterButton = () => {
    return (
      <div className="filter-button-div">
        <button
          className="btn btn-outline-primary filter-button"
          onClick={() => setFilterStyles("filters show-filters")}
        >
          <span className="btn-icon">
            <i className="fas fa-sliders-h"></i>
          </span>
          Filters
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="products">
        {filterButton()}
        {loader && <Loading />}
        {error && <div>{error}</div>}
        <main className="main-products">
          {filteredList.map(product => (
            <VerticalCard key={product._id} product={product} />
          ))}
        </main>
      </div>
    </>
  );
};

export { ProductsGrid };
