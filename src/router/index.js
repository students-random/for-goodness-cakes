import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import LogIn from '../pages/LogIn';
import OrderForm from '../components/OrderForm';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
const AppRouter = () => {
	return (
		<Router>
			<NavBar routes={routes} />
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						exact
						component={() => <Component page={key} />}
					></Route>
				))}
				<Route
					path={'/orderform'}
					render={routerProps => <OrderForm {...routerProps} />}
				></Route>
				<Route
					path={'/login'}
					render={routerProps => <LogIn {...routerProps} />}
				></Route>
			</Switch>
			<Footer />
		</Router>
	);
};

export default AppRouter;
