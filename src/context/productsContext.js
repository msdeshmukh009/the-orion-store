import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { minMaxReduce } from "../utils";
import { getProductsService } from "../services";

const categoryContext = createContext();

const useProducts = () => useContext(categoryContext);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const priceRange = products.reduce(minMaxReduce, {
    min: products[0]?.discountedPrice,
    max: products[0]?.discountedPrice,
  });

  useEffect(() => {
    (async () => {
      try {
        setError("");
        setLoader(true);
        const res = await getProductsService();
        if (res.status === 200) {
          setProducts(res.data.products);
          setLoader(false);
        }
      } catch (err) {
        setError(err.message);
        setLoader(false);
      }
    })();
  }, []);
  return (
    <categoryContext.Provider value={{ products, priceRange, loader, error }}>
      {children}
    </categoryContext.Provider>
  );
};

export { ProductsProvider, useProducts };
