import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Base } from "./components";
import { Cart, Home, ProductListing, Wishlist } from "./pages";

const App = () => {
  return (
    <Base>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Base>
  );
};

export { App };
