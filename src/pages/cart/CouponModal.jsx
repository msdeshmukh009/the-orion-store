const CouponModal = ({
  isCouponModalOpen,
  setIsCouponModalOpen,
  totalPrice,
  coupons,
  setCoupons,
}) => {
  return (
    <div className={`modal-background ${isCouponModalOpen ? "flex-total-center" : ""}`}>
      <div className="dialog-box">
        <button
          className="modal-close-btn modal-action-btn"
          onClick={() => setIsCouponModalOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>
        <div>
          {coupons.map(coupon => (
            <label key={coupon.offerName} className="offer-label">
              <input
                type="checkbox"
                disabled={totalPrice < coupon.minBillAmount}
                value="off200"
                checked={coupons.offerStatus}
                onChange={() =>
                  setCoupons(prevState =>
                    prevState.map(eachCoupon =>
                      eachCoupon.offerName === coupon.offerName
                        ? { ...eachCoupon, offerStatus: !eachCoupon.offerStatus }
                        : eachCoupon
                    )
                  )
                }
              />
              <span> {coupon.description}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export { CouponModal };
