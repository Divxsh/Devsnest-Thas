import React from "react";
import { useContext } from "react";
import { LoginContext } from "../Store";

function Home() {
	const [loginstate, dispatch] = useContext(LoginContext);

	const wait = () => {
		return new Promise((resolve) => {
			setTimeout(resolve, 1000);
		});
	};
	return (
		<div className='home'>
			<h1>Home</h1>
			<p>If not logged in cant access, Profile & Dashboard</p>

			{loginstate.loading ? (
				<span>Loading...</span>
			) : (
				<button
					onClick={() => {
						dispatch({
							type: "login",
							loading: !loginstate.loading,
							payload: !loginstate.login,
						});
						wait().then(() => {
							dispatch({
								type: "login",
								loading: false,
								payload: !loginstate.login,
							});
						});
					}}
				>
					{loginstate.login ? "Logout" : "Login"}
				</button>
			)}
		</div>
	);
}

export default Home;
