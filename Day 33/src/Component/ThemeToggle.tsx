import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import DarkModeToggle from "react-dark-mode-toggle";

const ThemeToggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<DarkModeToggle
			className='toggle'
			onChange={setTheme}
			checked={theme}
			size={60}
		/>
	);
};

export default ThemeToggle;
