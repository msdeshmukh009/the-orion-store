import axios from "axios";

const addOrderService = async (order, token) => {
  return await axios.post(
    "/api/user/orders",
    { ...order },
    {
      headers: { authorization: token },
    }
  );
};
export { addOrderService };
