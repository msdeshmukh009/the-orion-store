import axios from "axios";

const removeFromCartService = (token, productId) => {
  return axios.delete(
    `/api/user/cart/${productId}`,

    {
      headers: {
        authorization: token,
      },
    }
  );
};

export { removeFromCartService };
