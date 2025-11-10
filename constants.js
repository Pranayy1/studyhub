import { ResourceType, Specialization } from './types.js';
import { AcademicCapIcon, BookOpenIcon, CpuChipIcon, ShieldCheckIcon, CircleStackIcon, CodeBracketSquareIcon, CurrencyDollarIcon, LightBulbIcon, PencilSquareIcon, ServerStackIcon } from '@heroicons/react/24/outline';

// Common semester structure with variable subjects per semester
// Semesters 1-4: 5 subjects, Semesters 5-6: 4 subjects, Semesters 7-8: 3 subjects
// All subjects use Google Drive - just add your Drive file ID and set isAvailable to true
const commonSemesters = (coursePrefix, courseId, resourceType = 'rgpv-notes') => Array.from({ length: 8 }, (_, i) => {
	const semesterId = `sem-${i + 1}`;
	const semesterNum = i + 1;
	
	// Determine number of subjects based on semester
	let numSubjects = 5; // Default for semesters 1-4
	if (semesterNum === 5 || semesterNum === 6) {
		numSubjects = 4;
	} else if (semesterNum === 7 || semesterNum === 8) {
		numSubjects = 3;
	}
	
	// Generate subjects array based on numSubjects
	const subjects = Array.from({ length: numSubjects }, (_, j) => ({
		id: `${coursePrefix}-s${semesterNum}-subj${j+1}`, 
		name: `${coursePrefix} Subject ${j+1} (Sem ${semesterNum})`, 
		description: `Course material for ${coursePrefix} Subject ${j+1}.`, 
		pdfLink: '', // Add Google Drive link here
		pdfSource: 'google-drive',
		driveId: '', // Add Google Drive File ID here
		isAvailable: false // Set to true when you add the Drive link
	}));
	
	return {
		id: semesterId,
		name: `Semester ${semesterNum}`,
		subjects
	};
});

