import React from 'react';
import { COMPETITIVE_EXAMS_DATA, WEBSITE_NAME } from '../constants.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { ArrowTopRightOnSquareIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

function CompetitiveExamsPage() {
	const breadcrumbItems = [
		{ label: "Competitive Exams" }
	];
	return (
		<div className="container mx-auto px-4 py-8">
			<Breadcrumbs items={breadcrumbItems} />
			<div className="text-center mb-12">
				<AcademicCapIcon className="w-16 h-16 mx-auto mb-4 text-blue-400"/>
				<h1 className="text-4xl font-bold text-blue-700 mb-3 font-display">Competitive Exam Preparation</h1>
				<p className="text-lg text-blue-800">
					Find resources and information for popular competitive exams. {WEBSITE_NAME} is here to help you succeed.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{COMPETITIVE_EXAMS_DATA.map((exam) => (
					<div 
						key={exam.id} 
						className="bg-white/80 backdrop-blur-lg border border-blue-100 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.08)] hover:border-blue-200 flex flex-col group"
					>
						<div className="p-6 flex-grow">
							<div className="flex items-center mb-4">
								{exam.icon && <exam.icon className="h-10 w-10 text-blue-400 group-hover:text-blue-600 mr-3 transition-colors" />}
								<h2 className="text-2xl font-semibold text-blue-700 group-hover:text-blue-900 transition-colors">{exam.name}</h2>
							</div>
							<p className="text-blue-800 text-sm mb-4 flex-grow">{exam.description}</p>
						</div>
						<div className="p-6 bg-blue-50 border-t border-blue-100">
							{exam.resourcesLink && exam.resourcesLink !== "#" ? (
								<a
									href={exam.resourcesLink}
									target="_blank"
									rel="noopener noreferrer"
									className="w-full flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 hover:opacity-90 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group"
								>
									Explore Resources
									<ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
								</a>
							) : (
								 <button
									onClick={() => alert(`Resources for ${exam.name} are coming soon!`)}
									className="w-full flex items-center justify-center bg-blue-100 text-blue-400 font-medium py-2.5 px-4 rounded-lg cursor-not-allowed"
									disabled
								>
									Resources Coming Soon
								</button>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default CompetitiveExamsPage;