import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [orderDetail, setOrderDetail] = useState(null)
    const [getUser, setGetUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [authorizeToken, setAuthorizeToken] = useState(localStorage.getItem("token"));
    const API = process.env.REACT_APP_API
    // console.log(API);

   

    // Register
    const register = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/user/create`, data);
            localStorage.setItem("token", resp.data.token);
            setAuthorizeToken(resp.data.token);
            const newData = {
                name: resp.data.data.name,
                email: resp.data.data.email
            }
            localStorage.setItem("user", JSON.stringify(newData))
            setGetUser(newData)
            toast.success(resp.data.message);
            window.location.href = "/";
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        } finally {
            toast.dismiss(toastId);
        }
    };

    // Login
    const login = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/user/login`, data);
            localStorage.setItem("token", resp.data.token);
            setAuthorizeToken(resp.data.token);
            toast.success(resp.data.message);
            const newData = {
                name:resp.data.data.name,
                email: resp.data.data.email
            }
            localStorage.setItem("user", JSON.stringify(newData))
            setGetUser(newData)
            window.location.href = "/";

        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        } finally {
            toast.dismiss(toastId);
        }
    };

    // Email Verify
    const emailVerify = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/user/send-otp`, data);
            toast.success(resp.data.message);
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        } finally {
            toast.dismiss(toastId);
        }
    };

    // OTP Verify
    const otpVerify = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/user/verify-otp`, { check_otp: Number(data) });
            toast.success(resp.data.message);
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        } finally {
            toast.dismiss(toastId);
        }
    };

    // New Password
    const newPassword = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/user/new-password`, data);
            toast.success(resp.data.message);
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        } finally {
            toast.dismiss(toastId);
        }
    };

    // Change Password
    const changePassword = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/user/password`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }

            });
            setAuthorizeToken(resp.data.token);

            toast.success(resp.data.message);
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        } finally {
            toast.dismiss(toastId);
        }
    };



    return (
        <AuthContext.Provider value={{ register, login, emailVerify, otpVerify, newPassword, changePassword, authorizeToken, API, getUser }}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider;
