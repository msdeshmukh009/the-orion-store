import { createContext, useContext, useReducer, useEffect } from "react";
import toast from "react-hot-toast";
import { wishlistReducer } from "../reducer/wishlistReducer";
import { useAuth } from "./authContext";
import { wishlistActions } from "../reducer/constant";
import { getWishlistService, addToWishlistService, removeFromWishlistService } from "../services";

const { INITIALIZE, SET_ERROR, SET_WISHLIST } = wishlistActions;

const wishlistContext = createContext();

const useWishlist = () => useContext(wishlistContext);

const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, {
    loading: false,
    wishedItems: [],
    error: "",
  });

  const {
    state: { token },
  } = useAuth();

  useEffect(() => {
    token
      ? (async () => {
          try {
            dispatch({ type: INITIALIZE });

            const res = await getWishlistService(token);
            if (res.status === 200) {
              dispatch({ type: SET_WISHLIST, payload: res.data.wishlist });
            }
          } catch (err) {
            dispatch({ type: SET_ERROR, payload: err.response.data.errors[0] });
          }
        })()
      : dispatch({ type: SET_WISHLIST, payload: [] });
  }, [token]);

  const addToWishlist = async (product, setIsFetching) => {
    try {
      setIsFetching(prevState => ({ ...prevState, wishlist: true }));
      const res = await addToWishlistService(token, product);

      if (res.status === 201) {
        dispatch({ type: SET_WISHLIST, payload: res.data.wishlist });
        setIsFetching(prevState => ({ ...prevState, wishlist: false }));
        toast.success("Product added in wishlist");
      }
    } catch (err) {
      console.log(err.message);
      setIsFetching(prevState => ({ ...prevState, wishlist: false }));
    }
  };

  const removeFromWishlist = async productId => {
    try {
      const res = await removeFromWishlistService(token, productId);

      if (res.status === 200) {
        dispatch({ type: SET_WISHLIST, payload: res.data.wishlist });
        toast.success("Product removed from wishlist");
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
