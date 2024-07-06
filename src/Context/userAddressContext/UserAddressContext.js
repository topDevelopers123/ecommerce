import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../index.context";


export const UserAddressContext = createContext();

function UserAddressProvider({ children }) {
    const { authorizeToken, API } = useAuthContext()
    const [UserAddressData, setUserAddressData] = useState(null);
   

    const getUserAddressData = async () => {
        try {
            const res = await axios.get(`${API}/user-address/get`, {
                headers: { 'Authorization': authorizeToken, },
            })
            setUserAddressData(res?.data?.data)


        } catch (error) {
            console.log(error)
        }
    }
    const addNewAddress = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.post(`${API}/user-address/add`, data, {
                headers: { 'Authorization': authorizeToken, },
            })
            getUserAddressData()
            toast.dismiss(toastId);
            toast.success(res.data.message)

        } catch (error) {
            console.log(error)
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)

        }
    }
    const deleteAddress = async (id) => {
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.delete(`${API}/user-address/delete/${id}`, {
                headers: { 'Authorization': authorizeToken, },
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
            const res = await axios.put(`${API}/user-address/update/${id}`, data, {
                headers: { 'Authorization': authorizeToken, },
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
        if (authorizeToken) getUserAddressData()
    }, [authorizeToken])

    return (
        <UserAddressContext.Provider value={{ UserAddressData, addNewAddress, deleteAddress, updateOldAddress }}>
            {children}
        </UserAddressContext.Provider >
    )
}
export default UserAddressProvider;