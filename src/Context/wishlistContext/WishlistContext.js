import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


export const wishlistContext = createContext();

function WishlistProvider({ children }) {
    const [wishlistData, setWishlistData] = useState(null);
    const [wishlistLength, setWishlistLength] = useState(0)
    const token = localStorage.getItem("token")


    const getWishlistData = async () => {
        try {
            const resp = await axios.get('/wishlist/get', {
                headers: { 'Authorization': token, },
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
            const resp = await axios.post(`/wishlist/add`, data, {
                headers: { 'Authorization': `Bearer ${token}` }
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
            const resp = await axios.delete(`/wishlist/delete/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
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
        getWishlistData()
    }, [])

    return (
        <wishlistContext.Provider value={{ wishlistData, addToWishlist, wishlistLength, deleteWishlistProduct }}>
            {children}
        </wishlistContext.Provider>
    )
}
export default WishlistProvider;