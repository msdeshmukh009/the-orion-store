import axios from "axios";

const getOrdersService = async token => {
  return await axios.get("/api/user/orders", {
    headers: { authorization: token },
  });
};
export { getOrdersService };
