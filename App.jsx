import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import CourseSelectionPage from './pages/CourseSelectionPage.jsx';
import SemesterSelectionPage from './pages/SemesterSelectionPage.jsx';
import SubjectListPage from './pages/SubjectListPage.jsx';
import CompetitiveExamsPage from './pages/CompetitiveExamsPage.jsx';
import PremiumPage from './pages/PremiumPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { ResourceType } from './types.js';

function App() {
	return (
		<HashRouter>
			<div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
				<Navbar />
				<main className="flex-grow container mx-auto px-4 py-10 sm:py-12">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/rgpv-notes" element={<CourseSelectionPage resourceType={ResourceType.RGPV_NOTES} />} />
						<Route path="/rgpv-notes/:courseId" element={<SemesterSelectionPage resourceType={ResourceType.RGPV_NOTES} />} />
						<Route path="/rgpv-notes/:courseId/:semesterId" element={<SubjectListPage resourceType={ResourceType.RGPV_NOTES} />} />
						<Route path="/shivani-books" element={<CourseSelectionPage resourceType={ResourceType.SHIVANI_BOOKS} />} />
						<Route path="/shivani-books/:courseId" element={<SemesterSelectionPage resourceType={ResourceType.SHIVANI_BOOKS} />} />
						<Route path="/shivani-books/:courseId/:semesterId" element={<SubjectListPage resourceType={ResourceType.SHIVANI_BOOKS} />} />
						<Route path="/competitive-exams" element={<CompetitiveExamsPage />} />
						<Route path="/premium-resources" element={<PremiumPage />} />
						<Route path="/404" element={<NotFoundPage />} />
						<Route path="*" element={<Navigate replace to="/404" />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</HashRouter>
	);
}

export default App;