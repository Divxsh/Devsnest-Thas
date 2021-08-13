const themeReducer = (state = { theme: false }, action) => {
	if (action.type === "CHANGE_THEME") {
		return {
			theme: action.theme,
		};
	}
	return state;
};

export default themeReducer;
