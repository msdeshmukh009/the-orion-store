import { WishlistCard } from "../../components";
import { v4 as uuid } from "uuid";
import "./wishlist.css";

const Wishlist = () => {
  const wishlist = [
    {
      _id: uuid(),
      title: "CognitiveSurplus",
      description: "Curiosity Rover 11 oz Ceramic Mug Lorem ipsum dolor sit amet.",
      price: "1000 ",
      discountedPrice: "2,317",
      image: "/assets/products/products-card-images/curiosity-mug-card-img.webp",
      categoryName: "Coffee Mugs",
    },
    {
      _id: uuid(),
      title: "KnittedLemonStudio",
      description: "Orion, Astronomy Print Of Orion Constellation In The Night Sky, .",
      price: "1000",
      discountedPrice: "1,793",
      image: "/assets/products/products-card-images/painting-card-img.jpg",
      categoryName: "Posters",
    },
    {
      _id: uuid(),
      title: "EastonWoodworks",
      description: "Orion Constellation Keychain.",
      price: "300 ",
      discountedPrice: "679",
      image: "/assets/products/products-card-images/key-chain-card-img.jpg",
      categoryName: "Accessories",
    },
    {
      _id: uuid(),
      title: "Chopshopstore",
      description: "60 Years of Space Exploration in Pasadena, CA.",
      price: "1000 ",
      discountedPrice: "2,317",
      image: "/assets/products/products-card-images/poster-card-img.jpg",
      categoryName: "Posters",
    },
  ];
  return (
    <>
      <div className="wishlist-products flex-column">
        <h1 className="text-center">My Wishlist</h1>
        <main className="wishlist-main-products">
          {wishlist.map(product => (
            <WishlistCard key={product._id} product={product} />
          ))}
        </main>
      </div>
    </>
  );
};

export { Wishlist };
