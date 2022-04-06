import axios from "axios";

const addToWishlistService = (token, product) => {
  return axios.post(
    "/api/user/wishlist",
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

export { addToWishlistService };
