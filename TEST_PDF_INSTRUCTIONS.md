# Sample PDF Test Instructions

## 🧪 Testing the PDF System

Since we can't create actual PDF files through code, here's how to test with sample PDFs:

## Method 1: Create a Simple Test PDF

### Using Microsoft Word/Google Docs:
1. Create a new document
2. Add some text: "Test PDF for CSE Subject 1 - Semester 1"
3. Save/Export as PDF
4. Name it: `CSE-s1-subj1.pdf`
5. Move it to: `public/documents/rgpv-notes/btech-cse/sem-1/`

### Using Online PDF Generator:
1. Visit: https://www.pdf-online.com/create-pdf/
2. Create a simple text PDF
3. Download and rename to: `CSE-s1-subj1.pdf`
4. Place in correct folder

## Method 2: Use Sample PDFs from Internet

### Quick Download:
```powershell
# Run this in PowerShell to download a sample PDF
$url = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
$output = "public/documents/rgpv-notes/btech-cse/sem-1/CSE-s1-subj1.pdf"
Invoke-WebRequest -Uri $url -OutFile $output
```

## Method 3: Create Multiple Test PDFs

Here's a PowerShell script to create placeholder HTML files that you can convert to PDF:

```powershell
# Create test HTML that you can print to PDF
$htmlContent = @"
<!DOCTYPE html>
<html>
<head><title>Test Subject</title></head>
<body>
    <h1>Test Subject Document</h1>
    <p>This is a test PDF for the study app.</p>
    <p>Replace this with actual course material.</p>
</body>
</html>
"@

# Save HTML file
$htmlContent | Out-File -FilePath "test-subject.html" -Encoding UTF8

# Then open in browser and print to PDF
```

## ✅ After Adding Test PDF

1. **Update constants.js:**
```javascript
// Find this line (around line 20-30):
{ 
  id: `CSE-s1-subj1`, 
  name: `CSE Subject 1 (Sem 1)`, 
  description: `Fundamental concepts of CSE Subject 1.`, 
  pdfLink: generatePdfPath('rgpv-notes', 'btech-cse', 'sem-1', 'CSE-s1-subj1'),
  isAvailable: false  // ← Change this to true
}
```

2. **Save the file**

3. **Reload your website**

4. **Navigate to:**
   - Click "RGPV Notes"
   - Click "B.Tech Computer Science & Engineering"
   - Click "Semester 1"
   - You should see CSE Subject 1 with enabled buttons!

5. **Test:**
   - Click "View" - Should open PDF in modal
   - Click "Download" - Should download the PDF

## 🎯 Quick Test Checklist

- [ ] Create or download a test PDF
- [ ] Place in: `public/documents/rgpv-notes/btech-cse/sem-1/CSE-s1-subj1.pdf`
- [ ] Update constants.js: `isAvailable: true`
- [ ] Reload website
- [ ] Navigate to B.Tech CSE → Semester 1
- [ ] Verify buttons are blue (not gray)
- [ ] Click "View" - PDF should open in modal
- [ ] Click "Download" - PDF should download
- [ ] Success! System is working! 🎉

## 🔄 Adding More Test PDFs

Repeat the process for other subjects/semesters:

```
CSE-s1-subj2.pdf  → Subject 2, Semester 1
CSE-s1-subj3.pdf  → Subject 3, Semester 1
CSE-s2-subj1.pdf  → Subject 1, Semester 2
ME-s1-subj1.pdf   → ME Subject 1, Semester 1
```

Remember to update `isAvailable: true` for each one in constants.js!

## 📝 Notes

- The system expects PDFs, but during testing, any PDF will work
- Make sure filenames match exactly (case-sensitive)
- Clear browser cache if changes don't appear
- Check browser console for any errors

---

**Ready to add real PDFs?** Just follow the same process with your actual course materials!
