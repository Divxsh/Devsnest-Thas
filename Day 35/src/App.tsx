import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import { useDispatch } from "react-redux";
import UserData from "./Actions";

function App() {
	const dispatch = useDispatch<any>();
	useEffect(() => {
		dispatch(UserData());
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='app'>
			<Header />
			<Landing />
		</div>
	);
}

export default App;
