import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "../index.context";

export const ProductContext = createContext();

function ProductProvider({ children }) {
    const {API} = useAuthContext()

    const [productData, setProductData] = useState(null);


    const getProductData = async () => {
        try {
            const resp = await axios.get(`${API}/product/get`,
            )
            setProductData(resp?.data?.data);
            
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getProductData();
    }, [])
    return (
        <ProductContext.Provider value={{ productData, setProductData }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider;