import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
    const [productData, setProductData] = useState(null);

    const getProductData = async () => {
        try {
            const resp = await axios.get('https://e-commerce-backend-4tmn.onrender.com/api/v1/product/get',
            )
            setProductData(resp.data.data);
          
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