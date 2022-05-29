const initialState = {
  address: [],
  isLoading: false,
  error: "",
};

const addressReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return { ...state, isLoading: true, error: "" };

    case "SET_ERROR":
      return { ...state, isLoading: false, error: action.payload };

    case "SET_ADDRESS":
      return { ...state, isLoading: false, address: action.payload };

    default:
      return state;
  }
};

export { addressReducer, initialState };
