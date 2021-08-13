import { useDispatch, useSelector } from "react-redux";
import { AddItems } from "../actions";
import { useState, useRef } from "react";
import "../Style/additem.css";


const AddItem = () => {
	const [Value, setValue] = useState("");
	const dispatch = useDispatch();
	const ButtonRef = useRef(null);
	const theme = useSelector((state) => state.theme);

	return (
		<div className='add-task'>
			<input
				onKeyPress={(e) => {
					if (e.code === "Enter") {
						ButtonRef.current.click();
					}
				}}
				type='text'
				value={Value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
				placeholder='Enter a Todo'
			/>
			<button
				ref={ButtonRef}
				onClick={() => {
					if (Value) {
						dispatch(AddItems(Value));
						setValue("");
					}
				}}
			>
				ADD
			</button>
		</div>
	);
};

export default AddItem;
