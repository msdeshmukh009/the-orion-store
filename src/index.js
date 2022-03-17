import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { App } from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryProvider, FilterProvider, ProductsProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <CategoryProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </CategoryProvider>
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
