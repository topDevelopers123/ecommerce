import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../index.context";
import { error } from "jquery";

export const TrackOrderContext = createContext();

function TrackOrderProvider({ children }) {
    const { API } = useAuthContext();
    const [locationData, setLocationData] = useState(null);
    const [pincodeError, setPincodeError] = useState(false);


    const addLocationFinder = async (pincode) => {
        try {
            const res = await axios.post(`${API}/order/locationFinder`, { pincode })
            setLocationData(res?.data)

            if (res?.data?.IsError === false) {
                setPincodeError(false)
            } else setPincodeError(true)
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <TrackOrderContext.Provider value={{ addLocationFinder, locationData, pincodeError, setPincodeError }}>
            {children}
        </TrackOrderContext.Provider>
    )
}
export default TrackOrderProvider;