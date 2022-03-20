import { useCart } from "../../context/cartContext";

const BillDistribution = () => {
  const {
    state: { cartItems },
  } = useCart();

  const totalPrices = cartItems.reduce(
    (totalPrice, currentProduct) => {
      return {
        originalPrice: totalPrice.originalPrice + currentProduct.originalPrice * currentProduct.qty,
        discountedPrice:
          totalPrice.discountedPrice + currentProduct.discountedPrice * currentProduct.qty,
        deliverCharges:
          currentProduct.discountedPrice < 1000
            ? totalPrice.deliverCharges + 150
            : totalPrice.deliverCharges,
      };
    },
    { originalPrice: 0, discountedPrice: 0, deliverCharges: 0 }
  );

  return (
    <section className="bill-distribution">
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
        <h3>₹ {totalPrices.discountedPrice + totalPrices.deliverCharges}</h3>
      </div>
      <hr />
      <p>
        You will save{" "}
        <span className="text-primary-color">
          ₹{totalPrices.originalPrice - totalPrices.discountedPrice}
        </span>{" "}
        on this order.
      </p>
      <div className="cart-cta">
        <button className="btn btn-primary block-btn">Place Order</button>
      </div>
    </section>
  );
};

export { BillDistribution };
