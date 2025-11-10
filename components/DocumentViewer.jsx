import React, { useState } from 'react';
import { XMarkIcon, ArrowDownTrayIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { getPdfUrl, getDriveDownloadUrl, extractDriveFileId } from '../utils/driveUtils.js';

/**
 * DocumentViewer Component
 * Displays a modal with PDF preview and download options
 * Supports both local PDFs and Google Drive files
 */
function DocumentViewer({ isOpen, onClose, document }) {
	if (!isOpen || !document) return null;

	// Get the appropriate URL for viewing
	const viewUrl = getPdfUrl(document, 'view');
	
	const handleDownload = () => {
		// For Google Drive files, open in new tab (Google handles download)
		if (document.pdfSource === 'google-drive' || (document.driveId)) {
			const downloadUrl = getPdfUrl(document, 'download');
			window.open(downloadUrl, '_blank');
		} else {
			// For local files, trigger download
			const link = document.createElement('a');
			link.href = document.pdfLink;
			link.download = `${document.name}.pdf`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div 
			className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4"
			onClick={handleBackdropClick}
		>
			<div className="bg-white rounded-xl shadow-2xl w-full max-w-[95vw] h-[95vh] flex flex-col">
				{/* Header */}
				<div className="flex items-center justify-between p-4 border-b border-gray-200">
					<div className="flex items-center space-x-3">
						<DocumentTextIcon className="h-6 w-6 text-blue-500" />
						<div>
							<h2 className="text-xl font-semibold text-gray-800">{document.name}</h2>
							{document.description && (
								<p className="text-sm text-gray-600">{document.description}</p>
							)}
						</div>
					</div>
					<div className="flex items-center space-x-2">
						<button
							onClick={handleDownload}
							className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
						>
							<ArrowDownTrayIcon className="h-5 w-5 mr-2" />
							Download
						</button>
						<button
							onClick={onClose}
							className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
						>
							<XMarkIcon className="h-6 w-6" />
						</button>
					</div>
				</div>
				
				{/* PDF Viewer */}
				<div className="flex-1 overflow-hidden">
					<iframe
						src={viewUrl}
						className="w-full h-full"
						title={document.name}
						allow="autoplay"
					/>
				</div>
			</div>
		</div>
	);
}

export default DocumentViewer;
