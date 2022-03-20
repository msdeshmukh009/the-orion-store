import { CartCard } from "../../components";
import "./cart.css";
import { BillDistribution } from "./BillDistribution";
import { useCart } from "../../context";

const Cart = () => {
  const {
    state: { cartItems },
  } = useCart();

  return (
    <main className="cart-container">
      <h1 className="text-center">My Cart({cartItems?.length})</h1>
      <div className="cart">
        <section className="cart-cards flex-total-center">
          {cartItems?.map(product => (
            <CartCard key={product._id} product={product} />
          ))}
        </section>
        {cartItems.length > 0 && <BillDistribution />}
      </div>
    </main>
  );
};

export { Cart };
