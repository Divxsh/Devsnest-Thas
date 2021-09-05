import { updatePlace, updatePlaceData, Loading } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const InputPlace = () => {
	const dispatch = useDispatch();
	const place = useSelector((state) => state.place);
	const loading = useSelector((state) => state.loading);

	const wait = function () {
		return new Promise((resolve) => {
			setTimeout(resolve, 2000);
		});
	};
	const onChangeHandler = (e) => {
		dispatch(updatePlace(e.target.value));
	};
	const onClickHandler = () => {
		dispatch(Loading(!loading));
		wait().then(() => {
			dispatch(Loading(false));
			dispatch(updatePlaceData(place));
		});
	};
	return (
		<>
			<div className=' mt-32 mb-8 '>
				<input
					type='text'
					className='w-64 h-10 mx-2 pl-2 focus:outline-none border-2 border-gray-300 rounded text-lg'
					value={place}
					onChange={onChangeHandler}
				/>
				<button
					type='button'
					onClick={onClickHandler}
					className='findbtn bg-yellow-300 px-3 h-10 rounded text-lg'
				>
					Find
				</button>
			</div>
		</>
	);
};

export default InputPlace;
