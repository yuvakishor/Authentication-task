import { combineReducers } from "redux";

import authReducer from "./auth";
import employeeList from "./employeeList";

export default combineReducers({
    auth: authReducer,
    employeeList
});