import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const categoryContext = createContext()

function CategoryContextProvider({ children }) {
  const [category, setCategory] = useState(null)

  const getCategoryData = async () => {
    try {
      const resp = await axios.get('https://e-commerce-backend-4tmn.onrender.com/api/v1/category/category')
      setCategory(resp.data.data)


    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getCategoryData();
  }, [])

  return (
    <categoryContext.Provider value={{ category }}>
      {children}
    </categoryContext.Provider>
  )
}
export default CategoryContextProvider;