

import { useContext } from "react";
import { StateManagement } from "./stateManagement/StateManagement";
import {AuthContext} from "./authContext/authContext";



// export {default as StateManagementProvider} "./stateManagement/StateManagement"


export const useAuthContext = () => useContext(AuthContext)
export const useStateManagement = ()=> useContext(StateManagement)