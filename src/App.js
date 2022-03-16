import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { Base } from "./components";
import { Cart, Home, ProductListing, Wishlist, Signin, Signup } from "./pages";

const App = () => {
  return (
    <Base>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </Base>
  );
};

export { App };
