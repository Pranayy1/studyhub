# Document Management Guide

This guide explains how to add, organize, and manage PDF documents for your study app.

## 📁 Folder Structure

All PDF documents are stored in the `public/documents/` directory with the following structure:

```
public/
└── documents/
    ├── rgpv-notes/
    │   ├── btech-cse/
    │   │   ├── sem-1/
    │   │   ├── sem-2/
    │   │   ├── ... (up to sem-8)
    │   │   └── sem-8/
    │   ├── btech-me/
    │   │   └── ... (same structure)
    │   └── btech-ee/
    │       └── ... (same structure)
    └── shivani-books/
        ├── shivani-btech-cse/
        │   ├── sem-1/
        │   ├── sem-2/
        │   ├── ... (up to sem-8)
        │   └── sem-8/
        ├── shivani-btech-me/
        │   └── ... (same structure)
        └── shivani-btech-ee/
            └── ... (same structure)
```

## 📝 How to Add a New PDF Document

### Step 1: Place the PDF File

1. Navigate to the appropriate folder based on:
   - **Resource Type**: `rgpv-notes` or `shivani-books`
   - **Course**: `btech-cse`, `btech-me`, `btech-ee`, etc.
   - **Semester**: `sem-1`, `sem-2`, ..., `sem-8`

2. Name your PDF file according to the subject ID format:
   ```
   {CoursePrefix}-s{SemesterNumber}-subj{SubjectNumber}.pdf
   ```

   **Examples:**
   - `CSE-s1-subj1.pdf` → CSE Subject 1 for Semester 1
   - `ME-s3-subj4.pdf` → ME Subject 4 for Semester 3
   - `EE-s8-subj2.pdf` → EE Subject 2 for Semester 8

### Step 2: Update constants.js

After placing your PDF file, you need to mark it as available in the data:

1. Open `constants.js`
2. Locate the subject you added the PDF for
3. Set `isAvailable: true` for that subject

**Example:**

```javascript
// Before (PDF not available)
{ 
  id: `CSE-s1-subj1`, 
  name: `CSE Subject 1 (Sem 1)`, 
  description: `Fundamental concepts of CSE Subject 1.`, 
  pdfLink: generatePdfPath('rgpv-notes', 'btech-cse', 'sem-1', 'CSE-s1-subj1'),
  isAvailable: false  // ❌ Not available
}

// After (PDF available)
{ 
  id: `CSE-s1-subj1`, 
  name: `CSE Subject 1 (Sem 1)`, 
  description: `Fundamental concepts of CSE Subject 1.`, 
  pdfLink: generatePdfPath('rgpv-notes', 'btech-cse', 'sem-1', 'CSE-s1-subj1'),
  isAvailable: true  // ✅ Available
}
```

## 🎯 Quick Example: Adding a Full Semester

Let's say you want to add all 5 subjects for B.Tech CSE Semester 1 in RGPV Notes:

### Step 1: Create/Verify the folder exists
```
public/documents/rgpv-notes/btech-cse/sem-1/
```

### Step 2: Add PDF files with correct names
```
CSE-s1-subj1.pdf
CSE-s1-subj2.pdf
CSE-s1-subj3.pdf
CSE-s1-subj4.pdf
CSE-s1-subj5.pdf
```

### Step 3: Update constants.js

Find the semester 1 subjects in the CSE course and set all to `isAvailable: true`:

```javascript
{
  id: `sem-1`,
  name: `Semester 1`,
  subjects: [
    { 
      id: `CSE-s1-subj1`, 
      name: `CSE Subject 1 (Sem 1)`, 
      description: `Fundamental concepts of CSE Subject 1.`, 
      pdfLink: generatePdfPath('rgpv-notes', 'btech-cse', 'sem-1', 'CSE-s1-subj1'),
      isAvailable: true  // ✅ Updated
    },
    { 
      id: `CSE-s1-subj2`, 
      name: `CSE Subject 2 (Sem 1)`, 
      description: `Advanced topics in CSE Subject 2.`, 
      pdfLink: generatePdfPath('rgpv-notes', 'btech-cse', 'sem-1', 'CSE-s1-subj2'),
      isAvailable: true  // ✅ Updated
    },
    // ... and so on for all 5 subjects
  ]
}
```

## 🔄 Bulk Adding Documents

If you want to add documents for multiple courses/semesters:

### PowerShell Script to Create All Folders:
```powershell
# Navigate to your project root
cd "e:\CodeBase\Same ui Work\Studyhub"

# Create all semester folders for all courses
$resourceTypes = @("rgpv-notes", "shivani-books")
$courses = @("btech-cse", "btech-me", "btech-ee", "shivani-btech-cse", "shivani-btech-me", "shivani-btech-ee")

foreach ($type in $resourceTypes) {
    foreach ($course in $courses) {
        for ($i=1; $i -le 8; $i++) {
            $path = "public\documents\$type\$course\sem-$i"
            New-Item -ItemType Directory -Force -Path $path
        }
    }
}
```

## 📚 Customizing Subject Names

To customize subject names (e.g., "Data Structures" instead of "CSE Subject 1"):

1. Open `constants.js`
2. Modify the `commonSemesters` function or update individual subject entries
3. Change the `name` and `description` fields as needed

**Example:**

```javascript
{ 
  id: `CSE-s1-subj1`, 
  name: `Data Structures and Algorithms`,  // ✅ Custom name
  description: `Learn fundamental data structures and algorithm design.`, 
  pdfLink: generatePdfPath('rgpv-notes', 'btech-cse', 'sem-1', 'CSE-s1-subj1'),
  isAvailable: true
}
```

## 🎨 Features

### For Students:
- **View PDFs**: Click "View" to open PDFs in a modal viewer
- **Download PDFs**: Click "Download" to save PDFs locally
- **Visual Indicators**: "Coming Soon" badge for unavailable documents
- **Disabled Buttons**: Non-available documents have greyed-out buttons

### For Administrators:
- **Easy Management**: Simply add PDF files and toggle `isAvailable`
- **Organized Structure**: Clear folder hierarchy
- **Scalable**: Supports unlimited courses, semesters, and subjects

## ⚠️ Important Notes

1. **File Naming**: Always follow the naming convention `{CoursePrefix}-s{Sem}-subj{Num}.pdf`
2. **File Size**: Keep PDF files reasonably sized (< 20MB recommended)
3. **Update After Upload**: Always set `isAvailable: true` after uploading a PDF
4. **Testing**: Test the view and download buttons after adding new PDFs

## 🔍 Troubleshooting

### Problem: PDF not showing
- ✅ Check if file name matches the subject ID
- ✅ Verify `isAvailable: true` is set in constants.js
- ✅ Ensure PDF is in the correct folder path
- ✅ Clear browser cache and reload

### Problem: Download not working
- ✅ Check browser console for errors
- ✅ Verify PDF file is not corrupted
- ✅ Check file permissions

## 📊 Example Data Structure

Here's how 3 courses × 8 semesters × 5 subjects looks:

```
Total Documents = 3 courses × 8 semesters × 5 subjects = 120 PDFs per resource type
Total for both RGPV Notes and Shivani Books = 240 PDFs
```

## 🚀 Future Enhancements

Consider implementing:
- Bulk upload interface
- Admin dashboard for managing PDFs
- PDF compression before upload
- Search functionality across all PDFs
- Tags and categories for better organization
- PDF preview thumbnails

---

**Last Updated:** November 9, 2025  
**Maintained By:** Study App Development Team
