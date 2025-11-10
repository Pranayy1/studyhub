import React from 'react';

function Logo({ className }) {
	return (
		<svg 
			xmlns="http://www.w3.org/2000/svg" 
			viewBox="0 0 100 100" 
			className={className || "h-10 w-10"}
			fill="none"
			stroke="currentColor"
			strokeWidth="8"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>StudyHub Logo</title>
			{/* S */}
			<path d="M30 40 Q20 30 30 20 Q40 10 50 20 Q60 30 50 40 Q40 50 50 60 Q60 70 70 60 Q80 50 70 40" />
			{/* H */}
			<path d="M80 20 V80 M80 50 H95 M95 20 V80" />
		</svg>
	);
}

export default Logo;