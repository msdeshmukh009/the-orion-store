import { filterActions } from "./constant";
const {
  SORT,
  TOGGLE_OUT_OF_STOCK,
  ADD_CATEGORY,
  SET_RATING,
  SET_RANGE,
  SET_MIN,
  SET_MAX,
  CLEAR,
  APPLY_SEARCH_TERM,
} = filterActions;
const filterReducer = (state, action) => {
  switch (action.type) {
    case SORT:
      return { ...state, sort: action.payload };

    case TOGGLE_OUT_OF_STOCK:
      return { ...state, includeOutOfStock: !state.includeOutOfStock };

    case ADD_CATEGORY:
      if (action.payload === "all") return { ...state, category: [] };
      const isCategoryExist = state.category.includes(action.payload);
      return isCategoryExist
        ? {
            ...state,
            category: state.category.filter(item => item !== action.payload),
          }
        : { ...state, category: [...state.category, action.payload] };

    case SET_RATING:
      return { ...state, rating: action.payload };

    case SET_RANGE:
      return {
        ...state,
        range: {
          min: action.payload.min,
          max: action.payload.max,
        },
      };

    case SET_MIN:
      return {
        ...state,
        range: { ...state.range, min: action.payload },
      };

    case SET_MAX:
      return {
        ...state,
        range: { ...state.range, max: action.payload },
      };
    case APPLY_SEARCH_TERM:
      return {
        ...state,
        appliedSearchTerm: action.payload,
      };
    case CLEAR:
      return {
        ...state,
        sort: "",
        includeOutOfStock: false,
        includeSlowDelivery: true,
        category: [],
        rating: 1,
        range: { min: action.payload.min, max: action.payload.max },
      };
    default:
      return state;
  }
};
export { filterReducer };
