import { createContext, useState } from "react";


export const StateManagement = createContext()


const StateManagementProvider = ({children}) =>{
    const [data,setdata] = useState("hello")

    return (
        <StateManagement.Provider value={{data,setdata}} >
            {children}
        </StateManagement.Provider>

    )
}

export default StateManagementProvider