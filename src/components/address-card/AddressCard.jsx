import { useState } from "react";
import { useAddress } from "../../context";
import { AddressModal } from "../address-modal/AddressModal";

const AddressCard = ({ address }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { deleteAddress } = useAddress();

  const { name, mobile, zipCode, street, state, country } = address;
  return (
    <div className="card text-card">
      <AddressModal
        initialAddress={address}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isUpdating={true}
      />
      <h3>{name}</h3>
      <address className="card-text">
        <span>{street}</span>
        <span>{state}</span>
        <span>{country}</span>
        <span>{zipCode}</span>
        <span>{mobile}</span>
      </address>
      <div className="card-cta-vertical">
        <button className="btn btn-outline" onClick={() => setIsModalOpen(true)}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="btn btn-outline delete-btn" onClick={() => deleteAddress(address)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export { AddressCard };
