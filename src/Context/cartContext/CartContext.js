import axios from "axios";
import toast from "react-hot-toast";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cartData, setCartData] = useState(null);
    const [cartLength, setCartLength] = useState(0)
    const [disable, setDisable] = useState(false)
    const token = localStorage.getItem("token")

    const getCartData = async () => {
        try {
            const resp = await axios.get('https://e-commerce-backend-4tmn.onrender.com/api/v1/cart/get', {
                headers: { 'Authorization': `Bearer ${token}` },
            })
            setCartData(resp.data.data)
            setCartLength(resp.data.data.length)
           
        } catch (error) {
            console.log(error);
        }
    }

    const addToCart = async (product_id, productDetails) => {
       
        const data = { product_id, productDetails, quantity : 1}
        
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            
            const resp = await axios.post('https://e-commerce-backend-4tmn.onrender.com/api/v1/cart/add-cart', data, {
                headers: { 'Authorization': `Bearer ${token}` }
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

            const resp = await axios.post('https://e-commerce-backend-4tmn.onrender.com/api/v1/cart/add-cart', data, {
                headers: { 'Authorization': `Bearer ${token}` }
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
            const resp = await axios.put(`/cart/add-quantity/${id}`, {quantity}, {
                headers: { 'Authorization': `Bearer ${token}` }
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
            const resp = await axios.delete(`/cart/remove-cart/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
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
        getCartData()
    }, [])

    return (
        <CartContext.Provider value={{ cartData, addToCart, addToCart2, addToCartUpdate, cartLength, deleteCartProduct }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
