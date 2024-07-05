import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


export const UserAddressContext = createContext();

function UserAddressProvider({ children }) {
    const [UserAddressData, setUserAddressData] = useState(null);
    const token = localStorage.getItem("token")


    const getUserAddressData = async () => {
        try {
            const res = await axios.get('https://e-commerce-backend-4tmn.onrender.com/api/v1/user-address/get', {
                headers: { 'Authorization': token, },
            })
            setUserAddressData(res?.data?.data)


        } catch (error) {
            console.log(error)
        }
    }
    const addNewAddress = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.post('https://e-commerce-backend-4tmn.onrender.com/api/v1/user-address/add', data, {
                headers: { 'Authorization': token, },
            })
            getUserAddressData()
            toast.dismiss(toastId);
            toast.success(res.data.message)

        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)

        }
    }
    const deleteAddress = async (id) => {
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.delete(`https://e-commerce-backend-4tmn.onrender.com/api/v1/user-address/delete/${id}`, {
                headers: { 'Authorization': token, },
            })
            getUserAddressData()
            toast.dismiss(toastId);
            toast.success(res.data.message)

        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)

        }
    }

    const updateOldAddress = async (data, id) => {
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.put(`/user-address/update/${id}`, data, {
                headers: { 'Authorization': token, },
            })
            getUserAddressData()
            toast.dismiss(toastId);
            toast.success(res.data.message)

        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)

        }
    }

    

    useEffect(() => {
        if (token) getUserAddressData()
    }, [])

    return (
        <UserAddressContext.Provider value={{ UserAddressData, addNewAddress, deleteAddress, updateOldAddress }}>
            {children}
        </UserAddressContext.Provider >
    )
}
export default UserAddressProvider;