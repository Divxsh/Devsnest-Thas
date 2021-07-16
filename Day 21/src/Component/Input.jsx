import React, { useState } from "react";
import "../Style/input.css";
import List from "./List";

export default function Input() {
	const [input, setInput] = useState([]);
	const [title, setTitle] = useState("");
	const [calorie, setCalorie] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setInput([...input, { title: title, calorie: calorie }]);
		setTitle("");
		setCalorie([]);
	};

	return (
		<>
			<form className='input' onSubmit={handleSubmit}>
				<input
					type='text'
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					placeholder='Item name'
					required
				/>

				<input
					type='number'
					value={calorie}
					onChange={(e) => setCalorie(e.target.value)}
					placeholder='Calorie amount'
					required
				/>
				<button className='add-btn'>Add Item</button>
			</form>
			<List input={input} setInput={setInput} />
		</>
	);
}
