import React from 'react';
import { PREMIUM_RESOURCES_DATA } from '../constants.js';
import PremiumCard from '../components/PremiumCard.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { StarIcon } from '@heroicons/react/24/solid';

function PremiumPage() {
	const breadcrumbItems = [
		{ label: "Premium Resources" }
	];
	return (
		<div className="container mx-auto px-4 py-8">
			<Breadcrumbs items={breadcrumbItems} />
			<div className="text-center mb-12">
				<StarIcon className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
				<h1 className="text-4xl font-bold text-blue-700 mb-3 font-display">Premium Courses & Resources</h1>
				<p className="text-lg text-blue-800">
					Unlock exclusive content and advanced learning materials. Invest in your skills and future.
				</p>
			</div>
			{PREMIUM_RESOURCES_DATA.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{PREMIUM_RESOURCES_DATA.map((resource) => (
						<PremiumCard key={resource.id} resource={resource} />
					))}
				</div>
			) : (
				<p className="text-center text-blue-400 text-xl">No premium resources available at the moment. Please check back soon!</p>
			)}
		</div>
	);
}

export default PremiumPage;