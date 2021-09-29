import React, { useState, useEffect } from 'react';
import LogIn from '../components/LogIn';
import Annoucements from '../components/Annoucements';
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
	const [viewOrder, setViewOrder] = useState(true);
	const [viewContact, setViewContact] = useState(false);
	const [viewDisable, setViewDisable] = useState(false);
	const [viewAnnouc, setViewAnnouc] = useState(false);

	const toggle = setComponent => {
		setViewOrder(false);
		setViewContact(false);
		setViewDisable(false);
		setViewAnnouc(false);
		setComponent(true);
	};

	const bold = component => {
		if (component) {
			return {
				backgroundColor: '#D0BAC4',
				color: 'white',
				borderRadius: '500px',
				boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
			};
		}
	};

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
		window.scrollTo(0, 0);
	}, []);

	const logout = () => {
		window.localStorage.clear();
		window.location.assign('/admin');
	};

	return (
		<div className="Admin">
			{!token ? (
				<>
					{' '}
					<LogIn
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
						<button onClick={() => toggle(setViewOrder)}>
							<h1 style={bold(viewOrder)}>Orders</h1>
						</button>
						<button onClick={() => toggle(setViewContact)}>
							<h1 style={bold(viewContact)}>'Contact Me' Submissions</h1>
						</button>
						<button onClick={() => toggle(setViewDisable)}>
							<h1 style={bold(viewDisable)}>Disable Date</h1>
						</button>
						<button onClick={() => toggle(setViewAnnouc)}>
							<h1 style={bold(viewAnnouc)}>Annoucements</h1>
						</button>

						<button onClick={logout} className="">
							{' '}
							<h1>Log Out</h1>
						</button>
					</div>
					{viewOrder && <Orders />}
					{viewContact && <ContactSubmissions />}
					{viewDisable && <DisableDay />}
					{viewAnnouc && <Annoucements />}
				</>
			)}
		</div>
	);
}
