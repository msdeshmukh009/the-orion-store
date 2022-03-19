import { Routes, Route } from "react-router-dom";
import { Cart, Home, ProductListing, Wishlist, Signin, Signup } from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import Mockman from "mockman-js";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/cart" element={<PrivateRoute element={Cart} />} />
      <Route path="/wishlist" element={<PrivateRoute element={Wishlist} />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export { NavigationRoutes };
