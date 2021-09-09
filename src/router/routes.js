import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Faqs from '../pages/Faqs';
import Gallery from '../pages/Gallery';

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	},
	{
		Component: Faqs,
		key: 'Faqs',
		path: '/Faqs'
	},
	{
		Component: Gallery,
		key: 'Gallery',
		path: '/Gallery'
	}
];

export default routes;
