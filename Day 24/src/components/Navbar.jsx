import React, { useContext } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Dashboard from "../Pages/Dashboard";
import About from "../Pages/About";
import { LoginContext } from "../Store";

const Navbar = () => {
	const [loginstate] = useContext(LoginContext);
	return (
		<>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/profile'>Profile</Link>
				</li>
				<li>
					<Link to='/dashboard'>Dashboard</Link>
				</li>
			</ul>

			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/about' component={About} />
				{loginstate.login ? (
					<>
						<Route path='/profile' component={Profile} />
						<Route path='/dashboard' component={Dashboard} />{" "}
					</>
				) : (
					<>
						<Route path='/profile'>
							<Redirect to='/' />
						</Route>
						<Route path='/dashboard'>
							<Redirect to='/' />
						</Route>
					</>
				)}
			</Switch>
		</>
	);
};

export default Navbar;
