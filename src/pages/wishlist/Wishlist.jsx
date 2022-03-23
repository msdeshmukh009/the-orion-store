import { WishlistCard } from "../../components";
import { useWishlist } from "../../context";
import "./wishlist.css";

const Wishlist = () => {
  const {
    state: { wishedItems },
  } = useWishlist();
  return (
    <>
      <div className="wishlist-products flex-column">
        <h1 className="text-center">My Wishlist({wishedItems.length})</h1>
        <main className="wishlist-main-products">
          {wishedItems.map(product => (
            <WishlistCard key={product._id} product={product} />
          ))}
        </main>
      </div>
    </>
  );
};

export { Wishlist };
