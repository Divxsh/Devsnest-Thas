const updatePlace = (place) => {
	return {
		type: "Update_Place",
		payload: place,
	};
};

const updatePlaceData = (place) => {
	return (dispatch) => {
		fetch(
			`https://api.weatherapi.com/v1/current.json?key=3142599584104b62820114106212807&q=${place}`,
		)
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: "Update_Place_Data",
					payload: data,
				});
			});
	};
};

const Loading = (value) => {
	return {
		type: "Loading",
		payload: value,
	};
};

export { updatePlace, updatePlaceData, Loading };
