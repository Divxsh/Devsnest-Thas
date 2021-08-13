const AddItems = (value) => {
	return {
		type: "ADD_TODO",
		payload: { task: value },
	};
};
const DeleteItems = (index) => {
	return {
		type: "DELETE_TODO",
		index: index,
	};
};

const DarkMode = (value) => {
	return {
		type: "CHANGE_THEME",
		theme: value,
	};
};
export { AddItems, DeleteItems, DarkMode };
