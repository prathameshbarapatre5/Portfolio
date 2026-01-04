# 📸 ADD YOUR PHOTO

## Quick Fix

### Step 1: Copy Your Photo

**Manually copy the image:**

From:
```
D:\Claude\Projects\Portfolio\public\images\about-photo.jpg
```

To:
```
D:\Claude\Projects\Portfolio2\public\images\about-photo.jpg
```

### Step 2: Or Use Command Prompt

```bash
copy "D:\Claude\Projects\Portfolio\public\images\about-photo.jpg" "D:\Claude\Projects\Portfolio2\public\images\about-photo.jpg"
```

## ✅ I've Already Updated the Code

The About page now uses:
```tsx
<Image
    src="/images/about-photo.jpg"
    alt="Prathmesh Barapatre"
    width={500}
    height={500}
    className='w-full h-auto rounded-2xl'
    priority
/>
```

With beautiful glassmorphic border and glow effect! ✨

## 🚀 After Copying the Image

```bash
cd D:\Claude\Projects\Portfolio2

# Install dependencies (if not done)
npm install

# Commit everything including the image
git add .
git commit -m "Add professional photo and deploy"
git push origin main
```

## ✨ Result

Your About page will show:
- ✅ Your professional photo
- ✅ Glassmorphic frame
- ✅ Purple/cyan gradient glow
- ✅ Rounded corners
- ✅ Responsive sizing

Much better than the astronaut emoji! 🎉
