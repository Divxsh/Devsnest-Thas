import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { LoginProvider } from "./Store";

function App() {
	return (
		<LoginProvider>
			<Router>
				<div className='app'>
					<Navbar />
				</div>
			</Router>
		</LoginProvider>
	);
}

export default App;
