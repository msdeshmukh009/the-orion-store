import { cartActions } from "./constant";

const { INITIALIZE, SET_ERROR, SET_CART } = cartActions;

const cartReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return { ...state, loading: true, error: "" };

    case SET_CART:
      return { ...state, loading: false, cartItems: action.payload };

    case SET_ERROR:
      return { ...state, loading: false, error: action.payload };
  }
};
export { cartReducer };
