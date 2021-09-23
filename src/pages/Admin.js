import React, { useState, useEffect } from 'react';
import LogIn from '../components/LogIn';
// import Annoucements from '../components/Annoucements';
import Orders from '../components/Orders';
import DisableDay from '../components/DisableDay';
import ContactSubmissions from '../components/ContactSubmissions';

export default function Admin(props) {
	const [token, setToken] = useState('');
	const [user, setUser] = useState({
		username: '',
		password: ''
	});
	const [loggedInUser, setLoggedInUser] = useState('');

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);

	const logout = () => {
		window.localStorage.clear();
		window.location.assign('/admin');
	};

	const works = () => {
		console.log('works');
	};

	return (
		<div className="Admin">
			{!token ? (
				<>
					{' '}
					<LogIn
						works={{ works }}
						token={token}
						setToken={setToken}
						user={user}
						setUser={setUser}
						loggedInUser={loggedInUser}
						setLoggedInUser={setLoggedInUser}
					/>
				</>
			) : (
				<>
					{' '}
					<div className="links">
						<h1>Orders</h1>
						<h1>'Contact Me' Submissions</h1>
						<h1>Disable Dates</h1>
						<h1>Annoucements</h1>

						<button onClick={logout} className="">
							{' '}
							<h1>Log Out</h1>
						</button>
					</div>
					<DisableDay />
					<Orders />
					<ContactSubmissions />
				</>
			)}
		</div>
	);
}
// <Annoucements />
