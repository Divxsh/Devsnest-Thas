import { combineReducers } from "redux";
import placedataReducer from "./PlacedataReducer";
import placeReducer from "./placeReducer";
import loadingReducer from "./LoadingReducer";

const rootReducer = combineReducers({
	place: placeReducer,
	data: placedataReducer,
	loading: loadingReducer,
});

export default rootReducer;
