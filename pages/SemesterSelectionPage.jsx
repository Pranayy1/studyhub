import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getCourseById } from '../constants.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { CalendarDaysIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function SemesterSelectionPage({ resourceType }) {
	const { courseId } = useParams();
	if (!courseId) {
		return <Navigate to="/404" replace />;
	}
	const course = getCourseById(resourceType, courseId);
	if (!course) {
		return <Navigate to="/404" replace />;
	}
	const resourceTypeName = resourceType === 'rgpv-notes' ? "RGPV Notes" : "Shivani Books";
	const breadcrumbItems = [
		{ label: resourceTypeName, path: `/${resourceType}` },
		{ label: course.name }
	];
	return (
		<div className="container mx-auto px-4 py-8">
			<Breadcrumbs items={breadcrumbItems} />
			<div className="text-center mb-12">
				{course.icon && <course.icon className="w-16 h-16 mx-auto mb-4 text-blue-400" />}
				<h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2 font-display">{course.name}</h1>
				<p className="text-lg text-blue-800 mb-4">You are viewing {resourceTypeName.toLowerCase()} for {course.shortName}.</p>
				<p className="text-xl text-blue-600">Please select a semester to view subjects:</p>
			</div>
			<div className="max-w-2xl mx-auto">
				{course.semesters.map((semester) => (
					<Link
						key={semester.id}
						to={`/${resourceType}/${courseId}/${semester.id}`}
						className="group block mb-4 p-6 bg-white/80 backdrop-blur-md border border-blue-100 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-102"
					>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<CalendarDaysIcon className="h-8 w-8 text-blue-400 group-hover:text-blue-600 mr-4 transition-colors" />
								<span className="text-xl font-semibold text-blue-700 group-hover:text-blue-900 transition-colors">
									{semester.name}
								</span>
							</div>
							<ChevronRightIcon className="h-6 w-6 text-blue-300 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1" />
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default SemesterSelectionPage;