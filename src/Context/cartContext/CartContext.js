import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

function CartProvider({ children }) {
    const [cartData, setCartData] = useState();
    const token = localStorage.getItem("token")

    const getCartData = async () => {
        try {
            const resp = await axios.get('https://e-commerce-backend-4tmn.onrender.com/api/v1/cart/get', {
                header: { 'Authorization': token, }
            })
            setCartData(resp.data.data)
            console.log(resp);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCartData()
    }, [])

    return (
        <CartContext.Provider value={{ cartData }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
