# 🔍 DEPLOYMENT TROUBLESHOOTING

## Check These Common Issues

### 1. Build Locally First

Test if the build works on your machine:

```bash
cd D:\Claude\Projects\Portfolio2

# Clean build
npm run build
```

**If this fails**, note the error message and we can fix it.

**If this succeeds**, the issue might be GitHub-specific.

---

### 2. Check for TypeScript Errors

```bash
# Run TypeScript check
npx tsc --noEmit
```

This will show any type errors without building.

---

### 3. Common Issues & Fixes

#### Issue: "Module not found"
**Fix**: Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

#### Issue: "Cannot find module '@/components/...'"
**Fix**: Check tsconfig.json paths are correct (they are ✅)

#### Issue: Image import errors
**Fix**: We're using `<img>` tags with src strings, not imports (✅)

#### Issue: "export 'default' not found"
**Fix**: Make sure all page components have `export default`

---

### 4. Verify All Files Exist

```bash
cd D:\Claude\Projects\Portfolio2

# Check structure
dir app
dir components
dir public\images
```

**Should see:**
- app/ folder with page.tsx, layout.tsx, globals.css
- app/about/, app/projects/, app/publications/, app/articles/
- components/ with all .tsx files
- public/images/ (ready for images)

---

### 5. Check GitHub Actions Error

If build is failing on GitHub:

1. Go to: `github.com/prathameshbarapatre5/Portfolio2/actions`
2. Click on the failed workflow
3. Expand the "Build" step
4. Look for the specific error message

**Common errors:**

#### "ENOENT: no such file or directory"
- Missing image file
- Solution: Make sure images are copied and committed

#### "Module parse failed"
- Syntax error in a component
- Solution: Check the file mentioned in error

#### "Failed to compile"
- TypeScript or React error
- Solution: Run `npm run build` locally to see details

---

### 6. Verify Images Are Committed

```bash
git status

# Should NOT see:
# public/images/ (untracked)

# Should see images committed
git ls-files public/images/
```

---

### 7. Test Each Page Separately

Create a simple test to isolate issues:

```bash
# Test just the home page
npm run dev
```

Then visit:
- http://localhost:3000 (home)
- http://localhost:3000/about
- http://localhost:3000/projects
- http://localhost:3000/publications
- http://localhost:3000/articles

**Note which page fails (if any)**

---

### 8. Check for Missing Dependencies

```bash
npm list framer-motion
npm list lucide-react
npm list next
npm list react
```

All should show installed versions.

---

## 🔧 Quick Fixes

### If Build Fails Locally:

```bash
# Clean everything
rm -rf .next node_modules package-lock.json

# Reinstall
npm install

# Try build again
npm run build
```

### If Build Succeeds Locally but Fails on GitHub:

```bash
# Make sure package-lock.json is committed
git add package-lock.json
git commit -m "Update lock file"
git push
```

### If Images Not Showing:

```bash
# Verify images exist
dir public\images\

# Should see:
# logo-photo.png
# home-photo.jpg
# about-photo.jpeg

# If missing, copy them:
copy "..\Portfolio\public\images\logo-photo.png" "public\images\logo-photo.png"
copy "..\Portfolio\public\images\profile-photo.jpg" "public\images\home-photo.jpg"
copy "..\Portfolio\public\images\about-photo.jpg" "public\images\about-photo.jpeg"

# Commit
git add public/images/
git commit -m "Add images"
git push
```

---

## 🎯 Most Likely Issues

1. **Missing Images**: Images not copied to Portfolio2
2. **Not Committed**: Images copied but not committed to Git
3. **Build Cache**: Old build artifacts causing issues

---

## ✅ Complete Reset & Deploy

If all else fails, do a complete clean deploy:

```bash
cd D:\Claude\Projects\Portfolio2

# 1. Clean everything
rm -rf .next node_modules package-lock.json

# 2. Copy images
copy "..\Portfolio\public\images\logo-photo.png" "public\images\logo-photo.png"
copy "..\Portfolio\public\images\profile-photo.jpg" "public\images\home-photo.jpg"
copy "..\Portfolio\public\images\about-photo.jpg" "public\images\about-photo.jpeg"

# 3. Fresh install
npm install

# 4. Test build locally
npm run build

# 5. If build succeeds, deploy
git add .
git commit -m "Clean deploy with all images"
git push origin main
```

---

## 📞 What Error Are You Seeing?

Please share:
1. **Error message** from GitHub Actions
2. **Which step** is failing (build or deploy?)
3. **Local build result** - does `npm run build` work?

This will help me identify the exact issue! 🔍
