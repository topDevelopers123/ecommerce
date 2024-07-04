import axios from "axios";
import toast from "react-hot-toast";
import { createContext, useEffect, useState } from "react";

export const ProductDetailsContext = createContext();

function ProductDetailsProvider({ children }) {
    const [productDetailsData, setProductDetailsData] = useState(null);
    const [ReviewData, setReviewData] = useState(null)
    const [disable, setDisable] = useState(false)
    const token = localStorage.getItem("token")


    const getProductDetailsData = async () => {
        try {
            const resp = await axios.get('/product/get', {
                headers: { 'Authorization': `Bearer ${token}` },
            }
            )
            setProductDetailsData(resp.data.data);
          

        } catch (error) {
            console.log(error);
        }
    }

    const getReviewData = async () => {
        try {
            const resp = await axios.get('/review/get', {
                headers: { 'Authorization': `Bearer ${token}` },
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
            const resp = await axios.post('/review/add',data ,{
                headers: { 'Authorization': `Bearer ${token}` },
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
        getReviewData()

    }, [])
    return (
        <ProductDetailsContext.Provider value={{ productDetailsData, addReview, disable, ReviewData }}>
            {children}
        </ProductDetailsContext.Provider>
    )
}
export default ProductDetailsProvider;