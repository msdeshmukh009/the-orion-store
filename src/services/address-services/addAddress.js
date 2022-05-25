import axios from "axios";

const addAddress = (address, token) => {
  return axios.post("/api/user/address/", { address }, { headers: { authorization: token } });
};

export { addAddress };
