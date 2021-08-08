import React from "react";
import { updateUsername, updateEmail } from "../actions";
import { useDispatch } from "react-redux";
import "../Style/input.css";

const Input = () => {
	const dispatch = useDispatch();

	return (
		<div className='input'>
			<h1>Input</h1>
			<input
				placeholder='Name'
				type='text'
				onChange={(e) => {
					dispatch(updateUsername(e.target.value));
				}}
			/>
			<input
				placeholder='Email'
				type='email'
				onChange={(e) => {
					dispatch(updateEmail(e.target.value));
				}}
			/>
		</div>
	);
};

export default Input;
