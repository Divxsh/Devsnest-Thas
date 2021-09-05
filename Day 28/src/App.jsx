import React from "react";
import "./App.css";
import InputPlace from "./Component/InputPlace";
import Card from "./Component/Card";

function App() {
	return (
		<div className='app flex flex-col items-center  h-screen bg-red-50'>
			<InputPlace />
			<Card />
		</div>
	);
}

export default App;
