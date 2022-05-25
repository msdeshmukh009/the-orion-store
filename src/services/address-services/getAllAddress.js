import axios from "axios";

const getAllAddress = token => {
  return axios.get("/api/user/address", {
    headers: { authorization: token },
  });
};

export { getAllAddress };
