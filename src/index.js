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
import ProductProvider from "./Context/productContext/ProductContext";
import UserAddressProvider from "./Context/userAddressContext/UserAddressContext";
import ProductDetailsProvider from "./Context/productDetailsContext/ProductDetailsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
          <CategoryContextProvider>
      <ProductProvider>
        <ProductDetailsProvider>
        <UserAddressProvider>
            <WishlistProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </WishlistProvider>
        </UserAddressProvider>
    </ProductDetailsProvider>
      </ProductProvider>
          </CategoryContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
