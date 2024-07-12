import axios from "axios";
import toast from "react-hot-toast";
import { createContext,  useEffect,  useState } from "react";
import { useAuthContext } from "../index.context";


export const OrderContext = createContext();

function OrderContextProvider({ children }) {
    const { API, authorizeToken } = useAuthContext()
 
    const [disable, setDisable] = useState(false)
    const [orderDetail, setOrderDetail] = useState(null)
    const token = localStorage.getItem("token")

    // console.log(authorizeToken)    
    const addOrder = async (data) => {
     
        
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {

            const resp = await axios.post(`${API}/order/create`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })

            toast.dismiss(toastId);
            toast.success(resp.data.message)
       
            window.location.href = "/thankyou"
           

        } catch (error) {
            console.log(error)
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        } finally {
            setDisable(false)
        }
    }

    const addSingleOrder = async (data) => {
        console.log(data);
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {

            const resp = await axios.post(`${API}/order/buynow`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })

            toast.dismiss(toastId);
            toast.success(resp.data.message)
            window.location.href ="/thankyou"


        } catch (error) {
            console.log(error)
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        } finally {
            setDisable(false)
        }
    }
    const getOrder = async () => {
        try {
            const res = await axios.get(`${API}/user/get-order`, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            } )
            // console.log(res?.data.data[0])
            setOrderDetail(res?.data.data[0])
           
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(()=>{
        getOrder()
    }, [])
                                               


    return (
        <OrderContext.Provider value={{ addOrder, addSingleOrder, getOrder, orderDetail }}>
            {children}
        </OrderContext.Provider>
    )
}
export default OrderContextProvider;
