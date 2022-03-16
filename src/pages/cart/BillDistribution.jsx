const BillDistribution = () => {
  return (
    <section className="bill-distribution">
      <h3>Price Details</h3>
      <hr />
      <div className="bill">
        <div className="bill-unit">
          <p>Price(4 items)</p>
          <p>₹ 9104</p>
        </div>
        <div className="bill-unit">
          <p>Discount</p>
          <p>-₹ 4000</p>
        </div>
        <div className="bill-unit">
          <p>Delivery charges</p>
          <p>₹ 300</p>
        </div>
      </div>
      <hr />
      <div className="bill-unit">
        <h3>Total Amount</h3>
        <h3>₹ 5404</h3>
      </div>
      <hr />
      <p>You will save ₹ 1000 on this order.</p>
      <div className="cart-cta">
        <button className="btn btn-primary block-btn">Place Order</button>
      </div>
    </section>
  );
};

export { BillDistribution };
