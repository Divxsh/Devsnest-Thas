const todoReducer = (state = [], action) => {
	if (action.type === "ADD_TODO") {
		return [...state, action.payload];
	} else if (action.type === "DELETE_TODO") {
		return state.filter((todo, index) => {
			return index !== action.index;
		});
	}
	return state;
};

export default todoReducer;
