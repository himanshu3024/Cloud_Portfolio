# Himanshu Gandhi - Next-Gen Personal Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, specifically designed for cloud and DevOps professionals.

## 🚀 Features

### Core Features
- **Modern Design**: Clean, professional design with glassmorphism effects
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed with Lighthouse score ≥ 95
- **SEO Optimized**: Built-in SEO with Open Graph and Twitter Cards
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation

### Interactive Elements
- **3D Animations**: Three.js powered floating cloud animations
- **Smooth Scrolling**: Animated scroll indicators and smooth navigation
- **Typewriter Effect**: Dynamic text animations for skills and descriptions
- **Hover Effects**: Interactive hover states and micro-animations
- **Loading States**: Beautiful loading animations and skeleton screens

### Cloud & DevOps Focused
- **Skill Categories**: Organized by cloud platforms, DevOps tools, and technologies
- **Project Showcase**: Filterable project gallery with detailed case studies
- **Certification Display**: Professional certifications with verification links
- **Experience Timeline**: Interactive timeline of work and education history
- **Contact Form**: Functional contact form with validation

## 🛠️ Tech Stacknp

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Three.js**: 3D graphics and animations
- **Lucide React**: Icon library

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **Jest**: Testing framework
- **Cypress**: End-to-end testing

### Performance & SEO
- **next-seo**: SEO optimization
- **next-themes**: Theme management
- **react-hot-toast**: Toast notifications
- **react-hook-form**: Form handling
- **Zod**: Schema validation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/himanshu-gandhi/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # UI components
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional styles
└── types/                # TypeScript types
```

## 🎨 Customization

### Colors & Themes
The portfolio uses a cloud-themed color palette. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Cloud blue
  },
  accent: {
    500: '#10b981', // Success green
  },
  // AWS, Azure, GCP inspired colors
  aws: {
    orange: '#ff9900',
    blue: '#232f3e',
  },
  // ... more colors
}
```

### Content Updates
1. **Personal Information**: Update `components/sections/HeroSection.tsx`
2. **Skills**: Modify `components/sections/SkillsSection.tsx`
3. **Projects**: Edit `components/sections/ProjectsSection.tsx`
4. **Experience**: Update `components/sections/ExperienceSection.tsx`
5. **Contact**: Modify `components/sections/ContactSection.tsx`

### Adding New Sections
1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/layout/Header.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Manual Deployment
```bash
npm run build
npm run export  # For static export
```

## 📊 Performance Optimization

- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic code splitting by Next.js
- **Bundle Analysis**: Run `npm run analyze` to analyze bundle size
- **Lighthouse**: Optimized for Core Web Vitals

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Run end-to-end tests
npm run test:e2e

# Open Cypress
npm run cypress:open
```

## 📱 PWA Features

- **Service Worker**: Offline functionality
- **Manifest**: App-like experience
- **Install Prompt**: Add to home screen
- **Offline Support**: Basic offline reading

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
npm run format       # Format code with Prettier
npm run storybook    # Start Storybook
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Contact

- **Email**: Gandhi111000@hotmail.com
- **Phone**: (437) 267-3965
- **Location**: Toronto, Ontario, Canada
- **LinkedIn**: [Himanshu Gandhi](https://linkedin.com/in/himanshu-gandhi)
- **GitHub**: [himanshu-gandhi](https://github.com/himanshu-gandhi)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Three.js](https://threejs.org/) - 3D graphics library
- [Lucide](https://lucide.dev/) - Icon library

---

Built with ❤️ by Himanshu Gandhi 