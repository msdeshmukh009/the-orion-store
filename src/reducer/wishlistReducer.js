import { wishlistActions } from "./constant";

const { SET_ERROR, INITIALIZE, SET_WISHLIST } = wishlistActions;

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return { ...state, loading: true, error: "" };

    case SET_ERROR:
      return { ...state, loading: false, error: action.payload };

    case SET_WISHLIST:
      return { ...state, loading: false, wishedItems: action.payload };
  }
};
export { wishlistReducer };
