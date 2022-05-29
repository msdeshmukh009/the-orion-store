import axios from "axios";

const updateAddress = async (address, token) => {
  return await axios.post(
    `/api/user/address/${address._id}`,
    {
      address,
    },
    {
      headers: { authorization: token },
    }
  );
};

export { updateAddress };
