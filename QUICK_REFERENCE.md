# 🎓 Study App PDF System - Quick Reference Card

## 📊 System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    YOUR STUDY APP                           │
│                                                             │
│  3 Courses × 8 Semesters × 5 Subjects = 120 PDFs/type     │
│  Total Capacity: 240 PDFs                                  │
└─────────────────────────────────────────────────────────────┘
```

## 🎯 Adding a PDF - 3 Simple Steps

### Step 1: Upload PDF File
```
📁 Location: public/documents/{resource-type}/{course}/{semester}/
📄 Filename: {CoursePrefix}-s{Sem}-subj{Num}.pdf

Example: public/documents/rgpv-notes/btech-cse/sem-1/CSE-s1-subj1.pdf
```

### Step 2: Update constants.js
```javascript
// Find the subject and change:
isAvailable: false  ❌
// To:
isAvailable: true   ✅
```

### Step 3: Test
```
✓ Reload website
✓ Navigate to subject
✓ Click "View" or "Download"
✓ Success! 🎉
```

## 🗂️ File Naming Reference

| Course | Prefix | Example Filename |
|--------|--------|------------------|
| B.Tech CSE | CSE | CSE-s1-subj1.pdf |
| B.Tech ME | ME | ME-s3-subj2.pdf |
| B.Tech EE | EE | EE-s5-subj4.pdf |

## 📍 Folder Paths Quick Reference

### RGPV Notes:
```
public/documents/rgpv-notes/btech-cse/sem-1/     ← CSE Semester 1
public/documents/rgpv-notes/btech-me/sem-3/      ← ME Semester 3
public/documents/rgpv-notes/btech-ee/sem-8/      ← EE Semester 8
```

### Shivani Books:
```
public/documents/shivani-books/shivani-btech-cse/sem-1/
public/documents/shivani-books/shivani-btech-me/sem-3/
public/documents/shivani-books/shivani-btech-ee/sem-8/
```

## 🛠️ Helper Tools

| Tool | Purpose | How to Use |
|------|---------|------------|
| **document-upload-helper.html** | Find paths & filenames | Open in browser, select options |
| **create-document-folders.ps1** | Create all folders | Run in PowerShell |
| **DOCUMENT_MANAGEMENT_GUIDE.md** | Full documentation | Read for detailed instructions |

## 💡 Common Tasks

### Adding All Subjects for One Semester
1. Prepare 5 PDF files
2. Name them: {Prefix}-s{Sem}-subj1.pdf through subj5.pdf
3. Copy to semester folder
4. Update 5 subjects in constants.js to isAvailable: true

### Bulk Upload for Multiple Semesters
1. Organize PDFs in folders matching structure
2. Copy all at once
3. Update constants.js in batch (find/replace isAvailable: false → true)

### Customizing Subject Names
```javascript
// In constants.js, change:
name: `CSE Subject 1 (Sem 1)`
// To something like:
name: `Data Structures and Algorithms`
```

## ⚠️ Important Notes

✅ **DO:**
- Use exact file naming convention
- Update isAvailable after uploading
- Test View and Download buttons
- Keep PDFs under 20MB

❌ **DON'T:**
- Use spaces in filenames
- Forget to set isAvailable: true
- Upload corrupted PDFs
- Mix up resource type folders

## 🎨 What Students See

### When PDF is Available (isAvailable: true):
```
┌─────────────────────────────────────────┐
│ 📄 Data Structures and Algorithms      │
│    Fundamental concepts...              │
│                                         │
│  [👁️ View]  [⬇️ Download]             │
└─────────────────────────────────────────┘
Blue theme, buttons enabled
```

### When PDF is NOT Available (isAvailable: false):
```
┌─────────────────────────────────────────┐
│ 📄 Advanced Algorithms  [⚠️ Coming Soon]│
│    Advanced topics...                   │
│                                         │
│  [👁️ View]  [⬇️ Download]             │
└─────────────────────────────────────────┘
Gray theme, buttons disabled
```

## 📈 Progress Tracking

Track your progress filling the system:

```
RGPV Notes:
├── B.Tech CSE: [ ] 0/40 PDFs (8 semesters × 5 subjects)
├── B.Tech ME:  [ ] 0/40 PDFs
└── B.Tech EE:  [ ] 0/40 PDFs

Shivani Books:
├── B.Tech CSE: [ ] 0/40 PDFs
├── B.Tech ME:  [ ] 0/40 PDFs
└── B.Tech EE:  [ ] 0/40 PDFs

Total: [ ] 0/240 PDFs
```

## 🚀 Quick Start Checklist

- [ ] Run create-document-folders.ps1 (already done!)
- [ ] Open document-upload-helper.html in browser
- [ ] Select your first subject
- [ ] Copy path and filename from helper
- [ ] Add your PDF file
- [ ] Update constants.js
- [ ] Test on website
- [ ] Repeat for other subjects!

## 📞 Need Help?

1. **Read:** DOCUMENT_MANAGEMENT_GUIDE.md
2. **Use:** document-upload-helper.html
3. **Check:** File naming and paths
4. **Verify:** constants.js updates
5. **Test:** Clear cache and reload

---

**Pro Tip:** Use the document-upload-helper.html tool - it shows you exactly where to put files and what to name them! 🎯

**Made with ❤️ for easy PDF management**
