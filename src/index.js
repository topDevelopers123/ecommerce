import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "./Context/authContext/authContext";
import CategoryContextProvider from "./Context/categoryContext/CategoryContext";
import WishlistProvider from "./Context/wishlistContext/WishlistContext";
import CartProvider from "./Context/cartContext/CartContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductProvider>
        <CategoryContextProvider>
          <WishlistProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </WishlistProvider>
        </CategoryContextProvider>
      </ProductProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
