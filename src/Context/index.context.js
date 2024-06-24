import { useContext } from "react";
import { AuthContext } from "./authContext/authContext";
import { categoryContext } from "./categoryContext/CategoryContext";
import { wishlistContext } from "./wishlistContext/WishlistContext";
import { CartContext } from "./cartContext/CartContext";
import { ProductContext } from "./productContext/ProductContext";





export const useAuthContext = () => useContext(AuthContext)
export const useCategoryContext = () => useContext(categoryContext);
export const useWishlistContext = () => useContext(wishlistContext);
export const useCartContext = () => useContext(CartContext);
export const useProductContext = () => useContext(ProductContext);