import axios from "axios";

const loginService = userInput => {
  return axios.post("/api/auth/login", userInput);
};

export { loginService };
