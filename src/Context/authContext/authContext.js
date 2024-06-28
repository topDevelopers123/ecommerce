import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext()



function AuthContextProvider({ children }) {
    const [authorizeToken, setAuthorizeToken] = useState(localStorage.getItem("token"))

    // Registor 
    const register = async (data) => {
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

    // Login 
    const login = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post("https://e-commerce-backend-4tmn.onrender.com/api/v1/user/login", data)

            localStorage.setItem("token", resp.data.token)
            setAuthorizeToken(resp.data.token)
            toast.dismiss(toastId);
            toast.success(resp.data.message)
        } catch (error) {

            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }

    }

    // Email Verify 
    const emailVerify = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post("https://e-commerce-backend-4tmn.onrender.com/api/v1/user/verify-otp", data)

            localStorage.setItem("token", resp.data.token)
            setAuthorizeToken(resp.data.token)

            toast.dismiss(toastId);
            toast.success(resp.data.message)
        } catch (error) {

            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }

    }

    // OTP Verify 
    const otpVerify = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post("https://e-commerce-backend-4tmn.onrender.com/api/v1/user/send-otp", data)

            localStorage.setItem("token", resp.data.token)
            setAuthorizeToken(resp.data.token)
            console.log(resp)

            toast.success(resp.data.message)
            toast.dismiss(toastId);
        } catch (error) {

            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }

    }



    return (
        <AuthContext.Provider value={{ register, login, emailVerify, otpVerify, authorizeToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
