import axios from "axios";
import toast from "react-hot-toast";
import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "../index.context";

export const ProductDetailsContext = createContext();

function ProductDetailsProvider({ children }) {
    const { authorizeToken, API } = useAuthContext()
    const [productDetailsData, setProductDetailsData] = useState([]);
    const [ReviewData, setReviewData] = useState(null)
    const [disable, setDisable] = useState(false)


    const getProductDetailsData = async () => {
        try {
            const resp = await axios.get(`${API}/product/get`, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` },
            }
            )
            setProductDetailsData(resp.data.data);
      


        } catch (error) {
            console.log(error);
        }
    }

    const getReviewData = async () => {
        try {
            const resp = await axios.get(`${API}/review/get`, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` },
            }
            )
            setReviewData(resp.data.data);


        } catch (error) {
            console.log(error);
        }
    }

    const addReview = async (data) => {
        const toastId = toast.loading('Loading...');
        setDisable(true)
        // console.log(data);
        try {
            const resp = await axios.post(`${API}/review/add`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` },
            }
            )
            toast.dismiss(toastId);
            toast.success(resp.data.message)



        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
            console.log(error);
        }
        finally {
            setDisable(false)
        }
    }



    useEffect(() => {
        getProductDetailsData();
        if (authorizeToken){            
            getReviewData()
        }

    }, [authorizeToken])
    return (
        <ProductDetailsContext.Provider value={{ productDetailsData, addReview, disable, ReviewData }}>
            {children}
        </ProductDetailsContext.Provider>
    )
}
export default ProductDetailsProvider;