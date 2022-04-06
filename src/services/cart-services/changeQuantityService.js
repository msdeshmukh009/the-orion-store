import axios from "axios";

const changeQuantityService = (token, productId, type) => {
  return axios.post(
    `/api/user/cart/${productId}`,
    {
      action: {
        type: type,
      },
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export { changeQuantityService };
