import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../index.context";


export const categoryContext = createContext()

function CategoryContextProvider({ children }) {
  const {API} = useAuthContext()
  const [category, setCategory] = useState(null)
  const [selectedCategory,setData] = useState(null)


  const getCategoryData = async () => {
    try {
      const resp = await axios.get(`${API}/category/category`)
      setCategory(resp.data.data)
    }
     catch (error) {
      console.log(error)
    }

  }
  const showCategory=(a,b,c)=>{
    if (c) {
      setData(c)
    }
    else if (b) {
      setData(b)
    }else setData(a)
  }
  
  useEffect(() => {
    getCategoryData();
  }, [])

  return (
    <categoryContext.Provider value={{ category, showCategory, selectedCategory }}>
      {children}
    </categoryContext.Provider>
  )
}
export default CategoryContextProvider;

