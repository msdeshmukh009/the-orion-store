import { Routes, Route, Navigate } from "react-router-dom";
import { Cart, Home, ProductListing, Wishlist, Signin, Signup } from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import Mockman from "mockman-js";
import { useAuth } from "../context";

const NavigationRoutes = () => {
  const {
    state: { token },
  } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/cart" element={<PrivateRoute element={Cart} />} />
      <Route path="/wishlist" element={<PrivateRoute element={Wishlist} />} />
      <Route path="/mockman" element={<Mockman />} />

      {!token && (
        <>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </>
      )}

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export { NavigationRoutes };
