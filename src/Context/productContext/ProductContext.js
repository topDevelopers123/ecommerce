import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
    const [productData, setProductData] = useState(null);
    const token = localStorage.getItem("token");

    const getProductData = async () => {
        try {
            const resp = await axios.get('https://e-commerce-backend-4tmn.onrender.com/api/v1/product/get', {
                headers: { 'Authorization': token, },
            })
            setProductData(resp.data);
            console.log(resp);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProductData();
    }, [])
    return (
        <ProductContext.Provider value={{ productData }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider;