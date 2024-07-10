
import { createContext } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../index.context";

export const ContactUsContext = createContext();

function ContactUsProvider({ children }) {
    const { authorizeToken, API } = useAuthContext();


    const postContactForm = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/user/recived-mail`, data);
            toast.success(resp.data.message);
            // console.log(resp.data)
        }
        catch (error) {
            toast.error(error?.response?.data?.message);
            console.log(error)
        }
        finally {
            toast.dismiss(toastId);
        }
    };

    return (
        <ContactUsContext.Provider value={{ postContactForm }}>
            {children}
        </ContactUsContext.Provider>
    );
};
export default ContactUsProvider;
