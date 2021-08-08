const updateUsername = (value) => {
	return {
		type: "USERNAME",
		payload: {
			name: value,
		},
	};
};

const updateEmail = (value) => {
	return {
		type: "EMAIL",
		payload: {
			email: value,
		},
	};
};

export { updateUsername, updateEmail };
