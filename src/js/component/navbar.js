import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				
			</Link>
			<div className="ml-auto">
				<Link to="/addContacts">
					<button className="btn btn-primary">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
