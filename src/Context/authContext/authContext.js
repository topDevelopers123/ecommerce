import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [authorizeToken, setAuthorizeToken] = useState(localStorage.getItem("token"));

    if (authorizeToken) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${authorizeToken}`;
    }

    // Register
    const register = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post("https://e-commerce-backend-4tmn.onrender.com/api/v1/user/create", data);
            localStorage.setItem("token", resp.data.token);
            setAuthorizeToken(resp.data.token);
            toast.success(resp.data.message);
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
            const resp = await axios.post("https://e-commerce-backend-4tmn.onrender.com/api/v1/user/login", data);
            localStorage.setItem("token", resp.data.token);
            setAuthorizeToken(resp.data.token);
            toast.success(resp.data.message);
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
            const resp = await axios.post("https://e-commerce-backend-4tmn.onrender.com/api/v1/user/send-otp", data);
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
            const resp = await axios.post("https://e-commerce-backend-4tmn.onrender.com/api/v1/user/verify-otp", { check_otp: Number(data) });
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
            const resp = await axios.post("https://e-commerce-backend-4tmn.onrender.com/api/v1/user/new-password", data);
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
            const resp = await axios.post("https://e-commerce-backend-4tmn.onrender.com/api/v1/user/password", data);
            localStorage.setItem("token", resp.data.token);
            setAuthorizeToken(resp.data.token);
         
            toast.success(resp.data.message);
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        } finally {
            toast.dismiss(toastId);
        }
    };

    return (
        <AuthContext.Provider value={{ register, login, emailVerify, otpVerify, newPassword, changePassword, authorizeToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
