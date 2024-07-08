import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../index.context";


export const wishlistContext = createContext();

function WishlistProvider({ children }) {
    const { authorizeToken, API } = useAuthContext()
    const [wishlistData, setWishlistData] = useState(null);
    const [wishlistLength, setWishlistLength] = useState(0)

    const getWishlistData = async () => {
        try {
            const resp = await axios.get(`${API}/wishlist/get`, {
                headers: { 'Authorization': authorizeToken, },
            })
            setWishlistData(resp.data.data)
            setWishlistLength(resp.data.data.length)
            
        } catch (error) {
            console.log(error);
        }
    }

    const addToWishlist = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/wishlist/add`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            getWishlistData()
        } catch (error) {
            console.log(error);
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
    }

    const deleteWishlistProduct = async(id) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.delete(`${API}/wishlist/delete/${id}`, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            getWishlistData()
        } catch (error) {
            console.log(error);
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }

    }

    useEffect(() => {
        if (authorizeToken){
            getWishlistData()
        }
    }, [authorizeToken])

    return (
        <wishlistContext.Provider value={{ wishlistData, addToWishlist, wishlistLength, deleteWishlistProduct }}>
            {children}
        </wishlistContext.Provider>
    )
}
export default WishlistProvider;