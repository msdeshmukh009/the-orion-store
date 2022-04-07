import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { authReducer } from "../reducer";
import { authActions } from "../reducer/constant";
import { signupService, loginService } from "../services";

const { LOGIN_USER, LOGOUT_USER } = authActions;

const authContext = createContext();

const useAuth = () => useContext(authContext);

const initialState = {
  userName: JSON.parse(localStorage.getItem("jwt-orion-store"))?.userName || "",
  email: JSON.parse(localStorage.getItem("jwt-orion-store"))?.email || "",
  token: JSON.parse(localStorage.getItem("jwt-orion-store"))?.token || "",
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  const signup = async (userInput, setLoader, setError) => {
    try {
      setError("");
      setLoader(true);
      const res = await signupService(userInput);

      if (res.status === 201) {
        setLoader(false);

        const {
          encodedToken,
          createdUser: { firstName, email },
        } = res.data;

        localStorage.setItem(
          "jwt-orion-store",
          JSON.stringify({ userName: firstName, token: encodedToken, email: email })
        );

        dispatch({
          type: LOGIN_USER,
          payload: { userName: firstName, token: encodedToken, email: email },
        });
        toast.success(`Hi! ${firstName}`, { icon: "👋" });
        navigate("/");
      }
    } catch (err) {
      setError(err.response.data.errors);
      setLoader(false);
    }
  };

  const login = async (userInput, setLoader, setError, from) => {
    try {
      setError("");
      setLoader(false);
      const res = await loginService(userInput);

      if (res.status === 200) {
        setLoader(false);

        const {
          encodedToken,
          foundUser: { firstName, email },
        } = res.data;

        localStorage.setItem(
          "jwt-orion-store",
          JSON.stringify({ userName: firstName, token: encodedToken, email: email })
        );

        dispatch({
          type: LOGIN_USER,
          payload: { userName: firstName, token: encodedToken, email: email },
        });
        toast.success(`Hi! ${firstName}`, { icon: "👋" });
        navigate(from, { replace: true });
      }
    } catch (err) {
      setError(err.response.data.errors);
      setLoader(false);
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT_USER });
    navigate("/");
    localStorage.removeItem("jwt-orion-store");
    toast.success("User logout");
  };

  return (
    <authContext.Provider value={{ state, dispatch, signup, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export { useAuth, AuthProvider };
