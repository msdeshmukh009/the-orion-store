import { useState } from "react";
import { useCart } from "../../context/cartContext";
import { CouponModal } from "./CouponModal";
import { compose, offerFunctions, priceCalculator } from "./utils";
import { couponsData } from "./couponsData";

const BillDistribution = () => {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [coupons, setCoupons] = useState(couponsData);
  const {
    state: { cartItems },
  } = useCart();

  const totalPrices = priceCalculator(cartItems);

  const totalPrice = totalPrices.discountedPrice + totalPrices.deliverCharges;

  const finalPrice = compose(...offerFunctions(coupons))(totalPrice);
  return (
    <section className="bill-distribution">
      <CouponModal
        totalPrice={totalPrice}
        isCouponModalOpen={isCouponModalOpen}
        setIsCouponModalOpen={setIsCouponModalOpen}
        coupons={coupons}
        setCoupons={setCoupons}
      />
      <div className="coupon">
        <h3>Coupons</h3>
        <button
          className="btn btn-outline block-btn coupon-btn"
          onClick={() => setIsCouponModalOpen(true)}
        >
          Coupons<i className="fas fa-tag text-secondary-color text-bold"></i>
        </button>
      </div>
      <h3>Price Details</h3>
      <hr />
      <div className="bill">
        <div className="bill-unit">
          <p>Price({cartItems.length} items)</p>
          <p>₹ {totalPrices.originalPrice}</p>
        </div>
        <div className="bill-unit">
          <p>Discount</p>
          <p>-₹ {totalPrices.originalPrice - finalPrice}</p>
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
      <p>
        You will save
        <span className="text-primary-color">
          ₹{totalPrices.originalPrice - totalPrices.discountedPrice}
        </span>
        on this order.
      </p>
      <div className="cart-cta">
        <button className="btn btn-primary block-btn">Place Order</button>
      </div>
    </section>
  );
};

export { BillDistribution };
