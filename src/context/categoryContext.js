import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "./filterContext";
import { useProducts } from "./productsContext";
import { getCategoriesService } from "../services";

const categoryContext = createContext();

const useCategory = () => useContext(categoryContext);

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { dispatch: filterDispatch } = useFilter();
  const { priceRange } = useProducts();

  useEffect(() => {
    (async () => {
      try {
        setError("");
        setLoader(true);
        const res = await getCategoriesService();
        if (res.status === 200) {
          setCategories(res.data.categories);
          setLoader(false);
        }
      } catch (err) {
        setError(err.message);
        setLoader(false);
      }
    })();
  }, []);

  const navigateToCategory = category => {
    filterDispatch({ type: "CLEAR", payload: { min: priceRange.min, max: priceRange.max } });
    filterDispatch({ type: "ADD_CATEGORY", payload: category });
    navigate("/products");
  };

  return (
    <categoryContext.Provider value={{ categories, loader, error, navigateToCategory }}>
      {children}
    </categoryContext.Provider>
  );
};

export { CategoryProvider, useCategory };
