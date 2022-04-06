import axios from "axios";

const removeFromWishlistService = (token, productId) => {
  return axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: token,
    },
  });
};

export { removeFromWishlistService };
