import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const wishlistContext = createContext();

function WishlistProvider({ children }) {
    const [wishlistData, setWishlistData] = useState(null);
    const token = localStorage.getItem("token")


    const getWishlistData = async () => {
        try {
            const resp = await axios.get('https://e-commerce-backend-4tmn.onrender.com/api/v1/wishlist/get', {
                headers: { 'Authorization': token, },
            })
            setWishlistData(resp.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getWishlistData()
    }, [])

    return (
        <wishlistContext.Provider value={{ wishlistData }}>
            {children}
        </wishlistContext.Provider>
    )
}
export default WishlistProvider;