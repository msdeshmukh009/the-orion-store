import { createContext, useContext, useReducer, useEffect } from "react";
import toast from "react-hot-toast";
import { cartReducer } from "../reducer";
import { useAuth } from "./authContext";
import { useWishlist } from "./wishlistContext";
import { cartActions } from "../reducer/constant";
import {
  getCartService,
  addToCartService,
  changeQuantityService,
  removeFromCartService,
  clearCartService,
} from "../services";

const cartContext = createContext();

const { INITIALIZE, SET_ERROR, SET_CART } = cartActions;

const useCart = () => useContext(cartContext);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    loading: false,
    cartItems: [],
    error: "",
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
            dispatch({ type: INITIALIZE });

            const res = await getCartService(token);

            if (res.status === 200) {
              dispatch({ type: SET_CART, payload: res.data.cart });
            }
          } catch (err) {
            dispatch({ type: SET_ERROR, payload: err.response.data.error[0] });
          }
        })()
      : dispatch({ type: SET_CART, payload: [] });
  }, [token]);

  const addToCart = async (product, setIsFetching) => {
    try {
      setIsFetching(prevState => ({ ...prevState, cart: true }));
      const res = await addToCartService(token, product);

      if (res.status === 201) {
        dispatch({ type: SET_CART, payload: res.data.cart });
        setIsFetching(prevState => ({ ...prevState, cart: false }));
        toast.success("Product added to cart");
      }
    } catch (err) {
      toast.error("Something went wrong,Please try again");
      setIsFetching(prevState => ({ ...prevState, cart: false }));
    }
  };

  const changeQuantity = async (type, productId, setIsFetching) => {
    try {
      setIsFetching(prevState => ({ ...prevState, counter: true }));
      const res = await changeQuantityService(token, productId, type);

      if (res.status === 200) {
        dispatch({ type: SET_CART, payload: res.data.cart });
        setIsFetching(prevState => ({ ...prevState, counter: false }));
        toast.success("Product quantity updated");
      }
    } catch (err) {
      toast.error("Something went wrong,Please try again");
      setIsFetching(prevState => ({ ...prevState, counter: false }));
    }
  };

  const removeFromCart = async productId => {
    try {
      const res = await removeFromCartService(token, productId);
      if (res.status === 200) {
        dispatch({ type: SET_CART, payload: res.data.cart });
        toast.success("Product removed from cart");
      }
    } catch (err) {
      toast.error("Something went wrong,Please try again");
    }
  };

  const moveItemFromCartToWishlist = (product, setIsFetching) => {
    wishedItems.find(item => item._id === product._id)
      ? toast(<span>Item already present in wishlist</span>, {
          icon: "👌",
        })
      : addToWishlist(product, setIsFetching);

    removeFromCart(product._id);
  };
  const clearCart = async () => {
    try {
      const { status, data } = await clearCartService(token);

      if (status === 201) {
        dispatch({ type: SET_CART, payload: data.cart });
      }
    } catch (err) {
      console.log(err);
    }
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
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export { useCart, CartProvider };
