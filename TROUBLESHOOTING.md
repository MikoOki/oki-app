# Cloudflare Pages Deployment Troubleshooting

## Common Issues and Solutions

### Issue 1: Build Fails / No Build Output

**Symptoms:**
- Deployment shows "Build failed"
- No files are deployed
- Empty site

**Solutions:**

1. **Check Build Settings:**
   - Go to Cloudflare Pages → Your Project → Settings → Builds & deployments
   - **Build command**: Leave completely empty (not even a space)
   - **Build output directory**: `/` (just a forward slash)
   - **Root directory**: `/` (just a forward slash)
   - **Framework preset**: None

2. **Try Manual Deploy:**
   - Go to Pages → Your Project → Deployments
   - Click "Retry deployment" on the failed build
   - Or create a new deployment

### Issue 2: Site is Blank / 404 Errors

**Symptoms:**
- Site loads but shows blank page
- 404 errors for files

**Solutions:**

1. **Check File Paths:**
   - Make sure all files are in the root directory
   - Verify `app.html` and `install.html` exist
   - Check that files are committed to GitHub

2. **Verify Deployment:**
   - Go to Pages → Your Project → Deployments
   - Click on the latest deployment
   - Check "Build log" to see what files were deployed

3. **Test Direct URLs:**
   - Try: `https://your-project.pages.dev/app.html`
   - Try: `https://your-project.pages.dev/install.html`

### Issue 3: Service Worker Not Working

**Symptoms:**
- PWA features don't work
- Offline mode doesn't work

**Solutions:**

1. **Check Service Worker Paths:**
   - Service worker uses relative paths (already fixed)
   - Make sure `sw.js` is in the root directory

2. **Clear Browser Cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or clear browser cache completely

### Issue 4: GitHub Connection Issues

**Symptoms:**
- Can't connect repository
- Deployment doesn't trigger on push

**Solutions:**

1. **Reconnect Repository:**
   - Go to Pages → Your Project → Settings → Source
   - Click "Disconnect" then reconnect
   - Make sure you authorize Cloudflare to access your GitHub

2. **Check Repository Permissions:**
   - Make sure the repository is public or Cloudflare has access
   - Verify you're connecting the correct repository: `MikoOki/oki-app`

### Issue 5: Build Command Error

**Symptoms:**
- Error about build command
- "Command not found" errors

**Solutions:**

1. **Clear Build Command:**
   - Settings → Builds & deployments
   - **Build command**: (completely empty, delete any text)
   - Save

2. **Framework Preset:**
   - Set to "None" (not "Create React App" or anything else)

### Issue 6: Files Not Found After Deployment

**Symptoms:**
- Some files work, others don't
- Icons or images missing

**Solutions:**

1. **Check .gitignore:**
   - Make sure important files aren't ignored
   - Verify `icon-192.png` and `icon-512.png` are committed

2. **Verify All Files Are Committed:**
   ```powershell
   git status
   git add .
   git commit -m "Add missing files"
   git push
   ```

## Step-by-Step Debugging

### 1. Check Your Repository
```powershell
cd "X:\Projects\stream app\oki-app (1)"
git status
git log --oneline -5
```

### 2. Verify Files Are on GitHub
1. Go to: https://github.com/MikoOki/oki-app
2. Check that these files exist:
   - `app.html`
   - `install.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`

### 3. Check Cloudflare Pages Settings
1. Go to: https://dash.cloudflare.com
2. Workers & Pages → Your Project → Settings
3. Verify:
   - **Production branch**: `main`
   - **Build command**: (empty)
   - **Build output directory**: `/`
   - **Root directory**: `/`

### 4. Check Deployment Logs
1. Go to: Pages → Your Project → Deployments
2. Click on the latest deployment
3. Check "Build log" for errors
4. Check "Preview" to see what was deployed

### 5. Test the Deployment
1. Visit: `https://your-project.pages.dev/install.html`
2. Open browser console (F12)
3. Look for any errors
4. Check Network tab to see which files are loading

## Quick Fixes

### Reset Build Settings
1. Pages → Settings → Builds & deployments
2. Set:
   - Framework preset: **None**
   - Build command: **(empty)**
   - Build output directory: **/**
   - Root directory: **/**
3. Save and redeploy

### Force New Deployment
1. Make a small change to any file
2. Commit and push:
   ```powershell
   git add .
   git commit -m "Trigger redeploy"
   git push
   ```
3. Cloudflare should automatically redeploy

### Manual File Upload (Last Resort)
If Git deployment keeps failing:
1. Pages → Your Project → Settings → Source
2. Disconnect Git
3. Use "Direct Upload" to upload files manually
4. (Not recommended for ongoing updates, but works for testing)

## Still Not Working?

1. **Check Cloudflare Status**: https://www.cloudflarestatus.com/
2. **Check Build Logs**: Look for specific error messages
3. **Try Different Branch**: Create a test branch and deploy that
4. **Contact Support**: Cloudflare has good support for Pages issues

## Common Error Messages

### "Build failed: Command not found"
- **Fix**: Clear the build command field completely

### "No files in output directory"
- **Fix**: Set build output directory to `/` (root)

### "Repository not found"
- **Fix**: Reconnect GitHub repository, check permissions

### "Build timeout"
- **Fix**: This shouldn't happen with static files, but try clearing build cache

---

**Need more help?** Share the specific error message from Cloudflare Pages build logs!
