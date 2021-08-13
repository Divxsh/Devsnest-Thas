import React from "react";
import AddItem from "./Component/AddItem";
import ListItem from "./Component/ListItem";
import ThemeToggle from "./Component/themeToggle";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
	const { theme } = useSelector((state) => state.theme);
	console.log(theme);
	return (
		<div className={theme ? " app dark" : "app"}>
			<ThemeToggle />
			<h2>Todo App</h2>
			<AddItem />
			<ListItem />
		</div>
	);
}

export default App;
