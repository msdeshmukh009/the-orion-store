import { useState } from "react";
import { useCart } from "../../context";

const CounterButtons = ({ product }) => {
  const [isFetching, setIsFetching] = useState(false);
  const { changeQuantity } = useCart();

  return (
    <div className="order-counter flex-total-center">
      <span>Quantity:</span>
      <button
        className="btn btn-outline"
        disabled={product.qty === 1 ? true : isFetching ? true : false}
        onClick={() => changeQuantity("decrement", product._id, setIsFetching)}
      >
        -
      </button>
      <span className="quantity">{product.qty}</span>
      <button
        disabled={isFetching}
        className="btn btn-outline"
        onClick={() => changeQuantity("increment", product._id, setIsFetching)}
      >
        +
      </button>
    </div>
  );
};

export { CounterButtons };
