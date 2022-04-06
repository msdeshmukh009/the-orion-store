import { Loading, VerticalCard } from "../../components";
import "./productListing.css";
import { useFilter, useProducts } from "../../context";
import { filterProducts, sortProducts, handleSearch } from "../../utils";

const ProductsGrid = ({ showFilters, setShowFilters }) => {
  const { state } = useFilter();
  const { products, loader, error } = useProducts();

  const sortedList = sortProducts(state.sort, products);
  const filteredList = filterProducts(state, sortedList);
  const finalList = handleSearch(filteredList, state.appliedSearchTerm);

  const filterButton = () => {
    return (
      <div className="filter-button-div">
        {!showFilters ? (
          <button className="btn btn-outline filter-button" onClick={() => setShowFilters(true)}>
            <span className="btn-icon">
              <i className="fas fa-sliders-h"></i>
            </span>
            Filters
          </button>
        ) : (
          <button className="btn btn-outline filter-button" onClick={() => setShowFilters(false)}>
            <span className="btn-icon"></span>
            Apply
          </button>
        )}
      </div>
    );
  };
  return (
    <>
      <div className="products">
        {filterButton()}
        {loader && <Loading />}
        {error && <div>{error}</div>}
        {finalList.length ? (
          <main className="main-products">
            {finalList.map(product => (
              <VerticalCard key={product._id} product={product} />
            ))}
          </main>
        ) : (
          !loader && <p className="text-center">No products found</p>
        )}
      </div>
    </>
  );
};

export { ProductsGrid };
