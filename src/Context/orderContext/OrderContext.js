import axios from "axios";
import toast from "react-hot-toast";
import { createContext,  useState } from "react";

export const OrderContext = createContext();

function OrderContextProvider({ children }) {
    const [disable, setDisable] = useState(false)
    const token = localStorage.getItem("token")

    // const getCartData = async () => {
    //     try {
    //         const resp = await axios.get('https://e-commerce-backend-4tmn.onrender.com/api/v1/cart/get', {
    //             headers: { 'Authorization': `Bearer ${token}` },
    //         })
    //         setCartData(resp.data.data)
    //         setCartLength(resp.data.data.length)

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const addOrder = async (data) => {
        console.log(data);
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {

            const resp = await axios.post('https://e-commerce-backend-4tmn.onrender.com/api/v1/order/create', data, {
                headers: { 'Authorization': `Bearer ${token}` }
            })

            toast.dismiss(toastId);
            toast.success(resp.data.message)
           

        } catch (error) {
            console.log(error)
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        } finally {
            setDisable(false)
        }
    }


    return (
        <OrderContext.Provider value={{ addOrder }}>
            {children}
        </OrderContext.Provider>
    )
}
export default OrderContextProvider;
