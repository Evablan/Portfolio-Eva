import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar archivos de traducción
import fr from '../locales/fr.json';
import es from '../locales/es.json';
import en from '../locales/en.json';

// Configuración de i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: fr
      },
      es: {
        translation: es
      },
      en: {
        translation: en
      }
    },
    lng: 'fr', // Idioma por defecto: francés
    fallbackLng: 'fr', // Idioma de respaldo
    debug: false, // Cambiar a true para desarrollo

    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    }
  });

export default i18n; 