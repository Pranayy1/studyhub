import React from 'react';
import { Link } from 'react-router-dom';
import { SPECIALIZATION_ICONS } from '../constants.js';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

function CourseCard({ course, resourceType }) {
	const baseLinkPath = `/${resourceType}/${course.id}`;

	return (
		<div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.08)] hover:border-blue-200 flex flex-col group">
			<div className="p-6 flex-grow">
				<div className="flex items-center mb-4">
					{course.icon && <course.icon className="h-10 w-10 text-blue-600 mr-3 transition-colors group-hover:text-blue-400" />}
					<h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
						{course.name}
					</h3>
				</div>
				<p className="text-gray-600 text-sm mb-4 min-h-[40px]">{course.description}</p>
				{course.specializations && course.specializations.length > 0 && (
					<div className="mb-4">
						<h4 className="text-sm font-medium text-gray-500 mb-2">Specializations:</h4>
						<div className="flex flex-wrap gap-2">
							{course.specializations.map(spec => {
								const SpecIcon = SPECIALIZATION_ICONS[spec] || SPECIALIZATION_ICONS['None'];
								return (
									<span key={spec} className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center border border-blue-200">
										<SpecIcon className="h-4 w-4 mr-1.5" />
										{spec}
									</span>
								);
							})}
						</div>
					</div>
				)}
			</div>
			<div className="p-6 bg-blue-50 border-t border-gray-200">
				<Link
						to={baseLinkPath}
						className="w-full flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 hover:opacity-90 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
					>
						View Semesters
						<ArrowRightIcon className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
				</Link>
			</div>
		</div>
	);
}

export default CourseCard;