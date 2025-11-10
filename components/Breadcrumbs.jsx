import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';

function Breadcrumbs({ items }) {
	const allItems = [{ label: "Home", path: "/" }, ...items];

	return (
		<nav className="flex mb-8 pb-3 border-b border-blue-100" aria-label="Breadcrumb">
			<ol role="list" className="flex items-center space-x-2">
				{allItems.map((item, index) => (
					<li key={index}>
						<div className="flex items-center">
							{index > 0 && (
								<ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-blue-300" aria-hidden="true" />
							)}
							{item.path ? (
								<Link
									to={item.path}
									className={`ml-2 text-sm font-medium ${index === allItems.length - 1 
										? 'text-blue-700 hover:text-blue-400' 
										: 'text-gray-500 hover:text-blue-700'
									} transition-colors`}
								>
									{index === 0 && <HomeIcon className="h-5 w-5 inline-block mr-1.5 flex-shrink-0 text-blue-300 group-hover:text-blue-400 transition-colors" />}
									{item.label}
								</Link>
							) : (
								<span className={`ml-2 text-sm font-medium text-blue-700`}>
									{index === 0 && <HomeIcon className="h-5 w-5 inline-block mr-1.5 flex-shrink-0 text-blue-300" />}
									{item.label}
								</span>
							)}
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
}

export default Breadcrumbs;