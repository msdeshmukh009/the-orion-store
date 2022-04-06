import axios from "axios";

const getWishlistService = token => {
  return axios.get("/api/user/wishlist", {
    headers: {
      authorization: token,
    },
  });
};

export { getWishlistService };
