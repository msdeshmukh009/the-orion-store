import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { App } from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  CartProvider,
  CategoryProvider,
  FilterProvider,
  ProductsProvider,
  WishlistProvider,
  AddressProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <ProductsProvider>
              <FilterProvider>
                <CategoryProvider>
                  <AddressProvider>
                    <App />
                  </AddressProvider>
                </CategoryProvider>
              </FilterProvider>
            </ProductsProvider>
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
