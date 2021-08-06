import React, { useReducer } from "react";
import { createContext } from "react";

const LoginContext = createContext();

const Reducer = (state, action) => {
	switch (action.type) {
		case "login": {
			return { ...state, login: action.payload, loading: action.loading };
		}
		default:
			throw new Error("Something Went Wrong ");
	}
};

const initialState = {
	login: false,
	loading: false,
};

function LoginProvider({ children }) {
	const [loginstate, dispatch] = useReducer(Reducer, initialState);
	const value = [loginstate, dispatch];

	return (
		<LoginContext.Provider value={value}>{children}</LoginContext.Provider>
	);
}

export { LoginContext, LoginProvider };
