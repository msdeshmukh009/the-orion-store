import { products } from "../../backend/db/products";
import { VerticalCard } from "../../components";
import "./productListing.css";

const ProductsGrid = ({ setFilterStyles }) => {
  const filterButton = () => {
    return (
      <div className="filter-button-div">
        <button className="btn btn-outline-primary filter-button" onClick={() => setFilterStyles("filters show-filters")}>
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
        <main className="main-products">
          {products.map(({ _id, title, image, description, price, discountedPrice }) => (
            <VerticalCard key={_id} title={title} image={image} price={price} description={description} discountedPrice={discountedPrice} />
          ))}
        </main>
      </div>
    </>
  );
};

export { ProductsGrid };
