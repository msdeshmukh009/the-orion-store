import { authActions } from "./constant";

const { LOGIN_USER, LOGOUT_USER } = authActions;

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userName: action.payload.userName,
        token: action.payload.token,
        email: action.payload.email,
      };

    case LOGOUT_USER:
      return { ...state, userName: "", token: "" };

    default:
      throw new Error(`${action.type} is not available`);
  }
};
export { authReducer };
