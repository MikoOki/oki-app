# Quick Deployment Guide

Follow these steps to deploy your Oki App:

## Option 1: GitHub Pages (Recommended - Easiest)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., `oki-app`)
3. **Don't** initialize with README, .gitignore, or license
4. Click "Create repository"

### Step 2: Initialize Git and Push (Run these commands in your terminal)

```bash
# Navigate to your project folder
cd "X:\Projects\stream app\oki-app (1)"

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Oki App"

# Add your GitHub repository as remote (replace YOUR-USERNAME and YOUR-REPO)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Your app will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/install.html`

---

## Option 2: Cloudflare Pages (Also Free & Fast)

### Step 1: Push to GitHub (same as Option 1, Steps 1-2)

### Step 2: Deploy to Cloudflare Pages
1. Go to https://dash.cloudflare.com
2. Click **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Select your GitHub repository
4. Build settings:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
5. Click **Save and Deploy**
6. Your app will be live at: `https://your-project.pages.dev`

---

## Option 3: Netlify (Free)

### Step 1: Push to GitHub (same as Option 1, Steps 1-2)

### Step 2: Deploy to Netlify
1. Go to https://app.netlify.com
2. Click **Add new site** → **Import an existing project**
3. Connect to GitHub and select your repository
4. Build settings:
   - **Build command**: (leave empty)
   - **Publish directory**: `/`
5. Click **Deploy site**
6. Your app will be live at: `https://your-project.netlify.app`

---

## Option 4: Direct File Upload (No Git Required)

If you prefer not to use git, you can upload files directly:

### For GitHub Pages:
1. Create a repository on GitHub
2. Click **uploading an existing file**
3. Drag and drop all your files:
   - app.html
   - install.html
   - manifest.json
   - sw.js
   - icon-192.png
   - icon-512.png
4. Commit the files
5. Enable GitHub Pages (Settings → Pages)

### For Other Hosts:
- **Vercel**: Drag and drop the folder at https://vercel.com
- **Firebase Hosting**: Use Firebase CLI or web interface
- **Any web host**: Upload files via FTP/SFTP to your web root

---

## After Deployment

1. **Test your app**: Visit `your-url/install.html`
2. **Update Twitch username** (if needed): Edit `app.html` line 492
3. **Share the install page** with users

---

## Quick Checklist

- [ ] All files are in the project folder
- [ ] Twitch username is set in `app.html` (line 492)
- [ ] Icons (icon-192.png, icon-512.png) are present
- [ ] Repository created on GitHub (or chosen hosting platform)
- [ ] Files pushed/uploaded
- [ ] Pages/hosting enabled
- [ ] App tested at live URL

---

## Need Help?

- Check `SIMPLE_DEPLOYMENT.md` for more details
- All files are safe to make public (no API keys or secrets)
- The app works immediately after deployment - no backend needed!
