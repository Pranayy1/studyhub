# 🎓 Study App - PDF Management System

A comprehensive study resource application with PDF document management for RGPV Notes and Shivani Books.

## 📚 Features

- **240 PDF Document Slots**: Support for 3 courses × 8 semesters × 5 subjects × 2 resource types
- **Modal PDF Viewer**: View PDFs inline without leaving the app
- **Download Functionality**: One-click PDF downloads
- **Visual Availability Indicators**: Clear status for available/unavailable documents
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Organized Structure**: Intuitive navigation through courses and semesters

## 🚀 Quick Start

### Prerequisites
- Node.js

### Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the app:**
   ```bash
   npm run dev
   ```

3. **Access the app:**
   Open your browser to `http://localhost:5173` (or the port shown in terminal)

## 📖 Documentation

**Start here:** [INDEX.md](./INDEX.md) - Complete documentation index

### Quick Links:
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Cheat sheet for adding PDFs
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - System overview
- **[TEST_PDF_INSTRUCTIONS.md](./TEST_PDF_INSTRUCTIONS.md)** - How to test with sample PDFs
- **[VISUAL_ARCHITECTURE.md](./VISUAL_ARCHITECTURE.md)** - System diagrams
- **[DOCUMENT_MANAGEMENT_GUIDE.md](./DOCUMENT_MANAGEMENT_GUIDE.md)** - Complete guide

### Interactive Tools:
- **document-upload-helper.html** - Open in browser to find PDF paths easily
- **create-document-folders.ps1** - PowerShell script (already executed)

## 📁 Adding PDFs (Quick Guide)

### 3 Simple Steps:

1. **Place your PDF file:**
   ```
   public/documents/{resource-type}/{course}/{semester}/{filename}.pdf
   ```
   Example: `public/documents/rgpv-notes/btech-cse/sem-1/CSE-s1-subj1.pdf`

2. **Update constants.js:**
   - Find the subject by ID (e.g., `CSE-s1-subj1`)
   - Change `isAvailable: false` to `isAvailable: true`

3. **Test:**
   - Reload the website
   - Navigate to the subject
   - Click "View" or "Download"

**💡 Tip:** Use `document-upload-helper.html` to find the exact path and filename!

## 📊 System Structure

```
Documents: 240 PDFs total
├── RGPV Notes (120 PDFs)
│   ├── B.Tech CSE (40 PDFs: 8 sems × 5 subjects)
│   ├── B.Tech ME (40 PDFs: 8 sems × 5 subjects)
│   └── B.Tech EE (40 PDFs: 8 sems × 5 subjects)
└── Shivani Books (120 PDFs)
    ├── B.Tech CSE (40 PDFs: 8 sems × 5 subjects)
    ├── B.Tech ME (40 PDFs: 8 sems × 5 subjects)
    └── B.Tech EE (40 PDFs: 8 sems × 5 subjects)
```

## 🛠️ Tech Stack

- **React** - UI framework
- **React Router** - Navigation
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Heroicons** - Icons

## 📱 Features in Detail

### For Students:
- Browse courses and semesters
- View PDFs in modal viewer
- Download PDFs with one click
- See availability status at a glance

### For Administrators:
- Easy PDF management
- Organized folder structure
- Simple availability toggle
- Comprehensive documentation

## 🎯 File Naming Convention

```
{CoursePrefix}-s{SemesterNum}-subj{SubjectNum}.pdf

Examples:
- CSE-s1-subj1.pdf  (CSE Semester 1 Subject 1)
- ME-s4-subj3.pdf   (ME Semester 4 Subject 3)
- EE-s8-subj5.pdf   (EE Semester 8 Subject 5)
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Breadcrumbs.jsx
│   ├── CourseCard.jsx
│   ├── DocumentViewer.jsx  ← NEW: PDF viewer component
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── Logo.jsx
│   ├── Navbar.jsx
│   └── PremiumCard.jsx
├── pages/
│   ├── CompetitiveExamsPage.jsx
│   ├── CourseSelectionPage.jsx
│   ├── HomePage.jsx
│   ├── NotFoundPage.jsx
│   ├── PremiumPage.jsx
│   ├── SemesterSelectionPage.jsx
│   └── SubjectListPage.jsx  ← UPDATED: PDF features
├── constants.js  ← UPDATED: PDF paths & availability
├── types.js  ← UPDATED: Added isAvailable type
└── App.jsx

public/
└── documents/  ← NEW: 48 semester folders
    ├── rgpv-notes/
    │   ├── btech-cse/sem-1 to sem-8/
    │   ├── btech-me/sem-1 to sem-8/
    │   └── btech-ee/sem-1 to sem-8/
    └── shivani-books/
        ├── shivani-btech-cse/sem-1 to sem-8/
        ├── shivani-btech-me/sem-1 to sem-8/
        └── shivani-btech-ee/sem-1 to sem-8/
```

## 🎨 UI States

**Available Document:**
- Blue theme
- Enabled buttons
- Clickable View/Download

**Unavailable Document:**
- Gray theme
- "Coming Soon" badge
- Disabled buttons

## ⚡ Quick Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Open document helper tool
start document-upload-helper.html  # Windows
open document-upload-helper.html   # Mac
xdg-open document-upload-helper.html  # Linux
```

## 🐛 Troubleshooting

**PDF not showing?**
- ✅ Check file name matches subject ID
- ✅ Verify `isAvailable: true` in constants.js
- ✅ Ensure PDF is in correct folder
- ✅ Clear browser cache and reload

**Download not working?**
- ✅ Check browser console for errors
- ✅ Verify PDF file is not corrupted
- ✅ Check file permissions

See [DOCUMENT_MANAGEMENT_GUIDE.md](./DOCUMENT_MANAGEMENT_GUIDE.md#troubleshooting) for more help.

## 📈 Future Enhancements

- [ ] Search functionality across PDFs
- [ ] Admin dashboard for bulk uploads
- [ ] PDF compression before upload
- [ ] Preview thumbnails
- [ ] Bookmarking feature
- [ ] Download statistics
- [ ] Comments/ratings system

## 📄 License

This project is ready for educational use.

## 🤝 Contributing

To add new courses or features:
1. Review [DOCUMENT_MANAGEMENT_GUIDE.md](./DOCUMENT_MANAGEMENT_GUIDE.md)
2. Update `constants.js` for new data
3. Follow existing naming conventions
4. Test thoroughly before deployment

## 📞 Support

- 📖 Full documentation: [INDEX.md](./INDEX.md)
- 🛠️ Interactive tool: `document-upload-helper.html`
- 📚 Complete guide: [DOCUMENT_MANAGEMENT_GUIDE.md](./DOCUMENT_MANAGEMENT_GUIDE.md)

---

**Built with ❤️ for students**  
**Version:** 1.0  
**Last Updated:** November 9, 2025
