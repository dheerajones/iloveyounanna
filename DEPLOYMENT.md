# 🚀 GitHub Pages Deployment Guide for "Iloveyounanna"

## 📋 Prerequisites
- GitHub account
- Git installed on your machine
- Node.js 20+ installed

## 🎯 Quick Deployment Steps

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `iloveyounanna` (lowercase, matching your desired domain)
3. Make it **public** (required for free GitHub Pages)
4. Don't initialize with README (we already have files)

### Step 2: Push Your Code
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Beautiful love-themed birthday website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/iloveyounanna.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### Step 4: Automatic Deployment
The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your Next.js application
- Deploy it to GitHub Pages
- Configure the custom domain: `iloveyounanna.github.io`

## 🌐 Your Website Will Be Live At:
```
https://iloveyounanna.github.io/
```

### Important Notes for Custom Domain:
- The repository name must be `iloveyounanna` (lowercase)
- The CNAME file is automatically included in the build
- GitHub Pages will automatically configure the custom domain
- It may take a few minutes for the domain to become active

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the application
npm run build

# Install gh-pages package
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npx gh-pages -d out
```

## ✨ Features of Your Website

### 🏠 Homepage
- **Hero Section**: Beautiful background with birthday message
- **Photo Gallery**: 10 romantic photos with hover effects
- **Multilingual Love**: "I Love You" in 12 languages
- **Floating Hearts**: Animated background elements
- **Responsive Design**: Works on all devices

### 💌 Love Letters Page
- **Gmail-like Interface**: Professional email-style layout
- **Search & Filter**: Find letters by date or content
- **Add New Letters**: Beautiful form to write new messages
- **Local Storage**: Data persists in browser
- **Star & Delete**: Manage your love letters

### 🎨 Design Features
- **Love Theme**: Pink/red gradients and romantic colors
- **Smooth Animations**: Framer Motion powered transitions
- **Custom CSS**: Extensive love-themed styling
- **Dark/Light Mode**: Theme toggle support
- **Mobile Responsive**: Perfect on all screen sizes

## 🛠️ Customization

### Adding More Photos
Edit `src/app/page.tsx` and update the `photos` array:
```javascript
const photos = [
  // ... existing photos
  {
    id: 11,
    url: "your-image-url-here",
    caption: "Your photo caption"
  }
]
```

### Changing Colors
Modify `src/app/globals.css`:
```css
.love-gradient {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### Updating Content
- **Homepage**: Edit `src/app/page.tsx`
- **Love Letters**: Edit `src/app/mails/page.tsx`
- **Styling**: Edit `src/app/globals.css`

## 🔄 Updating Your Website

After making changes:
```bash
# Add your changes
git add .

# Commit with a message
git commit -m "Update: [describe your changes]"

# Push to GitHub
git push origin main
```

GitHub Actions will automatically rebuild and redeploy your site!

## 🎉 Congratulations!

Your beautiful love-themed birthday website "Iloveyounanna" is now ready to be deployed to GitHub Pages! 

The website includes:
- ✅ Static export configuration
- ✅ GitHub Actions workflow
- ✅ Responsive design
- ✅ Beautiful animations
- ✅ Love letters functionality
- ✅ Photo gallery
- ✅ Multilingual love declarations

Just follow the steps above and your romantic birthday website will be live on the internet! 💕
