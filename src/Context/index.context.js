import { useContext } from "react";
import { StateManagement } from "./stateManagement/StateManagement";
import { AuthContext } from "./authContext/authContext";
import { categoryContext } from "./categoryContext/CategoryContext";
import { wishlistContext } from "./wishlistContext/WishlistContext";
import { CartContext } from "./cartContext/CartContext";

// export {default as StateManagementProvider} "./stateManagement/StateManagement"




// export const useStateManagement = ()=> useContext(StateManagement)
export const useAuthContext = () => useContext(AuthContext)
export const useCategoryContext = () => useContext(categoryContext);
export const useWishlistContext = () => useContext(wishlistContext);
export const useCartContext = () => useContext(CartContext);