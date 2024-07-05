import { useContext } from "react";
import { AuthContext } from "./authContext/authContext";
import { categoryContext } from "./categoryContext/CategoryContext";
import { wishlistContext } from "./wishlistContext/WishlistContext";
import { CartContext } from "./cartContext/CartContext";
import { ProductContext } from "./productContext/ProductContext";
import { UserAddressContext } from "./userAddressContext/UserAddressContext";
import { ProductDetailsContext } from "./productDetailsContext/ProductDetailsContext";
import { OrderContext } from "./orderContext/OrderContext"; 




export const useAuthContext = () => useContext(AuthContext)
export const useCategoryContext = () => useContext(categoryContext);
export const useWishlistContext = () => useContext(wishlistContext);
export const useCartContext = () => useContext(CartContext);
export const useProductContext = () => useContext(ProductContext);
export const useProductDetailsContext = () => useContext(ProductDetailsContext)
export const useUserAddressContext = () => useContext(UserAddressContext);
export const useOrderContext = () => useContext(OrderContext);