import inputReducer from "./inputReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ value: inputReducer });

export default rootReducer;
