import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../index.context";

export const TrackOrderContext = createContext();

function TrackOrderProvider({ children }) {
    const { API, authorizeToken } = useAuthContext();
    const [locationData, setLocationData] = useState(null);
    const [pincodeError, setPincodeError] = useState(false);
    const [wayBillData, setWayBillData] = useState(null);
    const [disable, setDisable] = useState();

    // Location Finder 
    const addLocationFinder = async (pincode) => {
        setDisable(true)
        try {
            const res = await axios.post(`${API}/order/locationFinder`, { pincode })
            setLocationData(res?.data)

            if (res?.data?.IsError === false) {
                setPincodeError(false)
            } else setPincodeError(true)
        } catch (error) {
            console.log(error)
        } finally {
            setDisable(false);
        }
    }

    // create WayBill 
    const createWayBill = async (data) => {
        setDisable(true);
        try {
            const res = await axios.post(`${API}/wayBill/create`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            setWayBillData(res?.data);
            // console.log(res.data);
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
        finally {
            setDisable(false);
        }
    }



    return (
        <TrackOrderContext.Provider value={{ addLocationFinder, locationData, pincodeError, setPincodeError, createWayBill, wayBillData, disable }}>
            {children}
        </TrackOrderContext.Provider>
    )
}
export default TrackOrderProvider;