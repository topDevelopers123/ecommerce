import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductDetailsContext = createContext();

function ProductDetailsProvider({ children }) {
    const [productDetailsData, setProductDetailsData] = useState(null);
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

    useEffect(() => {
        getProductDetailsData();
    }, [])
    return (
        <ProductDetailsContext.Provider value={{ productDetailsData }}>
            {children}
        </ProductDetailsContext.Provider>
    )
}
export default ProductDetailsProvider;