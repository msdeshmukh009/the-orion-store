const couponsData = [
  {
    offerName: "off200",
    minBillAmount: 1000,
    reductionFunction: num => num - 200,
    offerStatus: false,
    description: "Get Rs.200 off on minimum purchase of Rs.1000",
  },
  {
    offerName: "off500",
    minBillAmount: 2000,
    reductionFunction: num => num - 500,
    offerStatus: false,
    description: "Get Rs.500 off on minimum purchase of Rs.2000",
  },
  {
    offerName: "off50%",
    minBillAmount: 5000,
    reductionFunction: num => num / 2,
    offerStatus: false,
    description: "Get 50% off on minimum purchase of Rs.10000",
  },
];

export { couponsData };
