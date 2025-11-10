import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon, BookOpenIcon, StarIcon } from '@heroicons/react/24/solid';
import { WEBSITE_NAME } from '../constants.js';

function HeroSection() {
	return (
		<div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800 py-20 px-4 sm:px-6 lg:px-8 rounded-xl shadow-2xl">
			<div className="max-w-4xl mx-auto text-center">
				<AcademicCapIcon className="w-24 h-24 mx-auto mb-6 text-blue-400" />
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 font-display">
					Welcome to <span className="text-blue-700">{WEBSITE_NAME}</span>
				</h1>
				<p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-600">
					Your one-stop destination for RGPV notes, Shivani books, competitive exam preparation, and premium learning resources.
				</p>
				<div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
					<Link
						to="/rgpv-notes"
						className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-blue-600 hover:opacity-90 text-white font-semibold py-3.5 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center text-lg"
					>
						<BookOpenIcon className="h-6 w-6 mr-2" />
						Explore RGPV Notes
					</Link>
					<Link
						to="/premium-resources"
						className="w-full sm:w-auto bg-white/80 hover:bg-white/90 backdrop-blur-sm text-blue-700 font-semibold py-3.5 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center text-lg border border-blue-200"
					>
						<StarIcon className="h-6 w-6 mr-2 text-yellow-400" />
						View Premium Courses
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;