import "../Style/Box.css";
import React, { useState } from "react";

export default function Box({ item, input, setInput, i }) {
	const { title, calorie } = item;
	const [display, setDisplay] = useState(true);
	const [food, setFood] = useState(title);
	const [cals, setCals] = useState(calorie);

	function dltbtn(e) {
		let newArr = input.filter((item) => {
			return item.title !== title;
		});
		setInput(newArr);
	}

	return (
		<div className='box'>
			{display ? (
				<>
					<h2>{title}</h2>
					<p>You have consumed {calorie} calories today.</p>
					<div className='btns'>
						<button className='dlt-btn' onClick={dltbtn}>
							Delete
						</button>

						<button
							onClick={() => {
								setDisplay(false);
							}}
						>
							Edit
						</button>
					</div>
				</>
			) : (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setDisplay(true);
						let newAr = input.map((item) => {
							if (item.title === title) {
								item.title = food;
								item.calorie = cals;
							}
							return item;
						});
						setInput(newAr);
					}}
				>
					<input
						type='text'
						value={food}
						onChange={(e) => setFood(e.target.value)}
						className='box-input'
						placeholder='Enter New Food'
						required
					/>
					<input
						type='number'
						value={cals}
						onChange={(e) => setCals(e.target.value)}
						className='box-input'
						placeholder='Enter Calorie'
						required
					/>
					<button className='savebtn'>Save</button>
				</form>
			)}
		</div>
	);
}
