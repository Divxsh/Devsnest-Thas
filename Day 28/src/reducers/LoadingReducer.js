const loadingReducer = (state = false, action) => {
	if (action.type === "Loading") {
		return action.payload;
	}
	return state;
};

export default loadingReducer;
