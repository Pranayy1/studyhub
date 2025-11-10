import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';
import { NAV_LINKS } from '../constants.js';
import { ArrowRightCircleIcon, BookOpenIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/24/outline';

function HomePage() {
	const quickLinks = NAV_LINKS.filter(link => link.path !== "/");

	const featureIcons = {
		"/rgpv-notes": BookOpenIcon,
		"/shivani-books": BookOpenIcon,
		"/competitive-exams": AcademicCapIcon,
		"/premium-resources": StarIcon,
	};

	return (
		<div className="space-y-16 sm:space-y-20">
			<HeroSection />

			<section className="py-12">
				<h2 className="text-3xl font-bold text-center text-blue-700 mb-12 font-display">Explore Our Resources</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{quickLinks.map((link) => {
						const Icon = featureIcons[link.path] || ArrowRightCircleIcon;
						return (
						<Link
							key={link.label}
							to={link.path}
							className="group block p-6 bg-white/80 backdrop-blur-lg border border-blue-100 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:border-blue-200"
						>
							<Icon className="h-12 w-12 text-blue-400 group-hover:text-blue-600 mb-4 transition-colors" />
							<h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 mb-2 transition-colors">{link.label}</h3>
							<p className="text-gray-600 group-hover:text-blue-400 text-sm transition-colors">
								Access {link.label.toLowerCase()} and study materials.
							</p>
							<span className="mt-4 inline-flex items-center text-sm font-medium text-blue-700 group-hover:text-blue-400 transition-colors">
								Go to section <ArrowRightCircleIcon className="ml-1.5 h-5 w-5" />
							</span>
						</Link>
					)})}
				</div>
			</section>

			<section className="py-12">
				<div className="max-w-5xl mx-auto text-center p-8 sm:p-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-2xl">
						<h2 className="text-3xl font-bold text-blue-700 mb-6 font-display">Why Choose StudyHub?</h2>
						<p className="text-lg text-blue-800 mb-10">
								We provide curated, high-quality educational content designed for your success. 
								Whether you're a university student or preparing for competitive exams, StudyHub has you covered.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
								{[
									{ title: "Comprehensive Notes", desc: "Detailed notes for RGPV and Shivani books covering all semesters." },
									{ title: "Exam Prep", desc: "Resources for GATE, JEE and other competitive examinations." },
									{ title: "Premium Content", desc: "Exclusive courses and materials for specialized learning." }
								].map(item => (
									<div key={item.title} className="bg-white/60 p-6 rounded-lg backdrop-blur-sm border border-blue-100 hover:bg-blue-50 transition-colors">
											<h4 className="font-semibold text-blue-700 text-lg mb-2">{item.title}</h4>
											<p className="text-blue-800 text-sm">{item.desc}</p>
									</div>
								))}
						</div>
				</div>
			</section>
		</div>
	);
}

export default HomePage;