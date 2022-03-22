const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "SET_WISHLIST":
      return { ...state, wishedItems: action.payload };
  }
};
export { wishlistReducer };
