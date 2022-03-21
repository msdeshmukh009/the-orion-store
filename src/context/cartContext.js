import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducer";
import { useAuth } from "./authContext";

const cartContext = createContext();

const useCart = () => useContext(cartContext);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
  });
  const {
    state: { token },
  } = useAuth();

  useEffect(() => {
    token &&
      (async () => {
        try {
          const res = await axios.get("/api/user/cart", {
            headers: {
              authorization: token,
            },
          });
          if (res.status === 200) {
            dispatch({ type: "SET_CART", payload: res.data.cart });
          }
        } catch (err) {
          console.log(err);
        }
      })();
  }, [token]);

  const addToCart = async (product, setLoader, setError) => {
    try {
      setError("");
      setLoader(true);
      const res = await axios.post(
        "/api/user/cart",
        {
          product,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (res.status === 201) {
        dispatch({ type: "SET_CART", payload: res.data.cart });
        setLoader(false);
      }
    } catch (err) {
      setError(err.response.data.errors);
    }
  };

  const changeQuantity = async (type, productId) => {
    try {
      const res = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: type,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (res.status === 200) {
        dispatch({ type: "SET_CART", payload: res.data.cart });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromCart = async productId => {
    try {
      const res = await axios.delete(
        `/api/user/cart/${productId}`,

        {
          headers: {
            authorization: token,
          },
        }
      );
      if (res.status === 200) {
        dispatch({ type: "SET_CART", payload: res.data.cart });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <cartContext.Provider value={{ state, dispatch, addToCart, changeQuantity, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
};

export { useCart, CartProvider };
