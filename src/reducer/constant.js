const filterActions = {
  SORT: "SORT",
  TOGGLE_OUT_OF_STOCK: "TOGGLE_OUT_OF_STOCK",
  ADD_CATEGORY: "ADD_CATEGORY",
  SET_RATING: "SET_RATING",
  SET_RANGE: "SET_RANGE",
  SET_MIN: "SET_MIN",
  SET_MAX: "SET_MAX",
  CLEAR: "CLEAR",
  APPLY_SEARCH_TERM: "APPLY_SEARCH_TERM",
};

const authActions = {
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
};

const cartActions = {
  INITIALIZE: "INITIALIZE",
  SET_CART: "SET_CART",
  SET_ERROR: "SET_ERROR",
};
const wishlistActions = {
  INITIALIZE: "INITIALIZE",
  SET_ERROR: "SET_ERROR",
  SET_WISHLIST: "SET_WISHLIST",
};

export { filterActions, authActions, cartActions, wishlistActions };
