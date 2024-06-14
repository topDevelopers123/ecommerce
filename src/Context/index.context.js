

import { useContext } from "react";
import { StateManagement } from "./stateManagement/StateManagement";




// export {default as StateManagementProvider} "./stateManagement/StateManagement"



export const useStateManagement = ()=> useContext(StateManagement)