import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files
import en from './english'
import hindi from './hindi'

// Define the resources
const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hindi,
  },
}

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if selected language translations are not available
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  })

export default i18n
