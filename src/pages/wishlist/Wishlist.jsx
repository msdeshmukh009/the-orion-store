import { Loading, VerticalCard } from "../../components";
import { useWishlist } from "../../context";
import "./wishlist.css";

const Wishlist = () => {
  const {
    state: { wishedItems, loading, error },
  } = useWishlist();
  return (
    <>
      <div className="wishlist-products flex-column">
        <h1 className="text-center">My Wishlist({wishedItems.length})</h1>
        {loading && <Loading />}
        {error && <p>{error}</p>}
        <main className="wishlist-main-products">
          {wishedItems.map(product => (
            <VerticalCard key={product._id} product={product} />
          ))}
        </main>
      </div>
    </>
  );
};

export { Wishlist };
