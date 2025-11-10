import React from 'react';
import { XMarkIcon, ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline';

/**
 * UpiPaymentModal Component
 * Displays a modal with UPI QR code and UPI ID for payment
 */
function UpiPaymentModal({ isOpen, onClose, resource }) {
	const [copied, setCopied] = React.useState(false);
	
	// Replace these with your actual UPI details
	const UPI_ID = 'pranayy7024@axl'; // Replace with your actual UPI ID
	const UPI_QR_CODE = 'qr.jpg'; // Replace with your actual QR code image URL
	
	if (!isOpen || !resource) return null;

	const handleCopyUpiId = () => {
		navigator.clipboard.writeText(UPI_ID);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div 
			className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
			onClick={handleBackdropClick}
		>
			<div className="bg-white rounded-xl shadow-2xl w-full max-w-md flex flex-col">
				{/* Header */}
				<div className="flex items-center justify-between p-6 border-b border-gray-200">
					<div>
						<h2 className="text-2xl font-bold text-gray-800">Complete Payment</h2>
						<p className="text-sm text-gray-600 mt-1">{resource.title}</p>
					</div>
					<button
						onClick={onClose}
						className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
					>
						<XMarkIcon className="h-6 w-6" />
					</button>
				</div>
				
				{/* Content */}
				<div className="p-6 space-y-6">
					{/* Price Display */}
					<div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
						<p className="text-sm text-gray-600">Amount to Pay</p>
						<p className="text-3xl font-bold text-blue-600">{resource.price}</p>
					</div>

					{/* QR Code */}
					<div className="text-center">
						<p className="text-sm font-semibold text-gray-700 mb-3">Scan QR Code to Pay</p>
						<div className="inline-block bg-white p-4 rounded-lg border-2 border-gray-200 shadow-md">
							<img 
								src={UPI_QR_CODE} 
								alt="UPI QR Code" 
								className="w-64 h-64 object-contain"
							/>
						</div>
					</div>

					{/* Divider */}
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-300"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-white text-gray-500">OR</span>
						</div>
					</div>

					{/* UPI ID */}
					<div>
						<p className="text-sm font-semibold text-gray-700 mb-2">Pay using UPI ID</p>
						<div className="flex items-center space-x-2">
							<input
								type="text"
								value={UPI_ID}
								readOnly
								className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 font-mono text-sm focus:outline-none"
							/>
							<button
								onClick={handleCopyUpiId}
								className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								{copied ? (
									<>
										<CheckIcon className="h-5 w-5" />
										<span className="text-sm font-medium">Copied!</span>
									</>
								) : (
									<>
										<ClipboardDocumentIcon className="h-5 w-5" />
										<span className="text-sm font-medium">Copy</span>
									</>
								)}
							</button>
						</div>
					</div>

					{/* Instructions */}
					<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
						<p className="text-sm font-semibold text-yellow-800 mb-2">📌 Important Instructions:</p>
						<ul className="text-xs text-yellow-700 space-y-1 list-disc list-inside">
							<li>Complete the payment using UPI</li>
							<li>Take a screenshot of the payment confirmation</li>
							<li>Contact us with your transaction details</li>
							<li>Access will be granted within 24 hours</li>
						</ul>
					</div>
				</div>

				{/* Footer */}
				<div className="p-6 border-t border-gray-200 bg-gray-50">
					<button
						onClick={onClose}
						className="w-full py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}

export default UpiPaymentModal;
