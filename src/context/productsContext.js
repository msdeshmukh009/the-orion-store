import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

const categoryContext = createContext();

const useProducts = () => useContext(categoryContext);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setError("");
        setLoader(true);
        const res = await axios.get("/api/products");
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
    <categoryContext.Provider value={{ products, loader, error }}>
      {children}
    </categoryContext.Provider>
  );
};

export { ProductsProvider, useProducts };
