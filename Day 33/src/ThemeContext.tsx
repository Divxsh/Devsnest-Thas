import { createContext } from "react";

export interface ThemeType {
	theme: boolean;
	setTheme: (theme: boolean) => void;
}

const initialState = {
	theme: false,
	setTheme: (theme: boolean) => {},
};
export const ThemeContext = createContext(initialState);
