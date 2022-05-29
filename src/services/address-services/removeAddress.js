import axios from "axios";

const removeAddress = async (address, token) => {
  return await axios.delete(
    `/api/user/address/${address._id}`,

    {
      headers: { authorization: token },
    }
  );
};
export { removeAddress };
