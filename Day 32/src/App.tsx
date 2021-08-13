import React from "react";
import "./App.css";

interface User {
	fname: string;
	lname: string;
	age: number;
	branch: string;
}
function App() {

	const user: User = {
		fname: "Divash",
		lname: "gupta",
		age: 20,
		branch: "Computer Science",
	};
  
	return (
		<div className='App'>
			{user === null ? (
				"loading..."
			) : (
				<>
					<h2>
						{user.fname}
						{user.lname}
					</h2>
					<h2>Age - {user.age}</h2>
					<h2>Branch - {user.branch}</h2>
				</>
			)}
		</div>
	);
}

export default App;
