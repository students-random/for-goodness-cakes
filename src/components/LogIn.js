import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const LogIn = ({
	props,
	token,
	setToken,
	user,
	setUser,
	loggedInUser,
	setLoggedInUser
}) => {
	const [toggle, setToggle] = useState(false);
	const [showForm, setShowForm] = useState(true);

	const handleChange = e => {
		setUser({ ...user, [e.target.id]: e.target.value });
	};

	const handleLogin = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});
			const data = await response.json();
			setToken(data.token);
			setLoggedInUser(data.user.username);
			window.localStorage.setItem('token', data.token);
			window.localStorage.setItem('loggedInUser', data.user.username);
		} catch (error) {
			console.error(error);
			alert('Username / password invalid');
		} finally {
			window.location.assign('/admin');
		}
	};

	const handleRegister = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});
			const data = await response.json();
			// setToken(data.token);                 //disabled in order to force user to login after register
			// setLoggedInUser(data.user.username);
			// window.localStorage.setItem('token', data.token);
			// window.localStorage.setItem('loggedInUser', data.user.username);
			setToggle(!toggle);
			displayForm();
		} catch (error) {
			console.error(error);
			alert('Username already taken');
		} finally {
			window.location.assign('/admin');
		}
	};

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);

	const displayForm = () => {
		setShowForm(!showForm);
	};

	return (
		<div className="LogIn">
			{showForm && (
				<>
					<div>
						<h1>Admin Access Only</h1>
						<form onSubmit={handleLogin}>
							<div className="form-group">
								<input
									className="form-control form-input"
									type="text"
									id="username"
									placeholder="username"
									required
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<input
									className="form-control form-input"
									type="password"
									id="password"
									placeholder="Password"
									required
									onChange={handleChange}
								/>
							</div>
							<div className="log-in-btns">
								<input type="submit" value="Log In" />
								<input
									type="button"
									onClick={() => {
										setToggle(!toggle);
										displayForm();
									}}
									value="Create New Account"
								/>
							</div>
						</form>
					</div>
				</>
			)}

			{toggle && (
				<form onSubmit={handleRegister}>
					<h1>Register Admin</h1>
					<div className="form-group">
						<input
							className="form-control form-input"
							type="text"
							id="username"
							value={user.username}
							placeholder="username"
							required
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<input
							className="form-control form-input"
							type="password"
							id="password"
							value={user.password}
							placeholder="password"
							required
							onChange={handleChange}
						/>
					</div>
					<input type="submit" className="form-submit" value="Submit" />
				</form>
			)}
		</div>
	);
};

export default LogIn;
