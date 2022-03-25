import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { wishlistReducer } from "../reducer/wishlistReducer";
import { useAuth } from "./authContext";

const wishlistContext = createContext();

const useWishlist = () => useContext(wishlistContext);

const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, {
    wishedItems: [],
  });

  const {
    state: { token },
  } = useAuth();

  useEffect(() => {
    token
      ? (async () => {
          try {
            const res = await axios.get("/api/user/wishlist", {
              headers: {
                authorization: token,
              },
            });
            if (res.status === 200) {
              dispatch({ type: "SET_WISHLIST", payload: res.data.wishlist });
            }
          } catch (err) {
            console.log(err);
          }
        })()
      : dispatch({ type: "SET_WISHLIST", payload: [] });
  }, [token]);

  const addToWishlist = async (product, setIsFetching) => {
    try {
      setIsFetching(prevState => ({ ...prevState, wishlist: true }));
      const res = await axios.post(
        "/api/user/wishlist",
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
        dispatch({ type: "SET_WISHLIST", payload: res.data.wishlist });
        setIsFetching(prevState => ({ ...prevState, wishlist: false }));
      }
    } catch (err) {
      console.log(err.message);
      setIsFetching(prevState => ({ ...prevState, wishlist: false }));
    }
  };

  const removeFromWishlist = async productId => {
    try {
      const res = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: token,
        },
      });

      if (res.status === 200) {
        dispatch({ type: "SET_WISHLIST", payload: res.data.wishlist });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <wishlistContext.Provider value={{ state, dispatch, addToWishlist, removeFromWishlist }}>
      {children}
    </wishlistContext.Provider>
  );
};

export { useWishlist, WishlistProvider };
