import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DarkMode } from "../actions";
import { useEffect } from "react";

const ThemeToggle = () => {
	const dispatch = useDispatch();
	const [isDarkMode, setDarkMode] = useState<boolean>(false);

	useEffect(() => {
		dispatch(DarkMode(isDarkMode));
	}, [isDarkMode, dispatch]);
	return (
		<div className='toggle'>
			<DarkModeToggle
				onChange={setDarkMode}
				checked={isDarkMode}
				size={50}
				speed={1.5}
			/>
		</div>
	);
};

export default ThemeToggle;
