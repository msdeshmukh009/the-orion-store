import { ProductsGrid } from "./ProductsGrid";
import { FilterList } from "./FilterList";
import { useState } from "react";

const ProductListing = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <div className="grid-container">
        <FilterList showFilters={showFilters} setShowFilters={setShowFilters} />
        <ProductsGrid showFilters={showFilters} setShowFilters={setShowFilters} />
      </div>
    </>
  );
};

export { ProductListing };
