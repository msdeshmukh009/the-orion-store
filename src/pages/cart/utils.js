const compose =
  (...args) =>
  mainArg =>
    args.reduce((accumulatedF, currentF) => currentF(accumulatedF), mainArg);

const offerFunctions = coupons =>
  coupons.reduce((acc, curr) => (curr.offerStatus ? [...acc, curr.reductionFunction] : acc), []);

const priceCalculator = cartItems => {
  return cartItems.reduce(
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
};

export { compose, offerFunctions, priceCalculator };
