const sortProducts = (sortBy, data) => {
  let tempData = [...data];
  if (sortBy === "high-to-low") {
    tempData.sort((a, b) => b.discountedPrice - a.discountedPrice);
  }
  if (sortBy === "low-to-high") {
    tempData.sort((a, b) => a.discountedPrice - b.discountedPrice);
  }
  return tempData;
};

const filterProducts = (state, data) => {
  let tempData = [...data];

  tempData = tempData.filter(item => item.rating >= state.rating);

  if (!state.includeOutOfStock) {
    tempData = tempData.filter(product => product.inStock);
  }

  if (state.category.length > 0) {
    tempData = tempData.filter(product => state.category.includes(product.category));
  }

  if (state.range) {
    tempData = tempData.filter(
      product =>
        state.range.min <= product.discountedPrice && product.discountedPrice <= state.range.max
    );
  }
  return tempData;
};

const minMaxReduce = (acc, curr) => {
  if (curr.discountedPrice > acc.max) {
    return { ...acc, max: curr.discountedPrice };
  } else if (acc.min > curr.discountedPrice) {
    return { ...acc, min: curr.discountedPrice };
  } else {
    return acc;
  }
};
export { sortProducts, filterProducts, minMaxReduce };
