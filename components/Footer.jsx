import React from 'react';
import { WEBSITE_NAME } from '../constants.js';
import Logo from './Logo.jsx';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="bg-white/80 backdrop-blur-lg text-gray-700 body-font border-t border-gray-200 mt-12">
			<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
				<Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-800 group">
					<Logo className="h-8 w-auto text-blue-600 group-hover:text-blue-400 transition-colors" />
					<span className="ml-3 text-xl font-display group-hover:text-blue-400 transition-colors">{WEBSITE_NAME}</span>
				</Link>
				<p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 sm:py-2 sm:mt-0 mt-4">
					© {new Date().getFullYear()} {WEBSITE_NAME} — All Rights Reserved
				</p>
			</div>
		</footer>
	);
}

export default Footer;