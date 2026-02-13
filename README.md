# Portfolio2 - Clean Project Structure

A minimalist monochrome portfolio for a Robotics Engineer specializing in space exploration.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Portfolio2/
├── .git/                    # Git repository
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages deployment
├── app/
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── articles/
│   │   └── page.tsx         # Articles & Media page
│   ├── projects/
│   │   └── page.tsx         # Projects page
│   ├── publications/
│   │   └── page.tsx         # Publications page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── BackgroundEffects.tsx # Animated background
│   ├── Footer.tsx            # Footer component
│   └── Navbar.tsx            # Navigation bar
├── public/
│   └── images/               # Image assets
│       ├── logo-photo.png    # Logo for navbar
│       ├── home-photo.jpg    # Home page photo
│       └── about-photo.jpeg  # About page photo
├── .gitignore               # Git ignore rules
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
├── package-lock.json        # Locked dependencies
├── postcss.config.js        # PostCSS config
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript config
├── LICENSE                  # MIT License
└── README.md                # This file
```

## 🎨 Design Theme

**Monochrome Space Aesthetic**
- Pure black background (#000000)
- Pure white text and accents (#ffffff)
- Glassmorphism effects
- Subtle white glows
- Minimalist, clean design

## 📄 Pages

### Home (`/`)
- Two-column layout
- Hero section with photo
- Resume and contact buttons
- Experience stats

### About (`/about`)
- Biography
- Skills grid (6 categories)
- Professional experience timeline
- Education history

### Projects (`/projects`)
- Bento grid layout
- 6 featured projects
- GitHub links
- Technology tags

### Publications (`/publications`)
- 6 conference papers
- 2 YouTube talks
- Stats overview
- Collaboration CTA

### Articles (`/articles`)
- 3 Spotify podcast embeds
- 4 CosmicWeb magazine editions
- Stay Connected CTA

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 🌐 Deployment

Automatically deploys to GitHub Pages via GitHub Actions when you push to `main` branch.

**Live URL**: `https://prathameshbarapatre5.github.io/Portfolio2/`

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/prathameshbarapatre5/Portfolio2.git

# Navigate to folder
cd Portfolio2

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🎯 Features

- ✨ Monochrome black & white theme
- ✨ Glassmorphism effects
- ✨ Smooth animations
- ✨ Fully responsive
- ✨ SEO optimized
- ✨ Fast static export
- ✨ GitHub Pages ready

## 📄 License

MIT License - See LICENSE file for details

---

**Built with care by Prathmesh Barapatre**  
Robotics Engineer | Space Enthusiast | NSS Mumbai President
