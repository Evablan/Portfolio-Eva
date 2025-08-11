# Portfolio Eva Blanco - Développeuse FullStack

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple)
![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7)

Portfolio personnel développé avec React et Vite, déployé sur Netlify. Inclut une internationalisation complète, un formulaire de contact fonctionnel et un design responsive moderne.

## 🌐 Démo en ligne

**[Visiter le Portfolio](https://charming-seahorse-b1ac29.netlify.app)**

## ✨ Fonctionnalités

- 🌍 **Multi-langue** : Français, Espagnol et Anglais
- 📱 **Design Responsive** : Optimisé pour tous les appareils
- 📧 **Formulaire de Contact** : Intégré avec EmailJS
- 📄 **Téléchargement de CV** : Fonctionnalité de téléchargement direct
- ⚡ **Performance Optimisée** : Build optimisé avec Vite
- 🎨 **Design Moderne** : UI/UX professionnel et attrayant
- 🔍 **SEO Optimisé** : Métadonnées et structure sémantique

## 🛠️ Technologies Utilisées

### Frontend
- **React 19.1.0** - Bibliothèque d'interface utilisateur
- **Vite 7.0.4** - Outil de build rapide
- **CSS3** - Styles et animations
- **HTML5** - Structure sémantique

### Internationalisation
- **i18next** - Framework d'internationalisation
- **react-i18next** - Intégration avec React

### Fonctionnalités
- **EmailJS** - Formulaire de contact
- **React Hooks** - Gestion d'état

### Déploiement & Hébergement
- **Netlify** - Hébergement et CI/CD automatique
- **GitHub** - Contrôle de version

## 🚀 Installation et Utilisation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

```bash
# 1. Cloner le repository
git clone https://github.com/Evablan/Portfolio-Eva.git

# 2. Naviguer vers le répertoire du projet
cd Portfolio-Eva

# 3. Installer les dépendances
npm install

# 4. Exécuter en mode développement
npm run dev

# 5. Ouvrir dans le navigateur
# http://localhost:5173
```

### Commandes disponibles

```bash
# Développement
npm run dev          # Démarre le serveur de développement

# Production
npm run build        # Construit pour la production
npm run preview      # Aperçu de la production

# Linting
npm run lint         # Exécute ESLint
```

## 📁 Structure du Projet

```
portfolio-eva/
├── public/
│   ├── cv.pdf              # CV pour téléchargement
│   └── favicon.svg         # Favicon personnalisé
├── src/
│   ├── components/         # Composants React
│   │   ├── Header.jsx      # Navigation et sélecteur de langue
│   │   ├── Hero.jsx        # Section principale
│   │   ├── About.jsx       # Informations personnelles
│   │   ├── Projects.jsx    # Projets mis en avant
│   │   ├── Contact.jsx     # Formulaire de contact
│   │   └── Footer.jsx      # Pied de page
│   ├── assets/             # Images et ressources
│   ├── i18n/              # Configuration des langues
│   ├── locales/           # Fichiers de traduction
│   └── main.jsx           # Point d'entrée
├── index.html             # HTML principal
└── package.json           # Dépendances et scripts
```

## 🌍 Internationalisation

Le portfolio supporte trois langues :

- 🇫🇷 **Français** (langue par défaut)
- 🇪🇸 **Espagnol**
- 🇬🇧 **Anglais**

Les fichiers de traduction se trouvent dans `src/locales/` et la configuration dans `src/i18n/config.js`.

## 📧 Formulaire de Contact

Le formulaire de contact est intégré avec **EmailJS** et permet :

- Envoi de messages directs
- Validation des champs
- Retour visuel à l'utilisateur
- Notifications de succès/erreur

## 🎨 Personnalisation

### Couleurs principales
- **Bleu** : `#1e40af` (éléments principaux)
- **Doré** : `#fbbf24` (accents et highlights)
- **Gris** : `#6b7280` (texte secondaire)

### Polices
- Polices système optimisées pour la lisibilité
- Hiérarchie typographique claire

## 🚀 Déploiement

Le projet est configuré pour un déploiement automatique sur Netlify :

1. **Push vers GitHub** → Déploiement automatique
2. **Commande de build** : `npm run build`
3. **Répertoire de publication** : `dist`
4. **URL** : https://charming-seahorse-b1ac29.netlify.app

## 📱 Design Responsive

Le portfolio est optimisé pour :

- 📱 **Mobiles** (320px+)
- 📱 **Tablettes** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Grands écrans** (1440px+)

## 🔧 Configuration EmailJS

Pour configurer le formulaire de contact :

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurer le service d'email
3. Créer un template d'email
4. Mettre à jour les identifiants dans `Contact.jsx`

## 📄 Licence

Ce projet est à usage personnel et éducatif.

## 👤 Auteur

**Eva Blanco Martínez**
- 📧 Email : evablancomart@gmail.com
- 💼 LinkedIn : [Eva Blanco Martínez](https://www.linkedin.com/in/eva-blanco-mart%C3%ADnez-5a8617158/)
- 🐙 GitHub : [@Evablan](https://github.com/Evablan)

---

⭐ Si vous aimez ce projet, laissez-moi une étoile sur GitHub !
