import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../index.context";

export const TrackOrderContext = createContext();

function TrackOrderProvider({ children }) {
    const { API } = useAuthContext();


    const addLocationFinder = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.post(`${API}/order/locationFinder`, data
            )
            toast.dismiss(toastId);
            toast.success(res.data.message)

        } catch (error) {
            console.log(error)
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
    }


    return (
        <TrackOrderContext.Provider value={{ addLocationFinder }}>
            {children}
        </TrackOrderContext.Provider>
    )
}
export default TrackOrderProvider;