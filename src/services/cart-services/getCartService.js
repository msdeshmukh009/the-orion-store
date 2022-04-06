import axios from "axios";

const getCartService = token => {
  return axios.get("/api/user/cart", {
    headers: {
      authorization: token,
    },
  });
};

export { getCartService };
