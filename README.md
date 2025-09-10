# 💕 Happy Birthday Website

A beautiful, love-themed birthday website created for someone special. This website features a photo gallery, love letters collection, and is optimized for GitHub Pages deployment.

## 🎨 Features

- **📸 Beautiful Photo Gallery** - Responsive gallery with hover animations showcasing special memories
- **💕 Love Letters Section** - Dedicated page for storing and viewing heartfelt messages
- **🎭 Romantic Design** - Love-themed UI with floating hearts, gradients, and smooth animations
- **📱 Fully Responsive** - Perfect viewing experience on all devices
- **🔍 Search & Filter** - Filter letters by date and search through content
- **➕ Add New Letters** - Easy-to-use interface for adding new love letters
- **🚀 Static Export** - Optimized for GitHub Pages deployment

## 🌹 Website Sections

### Homepage
- Hero section with animated birthday banner
- Photo gallery with 10 beautiful memories
- Floating heart animations
- Call-to-action to view love letters

### Love Letters Page
- Display all your heartfelt messages
- Filter by date
- Search functionality
- Add new letters with a beautiful form
- Persistent storage using localStorage

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static export)
npm run build

# The static files will be in the 'out' directory
```

## 🌐 GitHub Pages Deployment

### Step 1: Build the Static Site
```bash
npm run build
```
This will create a static export in the `out` directory.

### Step 2: Deploy to GitHub Pages

#### Option A: Using GitHub CLI
```bash
# Push the out directory to gh-pages branch
gh-pages -d out
```

#### Option B: Manual Deployment
1. Push your code to GitHub repository
2. Go to repository Settings → Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages` (or your main branch)
5. Directory: `/root` (if using gh-pages branch) or `/` (if using main branch)
6. Click Save

### Step 3: Configure Base Path (Optional)
If deploying to `username.github.io/repo-name`, uncomment and update the basePath in `next.config.ts`:

```javascript
// next.config.ts
basePath: '/your-repo-name',
```

## 🎨 Customization

### Adding More Photos
To add more photos, simply update the `photos` array in `src/app/page.tsx`:

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

### Customizing Colors
The love theme uses pink and red gradients. You can customize these in `src/app/globals.css`:

```css
.love-gradient {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### Adding New Sections
The website is modular. Add new sections by:
1. Creating new components in `src/components/`
2. Importing and using them in your pages

## 💾 Data Storage

The love letters are stored in the browser's localStorage, making this a truly static website. No database is required!

### Data Persistence
- All letters are saved locally in the browser
- Data persists between page refreshes
- No server-side storage needed

## 🎭 Animations & Effects

The website includes several beautiful animations:

- **Floating Hearts**: Gentle floating animation in the background
- **Pulsing Hearts**: Subtle pulsing effect on heart icons
- **Photo Hover**: Scale and rotate effects on gallery photos
- **Button Effects**: Shimmer effect on hover
- **Gentle Float**: Soft floating animation for mail icon

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 🖥️ Desktop computers
- 💻 Laptops
- 📱 Tablets
- 📱 Mobile phones

## 🛠️ Technology Stack

- **Next.js 15** - React framework with static export
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Production-ready animations
- **Lucide React** - Beautiful icons
- **shadcn/ui** - High-quality UI components

## ❤️ Made With Love

This website was created with love and care for someone special. Every animation, every color choice, and every feature was designed to create a memorable birthday experience.

---

Built with ❤️ for celebrating love and special moments. 🎉✨
