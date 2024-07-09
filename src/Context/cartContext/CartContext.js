import axios from "axios";
import toast from "react-hot-toast";
import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "../index.context";
export const CartContext = createContext();


function CartProvider({ children }) {
    const { authorizeToken, API } = useAuthContext()
    const [cartData, setCartData] = useState(null);
    const [cartLength, setCartLength] = useState(0)
    const [localCharges, setLocalCharges] = useState(null)
    const [disable, setDisable] = useState(false)
    const token = localStorage.getItem("token")

    const getCartData = async () => {
        try {
            const resp = await axios.get(`${API}/cart/get`, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` },
            })
            setCartData(resp.data.data)
            setCartLength(resp.data.data.length)
           
        } catch (error) {
            console.log(error);
        }
    }

    const addToCart = async (product_id, productDetails, image) => {
       
        const data = { product_id, productDetails, quantity : 1, image:image}
        console.log(data);
        
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            
            const resp = await axios.post(`${API}/cart/add-cart`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
          
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            getCartData()
            
        } catch (error) {
            console.log(error)
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        } finally {
            setDisable(false)
        }
    }


    const addToCart2 = async (data) => {
    
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {

            const resp = await axios.post(`${API}/cart/add-cart`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })

            toast.dismiss(toastId);
            toast.success(resp.data.message)
            getCartData()

        } catch (error) {
            console.log(error)
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        } finally {
            setDisable(false)
        }
    }


    const addToCartUpdate = async (id, quantity) => {
       
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.put(`${API}/cart/add-quantity/${id}`, {quantity}, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
          
            getCartData()
            
        } catch (error) {
            console.log(error);
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
    }


    const deleteCartProduct = async(id) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.delete(`${API}/cart/remove-cart/${id}`, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)

            getCartData()
            
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
            console.log(error);
            
        }
    }


  
    

    useEffect(() => {
        if (authorizeToken){
            getCartData()
        }
    }, [authorizeToken])

    return (
        <CartContext.Provider value={{ cartData, addToCart, addToCart2, addToCartUpdate, cartLength, deleteCartProduct, setLocalCharges, localCharges }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
