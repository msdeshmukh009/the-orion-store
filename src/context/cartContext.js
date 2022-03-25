import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducer";
import { useAuth } from "./authContext";
import { useWishlist } from "./wishlistContext";

const cartContext = createContext();

const useCart = () => useContext(cartContext);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
  });
  const {
    state: { token },
  } = useAuth();

  const {
    state: { wishedItems },
    addToWishlist,
  } = useWishlist();

  useEffect(() => {
    token
      ? (async () => {
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
        })()
      : dispatch({ type: "SET_CART", payload: [] });
  }, [token]);

  const addToCart = async (product, setIsFetching) => {
    try {
      setIsFetching(prevState => ({ ...prevState, cart: true }));
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
        setIsFetching(prevState => ({ ...prevState, cart: false }));
      }
    } catch (err) {
      console.log(err.message);
      setIsFetching(prevState => ({ ...prevState, cart: false }));
    }
  };

  const changeQuantity = async (type, productId, setIsFetching) => {
    try {
      setIsFetching(prevState => ({ ...prevState, counter: true }));
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
        setIsFetching(prevState => ({ ...prevState, counter: false }));
      }
    } catch (err) {
      console.log(err.message);
      setIsFetching(prevState => ({ ...prevState, counter: false }));
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

  const moveItemFromCartToWishlist = (product, setIsFetching) => {
    wishedItems.find(item => item._id === product._id)
      ? null
      : addToWishlist(product, setIsFetching);

    removeFromCart(product._id);
  };

  return (
    <cartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        changeQuantity,
        removeFromCart,
        moveItemFromCartToWishlist,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export { useCart, CartProvider };
