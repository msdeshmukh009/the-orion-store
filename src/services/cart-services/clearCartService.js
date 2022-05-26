import axios from "axios";

const clearCartService = token => {
  return axios.post("/api/user/cart/clearCart", {}, { headers: { authorization: token } });
};

export { clearCartService };
