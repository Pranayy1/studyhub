import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getCourseById, getSemesterById } from '../constants.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import DocumentViewer from '../components/DocumentViewer.jsx';
import { DocumentTextIcon, ArrowDownTrayIcon, EyeIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { getPdfUrl } from '../utils/driveUtils.js';

function SubjectListPage({ resourceType }) {
	const { courseId, semesterId } = useParams();
	const [selectedDocument, setSelectedDocument] = useState(null);
	const [isViewerOpen, setIsViewerOpen] = useState(false);

	if (!courseId || !semesterId) {
		return <Navigate to="/404" replace />;
	}
	const course = getCourseById(resourceType, courseId);
	if (!course) {
		return <Navigate to="/404" replace />;
	}
	const semester = getSemesterById(course, semesterId);
	if (!semester) {
		return <Navigate to="/404" replace />;
	}

	const resourceTypeName = resourceType === 'rgpv-notes' ? "RGPV Notes" : "Shivani Books";
	const breadcrumbItems = [
		{ label: resourceTypeName, path: `/${resourceType}` },
		{ label: course.name, path: `/${resourceType}/${courseId}` },
		{ label: semester.name }
	];

	const handleViewDocument = (subject) => {
		if (!subject.isAvailable) {
			alert(`PDF for "${subject.name}" is not available yet. Please check back later or contact admin.`);
			return;
		}
		setSelectedDocument(subject);
		setIsViewerOpen(true);
	};

	const handleDownload = async (subject) => {
		if (!subject.isAvailable) {
			alert(`PDF for "${subject.name}" is not available yet.`);
			return;
		}
		
		try {
			// For Google Drive files, open in new tab
			if (subject.pdfSource === 'google-drive' || subject.driveId) {
				const downloadUrl = getPdfUrl(subject, 'download');
				window.open(downloadUrl, '_blank');
				return;
			}
			
			// For local files, trigger download
			const response = await fetch(subject.pdfLink);
			if (!response.ok) throw new Error('PDF not found');
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = `${subject.name}.pdf`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			window.URL.revokeObjectURL(url);
		} catch (error) {
			alert(`Failed to download "${subject.name}". The file may not be available yet.`);
		}
	};
	return (
		<div className="container mx-auto px-4 py-8">
			<Breadcrumbs items={breadcrumbItems} />
			<div className="text-center mb-12">
				{course.icon && <course.icon className="w-12 h-12 mx-auto mb-3 text-blue-400" />}
				<h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2 font-display">
					{course.name} - {semester.name}
				</h1>
				<p className="text-lg text-blue-800">
					Available subjects for {resourceTypeName.toLowerCase()}. Click to view or download.
				</p>
			</div>
			{semester.subjects.length > 0 ? (
				<div className="space-y-6 max-w-3xl mx-auto">
					{semester.subjects.map((subject) => (
						<div
							key={subject.id}
							className={`bg-white/80 backdrop-blur-md border p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-102 ${
								subject.isAvailable 
									? 'border-blue-100 hover:border-blue-200' 
									: 'border-gray-200 hover:border-gray-300 opacity-75'
							}`}
						>
							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
								<div className="mb-4 sm:mb-0 flex-1">
									<div className="flex items-center mb-1">
										<DocumentTextIcon className={`h-6 w-6 mr-2 ${subject.isAvailable ? 'text-blue-400' : 'text-gray-400'}`} />
										<h3 className={`text-xl font-semibold ${subject.isAvailable ? 'text-blue-700' : 'text-gray-600'}`}>
											{subject.name}
										</h3>
										{!subject.isAvailable && (
											<span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
												<ExclamationCircleIcon className="h-4 w-4 mr-1" />
												Coming Soon
											</span>
										)}
									</div>
									{subject.description && (
										<p className={`text-sm mt-1 ${subject.isAvailable ? 'text-blue-800' : 'text-gray-600'}`}>
											{subject.description}
										</p>
									)}
								</div>
								<div className="flex space-x-3 flex-shrink-0">
									<button
										onClick={() => handleViewDocument(subject)}
										disabled={!subject.isAvailable}
										className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white transition-all ${
											subject.isAvailable
												? 'bg-gradient-to-r from-blue-400 to-blue-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400'
												: 'bg-gray-300 cursor-not-allowed'
										}`}
									>
										<EyeIcon className="h-5 w-5 mr-2" /> View
									</button>
									<button
										onClick={() => handleDownload(subject)}
										disabled={!subject.isAvailable}
										className={`inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md transition-colors ${
											subject.isAvailable
												? 'border-blue-100 text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400'
												: 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'
										}`}
									>
										<ArrowDownTrayIcon className="h-5 w-5 mr-2" /> Download
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<p className="text-center text-blue-400 text-xl py-10">
					No subjects listed for this semester yet. Please check back later.
				</p>
			)}

			{/* Document Viewer Modal */}
			<DocumentViewer
				isOpen={isViewerOpen}
				onClose={() => setIsViewerOpen(false)}
				document={selectedDocument}
			/>
		</div>
	);
}

export default SubjectListPage;