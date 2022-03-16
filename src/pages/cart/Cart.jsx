import { CartCard } from "../../components";
import { v4 as uuid } from "uuid";
import "./cart.css";
import { BillDistribution } from "./BillDistribution";

const Cart = () => {
  const cartItems = [
    {
      _id: uuid(),
      title: "CognitiveSurplus",
      description: "Curiosity Rover 11 oz Ceramic Mug Lorem ipsum dolor sit amet.",
      price: "1000 ",
      discountedPrice: "2,317",
      image: "/assets/products/products-card-images/curiosity-mug-card-img.webp",
      categoryName: "Coffee Mugs",
      quantity: 2,
    },
    {
      _id: uuid(),
      title: "Chopshopstore",
      description: "60 Years of Space Exploration in Pasadena, CA.",
      price: "1000 ",
      discountedPrice: "2,317",
      image: "/assets/products/products-card-images/poster-card-img.jpg",
      categoryName: "Posters",
      quantity: 2,
    },
  ];
  return (
    <main className="cart-container">
      <h1 className="text-center">My Cart(2)</h1>
      <div className="cart">
        <section className="cart-cards flex-total-center">
          {cartItems.map(product => (
            <CartCard key={product._id} product={product} />
          ))}
        </section>
        <BillDistribution />
      </div>
    </main>
  );
};

export { Cart };
