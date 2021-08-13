import React, { useState } from "react";
import "./App.css";
import { Addtodo } from "./Component/Addtodo";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./Component/ThemeToggle";

function App() {
	const [theme, setTheme] = useState<boolean>(false);
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={theme ? "App dark" : "App "}>
				<h1 className={theme ? "dark" : "heading"}>Todo App</h1>
				<ThemeToggle />
				<Addtodo />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
