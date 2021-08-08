const inputReducer = (state = {}, action) => {
	if (action.type === "USERNAME") {
		return {
			...state,
			name: action.payload.name,
		};
	} else if (action.type === "EMAIL") {
		return {
			...state,
			email: action.payload.email,
		};
	}
	return state;
};

export default inputReducer;
