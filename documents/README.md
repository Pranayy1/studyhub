# 📚 Documents Folder

This folder contains all PDF documents organized by resource type, course, and semester.

## 📁 Folder Structure

```
documents/
├── rgpv-notes/
│   ├── btech-cse/
│   │   ├── sem-1/
│   │   ├── sem-2/
│   │   ├── ... (up to sem-8)
│   │   └── sem-8/
│   ├── btech-me/
│   └── btech-ee/
└── shivani-books/
    ├── shivani-btech-cse/
    ├── shivani-btech-me/
    └── shivani-btech-ee/
```

## 📝 File Naming Convention

PDF files must follow this naming pattern:
```
{CoursePrefix}-s{SemesterNumber}-subj{SubjectNumber}.pdf
```

### Examples:
- `CSE-s1-subj1.pdf` - CSE Subject 1, Semester 1
- `ME-s4-subj3.pdf` - ME Subject 3, Semester 4
- `EE-s8-subj5.pdf` - EE Subject 5, Semester 8

## 🚀 How to Add a PDF

1. **Place the PDF** in the appropriate folder
2. **Name it correctly** following the convention above
3. **Update constants.js** - Set `isAvailable: true` for that subject
4. **Test** - Reload the website and test View/Download buttons

## 📖 Full Documentation

For complete instructions, see: `DOCUMENT_MANAGEMENT_GUIDE.md` in the project root.

## 🛠️ Helper Tools

- **document-upload-helper.html** - Interactive tool to find the correct path and filename
- **create-document-folders.ps1** - Script to create all folder structures
