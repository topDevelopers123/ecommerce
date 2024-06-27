import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserAddressContext = createContext();

function UserAddressProvider({ children }) {
    const [UserAddressData, setUserAddressData] = useState(null);
    const token = localStorage.getItem("token")


    const getUserAddressData = async () => {
        try {
            const res = await axios.get('https://e-commerce-backend-4tmn.onrender.com/api/v1/user-address/get', {
                headers: { 'Authorization': token, },
            })
            setUserAddressData(res?.data?.find)
            console.log(res)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserAddressData()
    }, [])

    return (
        <UserAddressContext.Provider value={{UserAddressData}}>
            {children}
        </UserAddressContext.Provider >
    )
}
export default UserAddressProvider;