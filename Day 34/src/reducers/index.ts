import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
	todos: todoReducer,
	theme: themeReducer,
});

export type reducerType = ReturnType<typeof rootReducer>
export default rootReducer;
