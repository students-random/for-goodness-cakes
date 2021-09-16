import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<nav className="NavBar">
			<img
				className="NavBar-logo"
				src="/img/for-goodness-cakes-logo-dark.png"
			/>
			{props.routes.map(({ key, path }) => (
				<Link key={key} to={path}>
					{key}
				</Link>
			))}
		</nav>
	);
};

export default NavBar;
