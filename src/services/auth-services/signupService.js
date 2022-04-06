import axios from "axios";

const signupService = userInput => {
  return axios.post("/api/auth/signup", userInput);
};

export { signupService };
