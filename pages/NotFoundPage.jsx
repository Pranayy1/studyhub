import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

function NotFoundPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-12">
			<div className="bg-white/80 backdrop-blur-lg border border-blue-100 p-8 sm:p-12 rounded-xl shadow-2xl">
				<ExclamationTriangleIcon className="w-24 h-24 text-blue-400 mb-6 mx-auto" />
				<h1 className="text-6xl font-extrabold text-blue-700 mb-4 font-display">404</h1>
				<h2 className="text-3xl font-semibold text-blue-600 mb-4">Page Not Found</h2>
				<p className="text-lg text-blue-800 mb-8 max-w-md">
					Oops! The page you are looking for does not exist. It might have been moved or deleted.
				</p>
				<Link
					to="/"
					className="px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-600 hover:opacity-90 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
				>
					Go Back to Homepage
				</Link>
			</div>
		</div>
	);
}

export default NotFoundPage;