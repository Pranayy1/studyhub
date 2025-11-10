# 📚 Quick Guide: Adding PDFs via Google Drive

## ✨ Your app now uses **Google Drive ONLY** for all PDFs!

No need to store files locally - everything is hosted on Google Drive.

---

## 🚀 Adding a PDF - Simple 4 Steps

### **Step 1: Upload to Google Drive**
1. Go to [Google Drive](https://drive.google.com)
2. Upload your PDF file
3. Right-click the file → **"Share"** or **"Get link"**
4. Change to **"Anyone with the link"** (Viewer permission)
5. Click **"Copy link"**

Example link you'll get:
```
https://drive.google.com/file/d/1kXlX5dYy43_qP1iDu3gp6jfUo8g5iX93/view?usp=sharing
```

---

### **Step 2: Use the Helper Tool**
1. Open **`document-upload-helper-v2.html`** in your browser
2. Click the **"☁️ Google Drive"** tab
3. Select your options:
   - Resource Type (RGPV Notes / Shivani Books)
   - Course (CSE / ME / EE)
   - Semester (1-8)
   - Subject (1-5)
4. **Paste your Google Drive link**
5. Click **"📋 Copy Code"**

---

### **Step 3: Add to constants.js**

There are 2 ways to add it:

#### **Option A: Override Individual Subject (Recommended)**

Find the CSE course section and use this pattern:

```javascript
export const RGPV_COURSES = [
  {
    id: "btech-cse",
    name: "B.Tech Computer Science & Engineering",
    shortName: "CSE",
    description: "...",
    icon: CpuChipIcon,
    specializations: [...],
    semesters: (() => {
      const semesters = commonSemesters("CSE", "btech-cse", "rgpv-notes");
      
      // Add your Google Drive PDFs here
      // Semester 1, Subject 1
      semesters[0].subjects[0] = { 
        id: 'CSE-s1-subj1', 
        name: 'Data Structures and Algorithms', 
        description: 'Complete DSA guide with examples', 
        pdfLink: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',
        pdfSource: 'google-drive',
        driveId: 'YOUR_FILE_ID',
        isAvailable: true
      };
      
      // Semester 1, Subject 2
      semesters[0].subjects[1] = { 
        id: 'CSE-s1-subj2', 
        name: 'Database Management Systems', 
        description: 'DBMS concepts and SQL', 
        pdfLink: 'https://drive.google.com/file/d/ANOTHER_FILE_ID/view',
        pdfSource: 'google-drive',
        driveId: 'ANOTHER_FILE_ID',
        isAvailable: true
      };
      
      // Add more subjects as needed
      
      return semesters;
    })()
  },
  // ... other courses
]
```

---

### **Step 4: Test**
1. Save `constants.js`
2. Reload your website
3. Navigate to: RGPV Notes → Course → Semester
4. Click **"View"** - PDF opens in modal
5. Click **"Download"** - Opens Google Drive download

---

## 📍 Array Index Guide

When adding subjects, use these indexes:

### **Semesters:**
- `semesters[0]` = Semester 1
- `semesters[1]` = Semester 2
- `semesters[2]` = Semester 3
- ... up to `semesters[7]` = Semester 8

### **Subjects:**
- `subjects[0]` = Subject 1
- `subjects[1]` = Subject 2
- `subjects[2]` = Subject 3
- `subjects[3]` = Subject 4
- `subjects[4]` = Subject 5

---

## 💡 Quick Examples

### **Example 1: Add Single PDF**

```javascript
semesters: (() => {
  const semesters = commonSemesters("CSE", "btech-cse", "rgpv-notes");
  
  // Semester 1, Subject 1
  semesters[0].subjects[0] = { 
    id: 'CSE-s1-subj1', 
    name: 'Introduction to Programming', 
    description: 'C++ and Python basics', 
    pdfLink: 'https://drive.google.com/file/d/1ABC123xyz/view',
    pdfSource: 'google-drive',
    driveId: '1ABC123xyz',
    isAvailable: true
  };
  
  return semesters;
})()
```

### **Example 2: Add Multiple PDFs (Same Semester)**

```javascript
semesters: (() => {
  const semesters = commonSemesters("CSE", "btech-cse", "rgpv-notes");
  
  // Semester 1, Subject 1
  semesters[0].subjects[0] = { 
    id: 'CSE-s1-subj1', 
    name: 'Programming',
    pdfLink: 'https://drive.google.com/file/d/FILE_ID_1/view',
    pdfSource: 'google-drive',
    driveId: 'FILE_ID_1',
    isAvailable: true
  };
  
  // Semester 1, Subject 2
  semesters[0].subjects[1] = { 
    id: 'CSE-s1-subj2', 
    name: 'DBMS',
    pdfLink: 'https://drive.google.com/file/d/FILE_ID_2/view',
    pdfSource: 'google-drive',
    driveId: 'FILE_ID_2',
    isAvailable: true
  };
  
  // Semester 1, Subject 3
  semesters[0].subjects[2] = { 
    id: 'CSE-s1-subj3', 
    name: 'Operating Systems',
    pdfLink: 'https://drive.google.com/file/d/FILE_ID_3/view',
    pdfSource: 'google-drive',
    driveId: 'FILE_ID_3',
    isAvailable: true
  };
  
  return semesters;
})()
```

### **Example 3: Add PDFs in Different Semesters**

```javascript
semesters: (() => {
  const semesters = commonSemesters("CSE", "btech-cse", "rgpv-notes");
  
  // Semester 1, Subject 1
  semesters[0].subjects[0] = { 
    id: 'CSE-s1-subj1', 
    name: 'Programming Fundamentals',
    pdfLink: 'https://drive.google.com/file/d/FILE_1/view',
    pdfSource: 'google-drive',
    driveId: 'FILE_1',
    isAvailable: true
  };
  
  // Semester 2, Subject 1
  semesters[1].subjects[0] = { 
    id: 'CSE-s2-subj1', 
    name: 'Data Structures',
    pdfLink: 'https://drive.google.com/file/d/FILE_2/view',
    pdfSource: 'google-drive',
    driveId: 'FILE_2',
    isAvailable: true
  };
  
  // Semester 3, Subject 2
  semesters[2].subjects[1] = { 
    id: 'CSE-s3-subj2', 
    name: 'Computer Networks',
    pdfLink: 'https://drive.google.com/file/d/FILE_3/view',
    pdfSource: 'google-drive',
    driveId: 'FILE_3',
    isAvailable: true
  };
  
  return semesters;
})()
```

---

## ⚠️ Important Reminders

1. **Sharing Settings:**
   - Must be set to "Anyone with the link"
   - Permission: Viewer
   - If wrong, users will see "Permission denied"

2. **File ID:**
   - Extract from the link between `/d/` and `/view`
   - Example: `https://drive.google.com/file/d/ABC123/view` → ID is `ABC123`

3. **Set isAvailable:**
   - Always set `isAvailable: true` when adding a PDF
   - Otherwise, button will be disabled

4. **Subject ID:**
   - Must match the pattern: `{PREFIX}-s{SEM}-subj{NUM}`
   - Example: `CSE-s1-subj1`, `ME-s3-subj2`, `EE-s8-subj5`

---

## 🛠️ Tools

### **Helper Tool:**
```powershell
start document-upload-helper-v2.html
```

Features:
- ✅ Auto-extract File IDs
- ✅ Generate code snippets
- ✅ Copy to clipboard
- ✅ No manual work needed!

---

## 📞 Need Help?

**Full Documentation:** [GOOGLE_DRIVE_GUIDE.md](./GOOGLE_DRIVE_GUIDE.md)

**Common Issues:**
- PDF not loading? Check sharing settings
- Download not working? Verify File ID is correct
- Can't access? Make sure "Anyone with link" is enabled

---

## 🎉 You're All Set!

All PDFs are now hosted on Google Drive:
- ✅ No local storage needed
- ✅ Unlimited file sizes
- ✅ Easy updates (just replace in Drive)
- ✅ Fast delivery via Google's CDN
- ✅ 15GB free storage

**Start uploading and sharing! 🚀☁️**

---

**Last Updated:** November 10, 2025  
**Mode:** Google Drive Only
