const sortProducts = (sortBy, data) => {
  let tempData = [...data];
  if (sortBy === "high-to-low") {
    tempData.sort((a, b) => b.price - a.price);
  }
  if (sortBy === "low-to-high") {
    tempData.sort((a, b) => a.price - b.price);
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
      product => state.range.min <= product.price && product.price <= state.range.max
    );
  }
  return tempData;
};

const minMaxReduce = (acc, curr) => {
  if (curr.price > acc.max) {
    return { ...acc, max: curr.price };
  } else if (acc.min > curr.price) {
    return { ...acc, min: curr.price };
  } else {
    return acc;
  }
};
export { sortProducts, filterProducts, minMaxReduce };
