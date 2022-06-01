import "./checkout.css";
import { useState } from "react";
import { AddressCard, AddressModal, Loading } from "../../components";
import { useAddress } from "../../context";
import { BillDistribution } from "../cart/BillDistribution";

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    addressState: { address, isLoading },
  } = useAddress();

  const [selectedAddressId, setSelectedAddressId] = useState(address[0]?._id);

  const selectedAddress = address.find(address => address._id === selectedAddressId);

  return (
    <main className="cart-container">
      <h1 className="text-center">Checkout</h1>
      {/* {isLoading && <Loading />} */}

      <div className="cart">
        <section className="address-cards">
          {address?.map(address => (
            <label key={address._id} className="address-radio">
              <input
                type="radio"
                name="address"
                checked={selectedAddressId === address._id}
                onChange={() => setSelectedAddressId(address._id)}
              />
              <div>
                <h3>{address.name}</h3>
                <address className="card-text">
                  <span>{address.street}</span>
                  <span>{address.state}</span>
                  <span>{address.country}</span>
                  <span>{address.zipCode}</span>
                  <span>{address.mobile}</span>
                </address>
              </div>
            </label>
          ))}
          {!address.length && <h2>Add address to continue payment</h2>}
          <button className="new-address-btn" onClick={() => setIsModalOpen(true)}>
            Add new address +
          </button>
          <AddressModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </section>
        <BillDistribution selectedAddress={selectedAddress} />
      </div>
    </main>
  );
};

export { Checkout };
