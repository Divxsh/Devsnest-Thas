interface Action{
	type:string,
	theme:boolean
}

const themeReducer = (state = { theme: false }, action:Action) => {
	if (action.type === "CHANGE_THEME") {
		return {
			theme: action.theme,
		};
	}
	return state;
};

export default themeReducer;
