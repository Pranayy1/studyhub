/**
 * Google Drive PDF Utility Functions
 * Handles conversion of Google Drive links to embeddable and downloadable URLs
 */

/**
 * Extracts the file ID from various Google Drive URL formats
 * @param {string} url - Google Drive URL
 * @returns {string|null} - File ID or null if not found
 */
export const extractDriveFileId = (url) => {
	if (!url) return null;
	
	// If it's already just an ID (no slashes), return it
	if (!url.includes('/') && !url.includes('http')) {
		return url;
	}
	
	// Pattern 1: https://drive.google.com/file/d/FILE_ID/view
	const pattern1 = /\/file\/d\/([a-zA-Z0-9_-]+)/;
	const match1 = url.match(pattern1);
	if (match1) return match1[1];
	
	// Pattern 2: https://drive.google.com/open?id=FILE_ID
	const pattern2 = /[?&]id=([a-zA-Z0-9_-]+)/;
	const match2 = url.match(pattern2);
	if (match2) return match2[1];
	
	// Pattern 3: https://drive.google.com/uc?id=FILE_ID
	const pattern3 = /\/uc\?id=([a-zA-Z0-9_-]+)/;
	const match3 = url.match(pattern3);
	if (match3) return match3[1];
	
	return null;
};

/**
 * Converts Google Drive file ID to embeddable preview URL
 * @param {string} fileId - Google Drive file ID
 * @returns {string} - Embeddable URL for iframe
 */
export const getDriveEmbedUrl = (fileId) => {
	return `https://drive.google.com/file/d/${fileId}/preview`;
};

/**
 * Converts Google Drive file ID to direct download URL
 * @param {string} fileId - Google Drive file ID
 * @returns {string} - Direct download URL
 */
export const getDriveDownloadUrl = (fileId) => {
	return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

/**
 * Converts Google Drive file ID to view-only URL (opens in new tab)
 * @param {string} fileId - Google Drive file ID
 * @returns {string} - View URL
 */
export const getDriveViewUrl = (fileId) => {
	return `https://drive.google.com/file/d/${fileId}/view`;
};

/**
 * Checks if a URL is a Google Drive link
 * @param {string} url - URL to check
 * @returns {boolean} - True if it's a Google Drive link
 */
export const isGoogleDriveUrl = (url) => {
	if (!url) return false;
	return url.includes('drive.google.com') || url.includes('docs.google.com');
};

/**
 * Gets the appropriate PDF URL based on source type
 * @param {Object} subject - Subject object with pdfLink, pdfSource, driveId
 * @param {string} type - 'view' or 'download'
 * @returns {string} - Appropriate URL for the action
 */
export const getPdfUrl = (subject, type = 'view') => {
	if (!subject) return '#';
	
	// If pdfSource is explicitly set to 'google-drive'
	if (subject.pdfSource === 'google-drive' && subject.driveId) {
		return type === 'download' 
			? getDriveDownloadUrl(subject.driveId)
			: getDriveEmbedUrl(subject.driveId);
	}
	
	// If pdfLink is a Google Drive URL, extract ID and convert
	if (subject.pdfLink && isGoogleDriveUrl(subject.pdfLink)) {
		const fileId = extractDriveFileId(subject.pdfLink);
		if (fileId) {
			return type === 'download'
				? getDriveDownloadUrl(fileId)
				: getDriveEmbedUrl(fileId);
		}
	}
	
	// Default to local file path
	return subject.pdfLink || '#';
};

/**
 * Validates if a Google Drive file ID is properly formatted
 * @param {string} fileId - File ID to validate
 * @returns {boolean} - True if valid format
 */
export const isValidDriveFileId = (fileId) => {
	if (!fileId) return false;
	// Google Drive file IDs are typically 25-50 characters, alphanumeric with - and _
	return /^[a-zA-Z0-9_-]{25,50}$/.test(fileId);
};

/**
 * Creates a shareable subject object for Google Drive
 * @param {string} id - Subject ID
 * @param {string} name - Subject name
 * @param {string} description - Subject description
 * @param {string} driveIdOrUrl - Google Drive file ID or full URL
 * @returns {Object} - Subject object
 */
export const createDriveSubject = (id, name, description, driveIdOrUrl) => {
	const driveId = extractDriveFileId(driveIdOrUrl) || driveIdOrUrl;
	
	return {
		id,
		name,
		description,
		pdfLink: getDriveViewUrl(driveId),
		pdfSource: 'google-drive',
		driveId: driveId,
		isAvailable: true
	};
};

/**
 * Creates a shareable subject object for local file
 * @param {string} id - Subject ID
 * @param {string} name - Subject name
 * @param {string} description - Subject description
 * @param {string} localPath - Local file path
 * @param {boolean} isAvailable - Whether the file is available
 * @returns {Object} - Subject object
 */
export const createLocalSubject = (id, name, description, localPath, isAvailable = false) => {
	return {
		id,
		name,
		description,
		pdfLink: localPath,
		pdfSource: 'local',
		isAvailable
	};
};
