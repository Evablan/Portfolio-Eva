# Portfolio Eva Blanco - FullStack Developer

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple)
![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7)

Personal portfolio developed with React and Vite, deployed on Netlify. Includes complete internationalization, functional contact form, and modern responsive design.

## 🌐 Live Demo

**[Visit Portfolio](https://charming-seahorse-b1ac29.netlify.app)**

## ✨ Features

- 🌍 **Multi-language**: French, Spanish and English
- 📱 **Responsive Design**: Optimized for all devices
- 📧 **Contact Form**: Integrated with EmailJS
- 📄 **CV Download**: Direct download functionality
- ⚡ **Optimized Performance**: Build optimized with Vite
- 🎨 **Modern Design**: Professional and attractive UI/UX
- 🔍 **SEO Optimized**: Metadata and semantic structure

## 🛠️ Technologies Used

### Frontend
- **React 19.1.0** - User interface library
- **Vite 7.0.4** - Fast build tool
- **CSS3** - Styles and animations
- **HTML5** - Semantic structure

### Internationalization
- **i18next** - Internationalization framework
- **react-i18next** - React integration

### Features
- **EmailJS** - Contact form
- **React Hooks** - State management

### Deployment & Hosting
- **Netlify** - Hosting and automatic CI/CD
- **GitHub** - Version control

## 🚀 Installation and Usage

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation steps

```bash
# 1. Clone the repository
git clone https://github.com/Evablan/Portfolio-Eva.git

# 2. Navigate to the project directory
cd Portfolio-Eva

# 3. Install dependencies
npm install

# 4. Run in development mode
npm run dev

# 5. Open in browser
# http://localhost:5173
```

### Available commands

```bash
# Development
npm run dev          # Starts development server

# Production
npm run build        # Builds for production
npm run preview      # Production preview

# Linting
npm run lint         # Runs ESLint
```

## 📁 Project Structure

```
portfolio-eva/
├── public/
│   ├── cv.pdf              # CV for download
│   └── favicon.svg         # Custom favicon
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx      # Navigation and language selector
│   │   ├── Hero.jsx        # Main section
│   │   ├── About.jsx       # Personal information
│   │   ├── Projects.jsx    # Featured projects
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer
│   ├── assets/             # Images and resources
│   ├── i18n/              # Language configuration
│   ├── locales/           # Translation files
│   └── main.jsx           # Entry point
├── index.html             # Main HTML
└── package.json           # Dependencies and scripts
```

## 🌍 Internationalization

The portfolio supports three languages:

- 🇫🇷 **French** (default language)
- 🇪🇸 **Spanish**
- 🇬🇧 **English**

Translation files are located in `src/locales/` and configuration in `src/i18n/config.js`.

## 📧 Contact Form

The contact form is integrated with **EmailJS** and allows:

- Direct message sending
- Field validation
- Visual feedback to user
- Success/error notifications

## 🎨 Customization

### Main colors
- **Blue**: `#1e40af` (main elements)
- **Gold**: `#fbbf24` (accents and highlights)
- **Gray**: `#6b7280` (secondary text)

### Fonts
- System fonts optimized for readability
- Clear typographic hierarchy

## 🚀 Deployment

The project is configured for automatic deployment on Netlify:

1. **Push to GitHub** → Automatic deployment
2. **Build command**: `npm run build`
3. **Publish directory**: `dist`
4. **URL**: https://charming-seahorse-b1ac29.netlify.app

## 📱 Responsive Design

The portfolio is optimized for:

- 📱 **Mobiles** (320px+)
- 📱 **Tablets** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large screens** (1440px+)

## 🔧 EmailJS Configuration

To configure the contact form:

1. Create account on [EmailJS](https://www.emailjs.com/)
2. Configure email service
3. Create email template
4. Update credentials in `Contact.jsx`

## 📄 License

This project is for personal and educational use.

## 👤 Author

**Eva Blanco Martínez**
- 📧 Email: evablancomart@gmail.com
- 💼 LinkedIn: [Eva Blanco Martínez](https://www.linkedin.com/in/eva-blanco-mart%C3%ADnez-5a8617158/)
- 🐙 GitHub: [@Evablan](https://github.com/Evablan)

---

⭐ If you like this project, give me a star on GitHub!
