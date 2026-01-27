# Deployment script for oki-app
# Run this script in PowerShell to push your code to GitHub

Write-Host "🚀 Deploying Oki App to GitHub..." -ForegroundColor Cyan

# Initialize git if not already done
if (-not (Test-Path .git)) {
    Write-Host "📦 Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Add all files
Write-Host "📝 Staging files..." -ForegroundColor Yellow
git add .

# Create initial commit
Write-Host "💾 Creating commit..." -ForegroundColor Yellow
git commit -m "Initial commit - Oki App deployment" 2>&1 | Out-Null

# Check if remote already exists
$remoteExists = git remote get-url origin 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "🔗 Adding remote repository..." -ForegroundColor Yellow
    git remote add origin https://github.com/MikoOki/oki-app.git
} else {
    Write-Host "✅ Remote already configured" -ForegroundColor Green
}

# Set main branch
Write-Host "🌿 Setting up main branch..." -ForegroundColor Yellow
git branch -M main

# Push to GitHub
Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Yellow
Write-Host ""
Write-Host "You may be prompted for GitHub credentials." -ForegroundColor Cyan
Write-Host "If you use 2FA, you'll need a Personal Access Token instead of your password." -ForegroundColor Cyan
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully deployed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Go to: https://github.com/MikoOki/oki-app/settings/pages" -ForegroundColor White
    Write-Host "2. Under 'Source', select:" -ForegroundColor White
    Write-Host "   - Branch: main" -ForegroundColor White
    Write-Host "   - Folder: / (root)" -ForegroundColor White
    Write-Host "3. Click Save" -ForegroundColor White
    Write-Host ""
    Write-Host "Your app will be live at:" -ForegroundColor Cyan
    Write-Host "https://mikooki.github.io/oki-app/install.html" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Push failed. Please check:" -ForegroundColor Red
    Write-Host "- Your GitHub credentials" -ForegroundColor Yellow
    Write-Host "- If you need to authenticate (use Personal Access Token if 2FA is enabled)" -ForegroundColor Yellow
    Write-Host "- Run: git push -u origin main manually" -ForegroundColor Yellow
}
