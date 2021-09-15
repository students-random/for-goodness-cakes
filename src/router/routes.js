import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Faqs from '../pages/Faqs';
import Gallery from '../pages/Gallery';

const routes = [
	{
		Component: Home,
		key: 'Home',
		path: '/'
	},
	{
		Component: Gallery,
		key: 'Gallery',
		path: '/Gallery'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Faqs,
		key: 'Faqs',
		path: '/Faqs'
	}
];

export default routes;
