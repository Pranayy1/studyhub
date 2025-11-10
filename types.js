/**
 * @typedef {Object} Subject
 * @property {string} id
 * @property {string} name
 * @property {string=} description
 * @property {string=} pdfLink
 * @property {boolean=} isAvailable - Indicates if the PDF document is available
 * @property {string=} pdfSource - Source of PDF: 'local' or 'google-drive'
 * @property {string=} driveId - Google Drive file ID (only if pdfSource is 'google-drive')
 */

/**
 * @typedef {Object} Semester
 * @property {string} id
 * @property {string} name
 * @property {Subject[]} subjects
 */

export const Specialization = {
	AIML: "AI/ML",
	CyberSecurity: "Cyber Security",
	DataScience: "Data Science",
	None: "Core"
};

/**
 * @typedef {Object} Course
 * @property {string} id
 * @property {string} name
 * @property {string} shortName
 * @property {string} description
 * @property {any=} icon
 * @property {string[]=} specializations
 * @property {Semester[]} semesters
 */

/**
 * @typedef {Object} PremiumResource
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} category
 * @property {string} price
 * @property {string=} imageUrl
 * @property {string[]} tags
 */

/**
 * @typedef {Object} NavLink
 * @property {string} label
 * @property {string} path
 * @property {boolean=} isExternal
 */

export const ResourceType = {
	RGPV_NOTES: "rgpv-notes",
	SHIVANI_BOOKS: "shivani-books"
};

/**
 * @typedef {Object} CompetitiveExam
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {any=} icon
 * @property {string=} resourcesLink
 */

/**
 * @typedef {Object} BreadcrumbItem
 * @property {string} label
 * @property {string=} path
 */