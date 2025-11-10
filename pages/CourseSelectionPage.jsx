import React from 'react';
import { RGPV_COURSES, SHIVANI_COURSES } from '../constants.js';
import CourseCard from '../components/CourseCard.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

function CourseSelectionPage({ resourceType }) {
	const courses = resourceType === 'rgpv-notes' ? RGPV_COURSES : SHIVANI_COURSES;
	const pageTitle = resourceType === 'rgpv-notes' ? "RGPV University Notes" : "Shivani Book PDFs";
	const breadcrumbItems = [
		{ label: pageTitle }
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<Breadcrumbs items={breadcrumbItems} />
			<div className="text-center mb-12">
				<AcademicCapIcon className="w-16 h-16 mx-auto mb-4 text-blue-400" />
				<h1 className="text-4xl font-bold text-blue-700 mb-3 font-display">{pageTitle}</h1>
				<p className="text-lg text-blue-800">Please select your course to access study materials.</p>
			</div>
			{courses.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{courses.map((course) => (
						<CourseCard key={course.id} course={course} resourceType={resourceType} />
					))}
				</div>
			) : (
				<p className="text-center text-blue-400 text-xl">No courses available at the moment.</p>
			)}
		</div>
	);
}

export default CourseSelectionPage;