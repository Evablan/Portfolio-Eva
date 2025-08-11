# Portfolio Eva Blanco - FullStack Developer

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple)
![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7)

Portfolio personal desarrollado con React y Vite, desplegado en Netlify. Incluye internacionalización completa, formulario de contacto funcional y diseño responsive moderno.

## 🌐 Demo en vivo

**[Visitar Portfolio](https://charming-seahorse-b1ac29.netlify.app)**

## ✨ Características

- 🌍 **Multiidioma**: Francés, Español e Inglés
- 📱 **Diseño Responsive**: Optimizado para todos los dispositivos
- 📧 **Formulario de Contacto**: Integrado con EmailJS
- 📄 **Descarga de CV**: Funcionalidad de descarga directa
- ⚡ **Rendimiento Optimizado**: Build optimizado con Vite
- 🎨 **Diseño Moderno**: UI/UX profesional y atractivo
- 🔍 **SEO Optimizado**: Metadatos y estructura semántica

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca de interfaz de usuario
- **Vite 7.0.4** - Herramienta de build rápida
- **CSS3** - Estilos y animaciones
- **HTML5** - Estructura semántica

### Internacionalización
- **i18next** - Framework de internacionalización
- **react-i18next** - Integración con React

### Funcionalidades
- **EmailJS** - Formulario de contacto
- **React Hooks** - Gestión de estado

### Deploy & Hosting
- **Netlify** - Hosting y CI/CD automático
- **GitHub** - Control de versiones

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/Evablan/Portfolio-Eva.git

# 2. Navegar al directorio del proyecto
cd Portfolio-Eva

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm run dev

# 5. Abrir en el navegador
# http://localhost:5173
```

### Comandos disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm run preview      # Vista previa de producción

# Linting
npm run lint         # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
portfolio-eva/
├── public/
│   ├── cv.pdf              # CV para descarga
│   └── favicon.svg         # Favicon personalizado
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.jsx      # Navegación y selector de idioma
│   │   ├── Hero.jsx        # Sección principal
│   │   ├── About.jsx       # Información personal
│   │   ├── Projects.jsx    # Proyectos destacados
│   │   ├── Contact.jsx     # Formulario de contacto
│   │   └── Footer.jsx      # Pie de página
│   ├── assets/             # Imágenes y recursos
│   ├── i18n/              # Configuración de idiomas
│   ├── locales/           # Archivos de traducción
│   └── main.jsx           # Punto de entrada
├── index.html             # HTML principal
└── package.json           # Dependencias y scripts
```

## 🌍 Internacionalización

El portfolio soporta tres idiomas:

- 🇫🇷 **Francés** (idioma por defecto)
- 🇪🇸 **Español**
- 🇬🇧 **Inglés**

Los archivos de traducción se encuentran en `src/locales/` y la configuración en `src/i18n/config.js`.

## 📧 Formulario de Contacto

El formulario de contacto está integrado con **EmailJS** y permite:

- Envío de mensajes directos
- Validación de campos
- Feedback visual al usuario
- Notificaciones de éxito/error

## 🎨 Personalización

### Colores principales
- **Azul**: `#1e40af` (elementos principales)
- **Dorado**: `#fbbf24` (acentos y highlights)
- **Gris**: `#6b7280` (texto secundario)

### Fuentes
- Fuentes del sistema optimizadas para legibilidad
- Jerarquía tipográfica clara

## 🚀 Deploy

El proyecto está configurado para deploy automático en Netlify:

1. **Push a GitHub** → Deploy automático
2. **Build command**: `npm run build`
3. **Publish directory**: `dist`
4. **URL**: https://charming-seahorse-b1ac29.netlify.app

## 📱 Responsive Design

El portfolio está optimizado para:

- 📱 **Móviles** (320px+)
- 📱 **Tablets** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Pantallas grandes** (1440px+)

## 🔧 Configuración de EmailJS

Para configurar el formulario de contacto:

1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Configurar servicio de email
3. Crear template de email
4. Actualizar las credenciales en `Contact.jsx`

## 📄 Licencia

Este proyecto es de uso personal y educativo.

## 👤 Autor

**Eva Blanco Martínez**
- 📧 Email: evablancomart@gmail.com
- 💼 LinkedIn: [Eva Blanco Martínez](https://www.linkedin.com/in/eva-blanco-mart%C3%ADnez-5a8617158/)
- 🐙 GitHub: [@Evablan](https://github.com/Evablan)

---

⭐ Si te gusta este proyecto, ¡déjame una estrella en GitHub!

---

## 🌍 README en otros idiomas

- 🇫🇷 [Français](README.fr.md)
- 🇬🇧 [English](README.en.md)
