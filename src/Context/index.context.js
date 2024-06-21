

import { useContext } from "react";
import { StateManagement } from "./stateManagement/StateManagement";
import { AuthContext } from "./authContext/authContext";
import { categoryContext } from "./categoryContext/CategoryContext";
import { wishlistContext } from "./wishlist/WishlistContext";

// export {default as StateManagementProvider} "./stateManagement/StateManagement"




// export const useStateManagement = ()=> useContext(StateManagement)
export const useAuthContext = () => useContext(AuthContext)
export const useCategoryContext = () => useContext(categoryContext);
export const useWishlistContext = () => useContext(wishlistContext);