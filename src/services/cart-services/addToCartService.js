import axios from "axios";

const addToCartService = (token, product) => {
  return axios.post(
    "/api/user/cart",
    {
      product,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export { addToCartService };
