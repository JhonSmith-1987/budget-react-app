import {combineReducers} from "@reduxjs/toolkit";
import UserReducers from "./UserReducers";
import IncomeReducer from "./IncomeReducers";

const RootReducer = combineReducers({
    userState: UserReducers,
    incomeState: IncomeReducer,
});
export default RootReducer;