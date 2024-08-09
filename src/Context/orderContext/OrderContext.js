import axios from "axios";
import toast from "react-hot-toast";
import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "../index.context";


export const OrderContext = createContext();

function OrderContextProvider({ children }) {
    const { API, authorizeToken } = useAuthContext()
    const [returnProductData, setReturnProductData] = useState([]);
    const [disable, setDisable] = useState(false)
    const [disable2, setDisable2] = useState(false)
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

        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {

            const resp = await axios.post(`${API}/order/buynow`, data, {
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
    const getOrder = async () => {
        setDisable(true)

        try {
            const res = await axios.get(`${API}/user/get-order`, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            // console.log(res?.data.data[0])
            setOrderDetail(res?.data.data[0])

        } catch (error) {
            console.log(error)
        }
    }
    
    const updateOrder = async (id, data) => {
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.put(`${API}/order/update/${id}`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            // getOrder()
            console.log(resp?.data)
            toast.dismiss(toastId);
            toast.success(resp.data.message)

        } catch (error) {
            console.log(error)
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
        finally {
        setDisable(false)
    }
    }

    // Return Product 

    const returnProduct = async (data) => {
        setDisable2(true)
        // const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/return/create`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            setReturnProductData(resp?.data?.data)
            // toast.dismiss(toastId);
            // toast.success(resp.data.message)

        } catch (error) {
            console.log(error)
            // toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)

        } finally {
            setDisable2(false)
        }
    }


    useEffect(() => {
        getOrder()
    }, [updateOrder])



    return (
        <OrderContext.Provider value={{ addOrder, addSingleOrder, getOrder, updateOrder, orderDetail, returnProduct, disable, disable2 }}>
            {children}
        </OrderContext.Provider>
    )
}
export default OrderContextProvider;
