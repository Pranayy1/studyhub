import React, { useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS, WEBSITE_NAME } from '../constants.js';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './Logo.jsx';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-200">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					<div className="flex items-center">
						<Link to="/" className="flex-shrink-0 flex items-center group">
							<Logo className="h-10 w-auto text-blue-600 group-hover:text-blue-400 transition-colors duration-300" />
							<span className="ml-3 text-2xl font-bold text-gray-800 group-hover:text-blue-400 transition-colors duration-300 font-display">{WEBSITE_NAME}</span>
						</Link>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-2">
							{NAV_LINKS.map((link) => (
								<RouterNavLink
									key={link.label}
									to={link.path}
									className={({ isActive }) =>
										`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
											isActive
												? 'bg-blue-100 text-blue-700 shadow-sm'
												: 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
										}`
									}
								>
									{link.label}
								</RouterNavLink>
							))}
						</div>
					</div>
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
							) : (
								<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{NAV_LINKS.map((link) => (
							<RouterNavLink
								key={link.label}
								to={link.path}
								onClick={() => setIsOpen(false)}
								className={({ isActive }) =>
									`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
										isActive
											? 'bg-blue-100 text-blue-700'
											: 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
									}`
								}
							>
								{link.label}
							</RouterNavLink>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navbar;