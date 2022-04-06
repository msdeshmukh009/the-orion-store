import { filterReducer } from "../reducer";
import { createContext, useContext, useReducer, useEffect } from "react";
import { useProducts } from "./productsContext";

const filterContext = createContext();

const useFilter = () => useContext(filterContext);

const FilterProvider = ({ children }) => {
  const { priceRange } = useProducts();
  const [state, dispatch] = useReducer(filterReducer, {
    sort: "",
    includeOutOfStock: false,
    includeSlowDelivery: true,
    category: [],
    rating: 1,
    range: { min: 0, max: 0 },
    appliedSearchTerm: "",
  });

  useEffect(() => {
    priceRange.min &&
      priceRange.max &&
      dispatch({ type: "SET_RANGE", payload: { min: priceRange?.min, max: priceRange?.max } });
  }, [priceRange.min, priceRange.max]);

  return <filterContext.Provider value={{ state, dispatch }}>{children}</filterContext.Provider>;
};

export { useFilter, FilterProvider };
