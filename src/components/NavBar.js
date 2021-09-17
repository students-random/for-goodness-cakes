import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<header className="header">
			<nav className="NavBar">
				<img
					className="NavBar-logo"
					src="/img/for-goodness-cakes-logo-dark.png"
				/>
				<ul className="nav-menu">
					{props.routes.map(({ key, path }) => (
						<li className="nav-item">
							<Link key={key} to={path} className="nav-link">
								{key}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
