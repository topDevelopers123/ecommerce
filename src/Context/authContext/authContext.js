import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext()



function AuthContextProvider({children}) {
    const [authorizeToken, setAuthorizeToken] = useState(localStorage.getItem("token"))
    const register =async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post("https://e-commerce-backend-4tmn.onrender.com/api/v1/user/create", data)
            localStorage.setItem("token", resp.data.token)
            setAuthorizeToken(resp.data.token) 
            toast.dismiss(toastId);
            toast.success(resp.data.message)
        } catch (error) {
          
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }

    }

    const login = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post("https://e-commerce-backend-4tmn.onrender.com/api/v1/user/login", data)
          
            localStorage.setItem("token",resp.data.token)
            setAuthorizeToken(resp.data.token) 
            toast.dismiss(toastId);
            toast.success(resp.data.message)
        } catch (error) {

            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }

    }

  
    

  return (
      <AuthContext.Provider value={{ register, login, authorizeToken }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
