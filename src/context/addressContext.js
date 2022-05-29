import { createContext, useContext, useReducer, useEffect } from "react";
import { addressReducer, initialState } from "../reducer";
import { useAuth } from "./authContext";
import { getAllAddress, addAddress, updateAddress, removeAddress } from "../services";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(addressReducer, initialState);

  const {
    state: { token },
  } = useAuth();

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          addressDispatch({ type: "INITIALIZE" });

          const { status, data } = await getAllAddress(token);

          if (status === 200) {
            addressDispatch({ type: "SET_ADDRESS", payload: data.address });
          }
        } catch (err) {
          addressDispatch({ type: "SET_ERROR", error: err.response.data[0].errors });
        }
      } else {
        addressDispatch({ type: "SET_ADDRESS", payload: [] });
      }
    })();
  }, [token]);

  const addNewAddress = async address => {
    try {
      addressDispatch({ type: "INITIALIZE" });

      const { status, data } = await addAddress(address, token);
      if (status === 201) {
        addressDispatch({ type: "SET_ADDRESS", payload: data.address });
      }
    } catch (err) {
      addressDispatch({ type: "SET_ERROR", error: err.response.data[0].errors });
    }
  };

  const editAddress = async address => {
    try {
      addressDispatch({ type: "INITIALIZE" });

      const { status, data } = await updateAddress(address, token);

      if (status === 200) {
        addressDispatch({ type: "SET_ADDRESS", payload: data.address });
      }
    } catch (err) {
      addressDispatch({ type: "SET_ERROR", error: err.response.data[0].errors });
    }
  };

  const deleteAddress = async address => {
    try {
      addressDispatch({ type: "INITIALIZE" });

      const { status, data } = await removeAddress(address, token);

      if (status === 200) {
        addressDispatch({ type: "SET_ADDRESS", payload: data.address });
      }
    } catch (err) {
      addressDispatch({ type: "SET_ERROR", error: err.response.data[0].errors });
    }
  };

  return (
    <AddressContext.Provider
      value={{ addressState, addressDispatch, addNewAddress, editAddress, deleteAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
