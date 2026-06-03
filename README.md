<div align="center">

# 👋 Hi, I'm Youssef Bouzit

**Data Science Engineering Student | AI Engineer | Full-Stack Developer**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/youssef-bouzit-74863239b/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YOUSSEF-BT)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:bt.youssef.369@gmail.com)
[![Website](https://img.shields.io/badge/Portfolio-24292e?style=for-the-badge&logo=vercel&logoColor=white)](https://youssef-bt.github.io/YOUSSEF_BT_PORTFOLIO/)

*🌍 Available for work & collaboration | 🇫🇷 Bilingual (English/Français)*
</div>
   
## 🚀 About

A modern, responsive portfolio website built with **React, Vite, and Tailwind CSS** to showcase my expertise in **Data Science**, **Artificial Intelligence**, **Machine Learning Engineering**, and **Full-Stack Development**.

**Current Role:** AI & Computer Vision Engineer Intern @ ABA Technologie (Casablanca Technopark)

## 🚦 Getting Started

### Prerequisites

- **Node.js** ≥ v18.0.0
- **npm** ≥ v9.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUSSEF-BT/youssef-bouzit-portfolio.git
cd portfolio

# Install dependencies
npm ci --prefer-offline --no-audit
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Run ESLint
npm run lint
```

---

## ✨ Features

### 🎨 UI/UX

- **Interactive Particle Effects** - Dynamic Particles.js background
- **Theme Toggle** - Dark/Light mode with localStorage persistence
- **Bilingual Support** - Full French/English language switching
- **Responsive Design** - Optimized for all devices
- **Smooth Scrolling** - Enhanced navigation
- **Glassmorphism UI** - Modern design elements
- **Animated Elements** - CSS keyframe animations
- **Loading States** - Professional page loader

### 📊 Content

- **Hero Section** - Eye-catching introduction with availability status
- **About Section** - Professional background and expertise
- **Projects Showcase** - 9 detailed AI/ML/Full-Stack projects
- **Experience Timeline** - Professional journey display
- **Certifications** - Filterable certification gallery
- **Testimonials** - Social proof from colleagues
- **Contact Form** - EmailJS integration
- **CV Download** - One-click resume download

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2 | Component framework |
| **Vite** | 7.2 | Build tool & dev server |
| **Tailwind CSS** | 4.1 | Utility-first styling |
| **React Router DOM** | 7.13.1 | Client-side routing |

### UI & Animation

| Library | Purpose |
|---------|---------|
| **Lucide React** | Icon library (400+ SVG icons) |
| **Particles.js** | Interactive particle background |

### Integration & Tools

| Service | Purpose |
|---------|---------|
| **EmailJS** | Contact form email delivery |
| **ESLint** | Code quality & linting |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero/
│   │   │   ├── projects/
│   │   │   ├── profile/
│   │   │   └── certifications/
│   │   └── vite.svg
│   └── index.html
│
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AnimatedBorderButton.jsx
│   │   ├── Button.jsx
│   │   ├── CVDownloadButton.jsx
│   │   ├── LanguageToggle.jsx
│   │   ├── LiveDemoSection.jsx
│   │   ├── PageLoader.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SocialShare.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── sections/            # Homepage sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   │
│   ├── pages/               # Full-page components
│   │   ├── ProjectDetail.jsx
│   │   ├── Demos.jsx
│   │   ├── Skills.jsx
│   │   ├── CertificationsPage.jsx
│   │   ├── SystemArchitecture.jsx
│   │   └── NotFound.jsx
│   │
│   ├── layout/              # Layout components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── context/             # React contexts
│   │   ├── LanguageContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── data/                # Project data
│   │   └── projects/        # Individual project definitions
│   │       ├── index.js
│   │       ├── aiSummarizer.js
│   │       ├── chatbot.js
│   │       ├── churnPrediction.js
│   │       ├── dataQuality.js
│   │       ├── fraudDetection.js
│   │       ├── hybridMovieRecommender.js
│   │       ├── mlopsPipeline.js
│   │       ├── tweetsSentiment.js
│   │       └── trafficMVP.js
│   │
│   ├── assets/              # Assets (symlinked to public/)
│   ├── index.css            # Global styles & Tailwind
│   ├── main.jsx             # React entry point
│   └── App.jsx              # Root component
│
├── dist/                    # Production build output
├── .gitignore
├── eslint.config.js
├── package.json
├── vite.config.js
├── particles.json
└── README.md
```

**Note:** Section data (certifications, experience, testimonials) is embedded directly in their respective components for simplicity. Translations are defined in `LanguageContext.jsx`.

---

## 🌐 Deployment

### GitHub Pages

```bash
# Build and deploy to gh-pages branch
npm run deploy
```

After deployment:
- Access at: `https://YOUSSEF-BT.github.io/youssef-bouzit-portfolio/`
- Enable GitHub Pages in repo settings → Pages → Source: `gh-pages` branch

---

## ⚙️ Configuration

### Environment Variables

Create `.env.local` in the project root:

```env
# Required for EmailJS contact form
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important:** Never commit `.env.local` to version control. Set environment variables in your hosting platform instead.

### Theme & Particles

- **Theme**: Configurable in `src/context/ThemeContext.jsx`
- **Particles**: Customize `particles.json` for particle count, colors, shapes

---

## 📦 Dependencies

See [package.json](./package.json) for full list.

Key production dependencies:
- react: ^19.2.0
- react-dom: ^19.2.0
- react-router-dom: ^7.13.1
- tailwindcss: ^4.1.17
- @emailjs/browser: ^4.4.1
- lucide-react: ^0.556.0
- particles.js: ^2.0.0
- flowchart.js: ^1.18.0
- mermaid: ^11.13.0

---

## 📊 Performance

This portfolio is optimized for performance:

- ✅ Fast initial load with Vite + Rollup
- ✅ Code splitting via React Router lazy loading
- ✅ CSS purging with Tailwind
- ✅ Image optimization (served from public/)
- ✅ Asset hashing for cache busting
- ✅ Minimal JavaScript bundle (~414 KB gzipped to ~119 KB)

**Lighthouse Target Scores:** >95 for Performance, Accessibility, Best Practices, SEO

---

## 🔒 Security Notes

- This is a static SPA - no server-side code or database access
- EmailJS keys are stored client-side (by design)
- No sensitive credentials in repository
- Deploy over HTTPS only
- Consider adding CAPTCHA to contact form for production use

---

## 🧪 Testing

No automated tests are currently implemented. Recommended testing strategy:

- Visual regression testing across breakpoints
- Browser compatibility (Chrome, Firefox, Safari, Edge)
- Theme switching verification
- Language switching verification
- Accessibility audits (screen readers, keyboard navigation)
- Lighthouse performance audits

---

## 🤝 Contributing

Improvements and feedback are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/feature-name`
3. Make your changes
4. Run ESLint: `npm run lint`
5. Test in development mode
6. Submit a Pull Request with:
   - Clear description of changes
   - Screenshots for UI changes
   - Testing instructions

---

## 📝 License

MIT © Youssef Bouzit

This portfolio is open source under the MIT License. You are free to:
- Use this portfolio as a template for your own projects
- Modify and customize it
- Use it for personal or commercial projects

The only requirement is to include the original copyright and license notice in all copies or substantial portions of the software.

---

## 🙋‍♂️ Author

**Youssef Bouzit**

*AI & Computer Vision Engineer Intern @ ABA Technologie*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/youssef-bouzit-74863239b/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YOUSSEF-BT) [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:bt.youssef.369@gmail.com)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Particles.js](https://vincentgarreau.com/particles.js/)
- [Lucide](https://lucide.dev/)
- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)

---

<div align="center">

**Built with ❤️ using React, Vite & Tailwind CSS**

Last updated: June 2026

</div>
