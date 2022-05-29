import { useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { useCart } from "../../context/cartContext";
import { CouponModal } from "./CouponModal";
import { compose, offerFunctions, priceCalculator } from "./utils";
import { couponsData } from "./couponsData";
import { useLocation, useNavigate } from "react-router-dom";
import { useOrder, useAddress } from "../../context";

const BillDistribution = ({ selectedAddress }) => {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [coupons, setCoupons] = useState(couponsData);

  const {
    state: { cartItems },
    clearCart,
  } = useCart();

  const { pathname } = useLocation();

  const { addOrder } = useOrder();

  const {
    addressState: { address },
  } = useAddress();

  const navigate = useNavigate();

  const totalPrices = priceCalculator(cartItems);

  const totalPrice = totalPrices.discountedPrice + totalPrices.deliverCharges;

  const finalPrice = compose(...offerFunctions(coupons))(totalPrice);

  const loadScript = async url => {
    return new Promise(resolve => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpayModal = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      toast.error("Something went wrong.");
      return;
    }
    const options = {
      key: "rzp_test_GtfIaWmsadE9fA",
      amount: finalPrice * 100,
      currency: "INR",
      name: "",
      description: "Thanks for shopping with us!",
      image: "/assets/favicon.ico",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        const orderId = uuid();

        const newOrders = {
          paymentId,
          orderId,
          amountPaid: finalPrice,
          orderedProducts: [...cartItems],
          deliveryAddress: selectedAddress,
          orderedAt: dayjs().format("DD/MM/YYYY hh:mmA"),
        };
        addOrder(newOrders);
        clearCart();
        navigate("/user/orders");
      },
      theme: {
        color: "hsl(204, 83%, 56%)",
      },
      prefill: {
        name: "Adarsh Balika",
        email: "xyz@example.com",
        contact: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handlePayment = () => {
    displayRazorpayModal();
  };

  return (
    <section className="bill-distribution">
      <CouponModal
        totalPrice={totalPrice}
        isCouponModalOpen={isCouponModalOpen}
        setIsCouponModalOpen={setIsCouponModalOpen}
        coupons={coupons}
        setCoupons={setCoupons}
      />

      {pathname === "/checkout" && (
        <div className="coupon">
          <h3>Coupons</h3>
          <button
            className="btn btn-outline block-btn coupon-btn"
            onClick={() => setIsCouponModalOpen(true)}
          >
            Coupons<i className="fas fa-tag text-secondary-color text-bold"></i>
          </button>
        </div>
      )}
      <h3>Purchased Items</h3>
      <hr />
      <div className="bill">
        {cartItems.map(product => (
          <div className="bill-unit" key={product._id}>
            <p>{product.title}</p>
            <p>
              ₹{product.originalPrice} x {product.qty}
            </p>
          </div>
        ))}
      </div>

      <hr />

      <h3>Price Details</h3>
      <hr />
      <div className="bill">
        <div className="bill-unit">
          <p>Price({cartItems.length} items)</p>
          <p>₹ {totalPrices.originalPrice}</p>
        </div>
        <div className="bill-unit">
          <p>Discount</p>
          <p>-₹ {totalPrices.originalPrice - totalPrices.discountedPrice}</p>
        </div>
        <div className="bill-unit">
          <p>
            Delivery charges <span className="text-xs">(₹ 150 for product below ₹ 1000)</span>{" "}
          </p>
          <p>₹ {totalPrices.deliverCharges}</p>
        </div>
      </div>
      <hr />
      <div className="bill-unit">
        <h3>Total Amount</h3>
        <h3>₹ {finalPrice}</h3>
      </div>
      <hr />
      {pathname !== "/checkout" && (
        <p>
          You will save
          <span className="text-primary-color">
            ₹{totalPrices.originalPrice - totalPrices.discountedPrice}
          </span>
          on this order.
        </p>
      )}

      {pathname === "/checkout" && selectedAddress && (
        <>
          <h3>Delivery Address</h3>
          <hr />
          <div>
            <h4>{selectedAddress.name}</h4>
            <address className="card-text">
              <span>{selectedAddress.street}</span>
              <span>{selectedAddress.state}</span>
              <span>{selectedAddress.country}</span>
              <span>{selectedAddress.zipCode}</span>
              <span>{selectedAddress.mobile}</span>
            </address>
          </div>
        </>
      )}
      <div className="cart-cta">
        {pathname === "/checkout" ? (
          <button
            disabled={!address.length}
            className="btn btn-primary block-btn"
            onClick={handlePayment}
          >
            Proceed to Pay
          </button>
        ) : (
          <button
            className="btn btn-primary block-btn"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Place Order
          </button>
        )}
      </div>
    </section>
  );
};

export { BillDistribution };
