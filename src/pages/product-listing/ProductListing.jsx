import { ProductsGrid } from "./ProductsGrid";
import { FilterList } from "./FilterList";
import { useState } from "react";

const ProductListing = () => {
  const [filterStyles, setFilterStyles] = useState("filters");

  return (
    <>
      <div className="grid-container">
        <FilterList filterStyles={filterStyles} setFilterStyles={setFilterStyles} />
        <ProductsGrid setFilterStyles={setFilterStyles} />
      </div>
    </>
  );
};

export { ProductListing };
