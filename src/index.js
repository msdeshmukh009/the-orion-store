import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { App } from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, CategoryProvider, FilterProvider, ProductsProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductsProvider>
          <CategoryProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </CategoryProvider>
        </ProductsProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
