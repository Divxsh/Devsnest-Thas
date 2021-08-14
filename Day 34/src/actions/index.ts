const AddItems = (value:string) => {
	return {
		type: "ADD_TODO",
		payload:{task:value} ,
	};
};
const DeleteItems = (index:number) => {
	return {
		type: "DELETE_TODO",
		index: index,
	};
};

const DarkMode = (value:boolean) => {
	return {
		type: "CHANGE_THEME",
		theme: value,
	};
};
export { AddItems, DeleteItems, DarkMode };
