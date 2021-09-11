const userReducer = (state = {}, action: any) => {
	if (action.type === "UserData") {
		return action.payload;
	}
	return state;
};

export default userReducer;
