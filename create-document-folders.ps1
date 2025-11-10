# PowerShell Script to Create All Document Folders
# Run this from the project root directory

Write-Host "Creating document folder structure..." -ForegroundColor Green

# Define resource types and courses
$resourceTypesAndCourses = @{
    "rgpv-notes" = @("btech-cse", "btech-me", "btech-ee")
    "shivani-books" = @("shivani-btech-cse", "shivani-btech-me", "shivani-btech-ee")
}

$totalFolders = 0

foreach ($resourceType in $resourceTypesAndCourses.Keys) {
    foreach ($course in $resourceTypesAndCourses[$resourceType]) {
        for ($i = 1; $i -le 8; $i++) {
            $path = "public\documents\$resourceType\$course\sem-$i"
            
            if (!(Test-Path $path)) {
                New-Item -ItemType Directory -Force -Path $path | Out-Null
                Write-Host "  Created: $path" -ForegroundColor Cyan
                $totalFolders++
            } else {
                Write-Host "  Exists:  $path" -ForegroundColor Gray
            }
        }
    }
}

Write-Host "`nFolder structure creation complete!" -ForegroundColor Green
Write-Host "Total new folders created: $totalFolders" -ForegroundColor Yellow
Write-Host "`nYou can now add PDF files to these folders." -ForegroundColor White
Write-Host "Remember to set 'isAvailable: true' in constants.js after adding each PDF!" -ForegroundColor Yellow
