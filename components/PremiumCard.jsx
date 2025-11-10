import React, { useState } from 'react';
import { CurrencyDollarIcon, TagIcon } from '@heroicons/react/24/outline';
import UpiPaymentModal from './UpiPaymentModal.jsx';

function PremiumCard({ resource }) {
	const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
	return (
		<div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.08)] hover:border-blue-200 flex flex-col group">
			<img 
				className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" 
				src={resource.imageUrl || 'https://picsum.photos/seed/premium/400/250'} 
				alt={resource.title} 
			/>
			<div className="p-6 flex-grow flex flex-col">
				<h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors mb-2">{resource.title}</h3>
				<p className="text-sm text-gray-600 mb-3 flex-grow">{resource.description}</p>
				<div className="mb-3">
					<span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-700 bg-blue-100 border border-blue-200">
						{resource.category}
					</span>
				</div>
				{resource.tags && resource.tags.length > 0 && (
					<div className="mb-4">
						<div className="flex flex-wrap gap-2">
							{resource.tags.map(tag => (
								<span key={tag} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full flex items-center border border-blue-200">
									<TagIcon className="h-3 w-3 mr-1 text-blue-400" /> {tag}
								</span>
							))}
						</div>
					</div>
				)}
				<div className="mt-auto pt-4 border-t border-gray-200">
					<div className="flex items-center justify-between">
						<p className="text-2xl font-bold text-blue-600">{resource.price}</p>
						<button
							onClick={() => setIsPaymentModalOpen(true)}
							className="bg-gradient-to-r from-blue-400 to-blue-600 hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
						>
							<CurrencyDollarIcon className="h-5 w-5 mr-1.5" />
							Get Access
						</button>
					</div>
				</div>
			</div>

			{/* UPI Payment Modal */}
			<UpiPaymentModal
				isOpen={isPaymentModalOpen}
				onClose={() => setIsPaymentModalOpen(false)}
				resource={resource}
			/>
		</div>
	);
}

export default PremiumCard;