export const RGPV_COURSES = [
	{
		id: "btech-cse",
		name: "B.Tech Computer Science & Engineering",
		shortName: "CSE",
		description: "Explore the world of algorithms, software development, and cutting-edge computing technologies.",
		icon: CpuChipIcon,
		specializations: [Specialization.AIML, Specialization.CyberSecurity, Specialization.DataScience, Specialization.None],
		semesters: (() => {
			const semesters = commonSemesters("CSE", "btech-cse", "rgpv-notes");
			// Override specific subjects with Google Drive links
			
			// Semester 1 subjects
			semesters[0].subjects[0] = { 
				id: 'CSE-s1-subj1', 
				name: 'Mathematics-I', 
				description: 'Engineering Mathematics-I', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[0].subjects[1] = { 
				id: 'CSE-s1-subj2', 
				name: 'Physics', 
				description: 'Engineering Physics', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[0].subjects[2] = { 
				id: 'CSE-s1-subj3', 
				name: 'Basic Electrical Engineering', 
				description: 'Fundamentals of Electrical Engineering', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[0].subjects[3] = { 
				id: 'CSE-s1-subj4', 
				name: 'Engineering Mechanics', 
				description: 'Basic Engineering Mechanics', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[0].subjects[4] = { 
				id: 'CSE-s1-subj5', 
				name: 'English for Communication', 
				description: 'Communication Skills', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};

			// Semester 2 subjects
			semesters[1].subjects[0] = { 
				id: 'CSE-s2-subj1', 
				name: 'Mathematics-II', 
				description: 'Engineering Mathematics-II', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[1].subjects[1] = { 
				id: 'CSE-s2-subj2', 
				name: 'Chemistry', 
				description: 'Engineering Chemistry', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[1].subjects[2] = { 
				id: 'CSE-s2-subj3', 
				name: 'Basic Electronics Engineering', 
				description: 'Fundamentals of Electronics', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[1].subjects[3] = { 
				id: 'CSE-s2-subj4', 
				name: 'Engineering Graphics', 
				description: 'Technical Drawing', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[1].subjects[4] = { 
				id: 'CSE-s2-subj5', 
				name: 'Programming for Problem Solving', 
				description: 'C Programming', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};

			// Semester 3 subjects
			semesters[2].subjects[0] = { 
				id: 'CSE-s3-subj1', 
				name: 'Mathematics-III', 
				description: 'Engineering Mathematics-III', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[2].subjects[1] = { 
				id: 'CSE-s3-subj2', 
				name: 'Data Structures', 
				description: 'Data Structures and Algorithms', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[2].subjects[2] = { 
				id: 'CSE-s3-subj3', 
				name: 'Digital Logic & Computer Organization', 
				description: 'Computer Organization', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[2].subjects[3] = { 
				id: 'CSE-s3-subj4', 
				name: 'Discrete Mathematics', 
				description: 'Discrete Structures', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[2].subjects[4] = { 
				id: 'CSE-s3-subj5', 
				name: 'Object Oriented Programming', 
				description: 'OOP with C++/Java', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};

			// Semester 4 subjects
			semesters[3].subjects[0] = { 
				id: 'CSE-s4-subj1', 
				name: 'Computer Architecture', 
				description: 'Advanced Computer Architecture', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[3].subjects[1] = { 
				id: 'CSE-s4-subj2', 
				name: 'Operating Systems', 
				description: 'Operating System Concepts', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[3].subjects[2] = { 
				id: 'CSE-s4-subj3', 
				name: 'Microprocessor & Interfacing', 
				description: '8085/8086 Microprocessor', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[3].subjects[3] = { 
				id: 'CSE-s4-subj4', 
				name: 'Design & Analysis of Algorithms', 
				description: 'Algorithm Design', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[3].subjects[4] = { 
				id: 'CSE-s4-subj5', 
				name: 'Probability & Statistics', 
				description: 'Probability and Statistics', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};

			// Semester 5 subjects
			semesters[4].subjects[0] = { 
				id: 'CSE-s1-subj2', 
				name: 'Toc', 
				description: 'Notes for Theory of Computation', 
				pdfLink: 'https://drive.google.com/file/d/1Do3ncNCqws9z1r9u6cgTNelb_WFaL5GV/view',
				pdfSource: 'google-drive',
				driveId: '1Do3ncNCqws9z1r9u6cgTNelb_WFaL5GV',
				isAvailable: true
			};
			semesters[4].subjects[1] = { 
				id: 'CSE-s1-subj2', 
				name: 'Database Management System', 
				description: 'Notes for Database Management System', 
				pdfLink: 'https://drive.google.com/file/d/1z9aq6uP_S15lvKj81G-jphxGPCfRCQoh/view',
				pdfSource: 'google-drive',
				driveId: '1z9aq6uP_S15lvKj81G-jphxGPCfRCQoh',
				isAvailable: true
			};
			semesters[4].subjects[2] = { 
				id: 'CSE-s1-subj2', 
				name: 'Data Analytics', 
				description: 'Notes for Data Analytics', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
				semesters[4].subjects[3] = { 
				id: 'CSE-s1-subj2', 
				name: 'Internet & Web Technology', 
				description: 'Notes for Internet & Web Technology', 
				pdfLink: 'https://drive.google.com/file/d/1AOQ4QE9G7g6eBeP8OUxoPTJd3JEnLAo1/view',
				pdfSource: 'google-drive',
				driveId: '1AOQ4QE9G7g6eBeP8OUxoPTJd3JEnLAo1',
				isAvailable: true
			};
				semesters[5].subjects[0] = { 
				id: 'CSE-s1-subj2', 
				name: 'Machine Learning', 
				description: 'Notes for Machine Learning', 
				pdfLink: 'https://drive.google.com/file/d/1aeAN6ZAaQdAIlAy-5LczOX1SUwXFiGcq/view',
				pdfSource: 'google-drive',
				driveId: '1aeAN6ZAaQdAIlAy-5LczOX1SUwXFiGcq',
				isAvailable: true
			};
				semesters[5].subjects[1] = { 
				id: 'CSE-s1-subj2', 
				name: 'Computer Networks', 
				description: 'Notes for Computer Networks', 
				pdfLink: 'https://drive.google.com/file/d/1oYdEVVsqVZCq2qPZfZxvBPK0edDZP6Zp/view',
				pdfSource: 'google-drive',
				driveId: '1oYdEVVsqVZCq2qPZfZxvBPK0edDZP6Zp',
				isAvailable: true
			};
	semesters[5].subjects[2] = { 
				id: 'CSE-s1-subj2', 
				name: 'Compiler Design', 
				description: 'Notes for Compiler Design', 
				pdfLink: 'https://drive.google.com/file/d/1FoZjfbkOzQatH9tebljf4bF7uBJlx_Wn/view',
				pdfSource: 'google-drive',
				driveId: '1FoZjfbkOzQatH9tebljf4bF7uBJlx_Wn',
				isAvailable: true
			};
			semesters[5].subjects[3] = { 
				id: 'CSE-s1-subj2', 
				name: 'Project Management', 
				description: 'Notes for Project Management', 
				pdfLink: 'https://drive.google.com/file/d/10LC2GQSHbyNaP-xLR3-XRMCQ4o2amOzx/view',
				pdfSource: 'google-drive',
				driveId: '10LC2GQSHbyNaP-xLR3-XRMCQ4o2amOzx',
				isAvailable: true
			};

			// Semester 7 subjects
			semesters[6].subjects[0] = { 
				id: 'CSE-s7-subj1', 
				name: 'Cloud Computing', 
				description: 'Cloud Computing Technologies', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[6].subjects[1] = { 
				id: 'CSE-s7-subj2', 
				name: 'Artificial Intelligence', 
				description: 'AI Fundamentals', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[6].subjects[2] = { 
				id: 'CSE-s7-subj3', 
				name: 'Mobile Application Development', 
				description: 'Android/iOS Development', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};

			// Semester 8 subjects
			semesters[7].subjects[0] = { 
				id: 'CSE-s8-subj1', 
				name: 'Big Data Analytics', 
				description: 'Big Data Processing', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[7].subjects[1] = { 
				id: 'CSE-s8-subj2', 
				name: 'Internet of Things', 
				description: 'IoT Technologies', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};
			semesters[7].subjects[2] = { 
				id: 'CSE-s8-subj3', 
				name: 'Blockchain Technology', 
				description: 'Blockchain Fundamentals', 
				pdfLink: 'https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view',
				pdfSource: 'google-drive',
				driveId: '1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93',
				isAvailable: true
			};

			return semesters;
		})()
	},
	{
		id: "btech-me",
		name: "B.Tech Mechanical Engineering",
		shortName: "ME",
		description: "Delve into mechanics, thermodynamics, and the design of mechanical systems.",
		icon: ServerStackIcon,
		semesters: commonSemesters("ME", "btech-me", "rgpv-notes")
	},
	{
		id: "btech-ee",
		name: "B.Tech Electrical Engineering",
		shortName: "EE",
		description: "Master circuits, power systems, and electronics with a focus on electrical engineering.",
		icon: LightBulbIcon,
		semesters: commonSemesters("EE", "btech-ee", "rgpv-notes")
	},
];

export const SHIVANI_COURSES = [
	{
		id: "shivani-btech-cse",
		name: "B.Tech Computer Science & Engineering",
		shortName: "CSE",
		description: "Explore the world of algorithms, software development, and cutting-edge computing technologies.",
		icon: CpuChipIcon,
		specializations: [Specialization.AIML, Specialization.CyberSecurity, Specialization.DataScience, Specialization.None],
		semesters: (() => {
			const semesters = commonSemesters("CSE", "shivani-btech-cse", "shivani-books");
			// Override specific subjects with Google Drive links
			semesters[4].subjects[0] = { 
				id: 'CSE-s1-subj2', 
				name: 'Theory of Computation Shivani', 
				description: 'Shivani of toc', 
				pdfLink: 'https://drive.google.com/file/d/1JzgOmQKmvJD2K13l8e8BWSwgvBD5xDTq/view',
				pdfSource: 'google-drive',
				driveId: '1JzgOmQKmvJD2K13l8e8BWSwgvBD5xDTq',
				isAvailable: true
			};
			semesters[4].subjects[1] = { 
				id: 'CSE-s1-subj2', 
				name: 'Database Management System Shivani', 
				description: 'Shivani of DBMS', 
				pdfLink: 'https://drive.google.com/file/d/18uniK_WRHkbCwgTYLxaSz4Reoixx0Ips/view',
				pdfSource: 'google-drive',
				driveId: '18uniK_WRHkbCwgTYLxaSz4Reoixx0Ips',
				isAvailable: true
			};
			semesters[4].subjects[2] = { 
				id: 'CSE-s1-subj2', 
				name: 'Data Analytics Shivani', 
				description: 'Shivani of Data Analytics', 
				pdfLink: 'https://drive.google.com/file/d/1Mlj8TiZW6TbZysFMi9-wtAxIN9eQphmF/view',
				pdfSource: 'google-drive',
				driveId: '1Mlj8TiZW6TbZysFMi9-wtAxIN9eQphmF',
				isAvailable: true
			};
			semesters[4].subjects[3] = { 
				id: 'CSE-s1-subj2', 
				name: 'Internet & Web Technology Shivani', 
				description: 'Shivani of Internet & Web Technology', 
				pdfLink: 'https://drive.google.com/file/d/11_4lWx3gFtYAdDlgaElxrlySsH0ooyhM/view',
				pdfSource: 'google-drive',
				driveId: '11_4lWx3gFtYAdDlgaElxrlySsH0ooyhM',
				isAvailable: true
			};
			return semesters;
		})()
	},
	{
		id: "shivani-btech-me",
		name: "B.Tech Mechanical Engineering",
		shortName: "ME",
		description: "Delve into mechanics, thermodynamics, and the design of mechanical systems.",
		icon: ServerStackIcon,
		semesters: commonSemesters("ME", "shivani-btech-me", "shivani-books")
	},
	{
		id: "shivani-btech-ee",
		name: "B.Tech Electrical Engineering",
		shortName: "EE",
		description: "Master circuits, power systems, and electronics with a focus on electrical engineering.",
		icon: LightBulbIcon,
		semesters: commonSemesters("EE", "shivani-btech-ee", "shivani-books")
	},
];

export const COMPETITIVE_EXAMS_DATA = [
	{
		id: "gate",
		name: "GATE (Graduate Aptitude Test in Engineering)",
		description: "A national-level examination for M.E./M.Tech admissions and PSU recruitment.",
		icon: AcademicCapIcon,
		resourcesLink: "https://www.geeksforgeeks.org/gate/gate-cs-notes-gq/"
	},
	{
		id: "jee",
		name: "JEE (Joint Entrance Examination)",
		description: "For admissions to various undergraduate engineering programs (IITs, NITs, etc.).",
		icon: PencilSquareIcon,
		resourcesLink: "https://www.jeearchive.in/"
	},
	{
		id: "upsc",
		name: "UPSC Civil Services",
		description: "A nationwide competitive examination for recruitment to various Civil Services of India.",
		icon: BookOpenIcon,
		resourcesLink: "https://upscpdf.com/#gsc.tab=0"
	}
];

export const PREMIUM_RESOURCES_DATA = [
	{
		id: "ceh-v12",
		title: "CEH v12 Full Module Pack",
		description: "Comprehensive Certified Ethical Hacker (CEH) v12 course materials, labs, and tools.",
		category: "Cyber Security",
		price: "₹4999",
		imageUrl: "https://picsum.photos/seed/ceh/400/250",
		tags: ["Ethical Hacking", "CEH", "Security"]
	},
	{
		id: "apna-college-dsa",
		title: "Apna College - Complete DSA Bootcamp",
		description: "Master Data Structures and Algorithms with this intensive bootcamp from Apna College.",
		category: "Programming",
		price: "₹2999",
		imageUrl: "https://picsum.photos/seed/dsabootcamp/400/250",
		tags: ["DSA", "Apna College", "Coding"]
	},
	{
		id: "advanced-ml-bundle",
		title: "Advanced Machine Learning Bundle",
		description: "Deep dive into advanced ML concepts, including Deep Learning and NLP, with practical projects.",
		category: "AI/ML",
		price: "₹7999",
		imageUrl: "https://picsum.photos/seed/mlbundle/400/250",
		tags: ["Machine Learning", "AI", "Deep Learning"]
	},
	{
		id: "fullstack-dev-mastery",
		title: "Full-Stack Web Development Mastery",
		description: "Become a full-stack developer with comprehensive training in MERN stack and more.",
		category: "Web Development",
		price: "₹6500",
		imageUrl: "https://picsum.photos/seed/fullstack/400/250",
		tags: ["Web Dev", "MERN", "Full Stack"]
	}
];

export const NAV_LINKS = [
	{ label: "Home", path: "/" },
	{ label: "RGPV Notes", path: `/${ResourceType.RGPV_NOTES}` },
	{ label: "Shivani Books", path: `/${ResourceType.SHIVANI_BOOKS}` },
	{ label: "Competitive Exams", path: "/competitive-exams" },
	{ label: "Premium Resources", path: "/premium-resources" },
];

export const WEBSITE_NAME = "StudyHub";

export const getCourseById = (resourceType, courseId) => {
	const courses = resourceType === ResourceType.RGPV_NOTES ? RGPV_COURSES : SHIVANI_COURSES;
	return courses.find(course => course.id === courseId);
};

export const getSemesterById = (course, semesterId) => {
	return course.semesters.find(sem => sem.id === semesterId);
};

export const SPECIALIZATION_ICONS = {
	[Specialization.AIML]: CpuChipIcon,
	[Specialization.CyberSecurity]: ShieldCheckIcon,
	[Specialization.DataScience]: CircleStackIcon,
	[Specialization.None]: CodeBracketSquareIcon
};