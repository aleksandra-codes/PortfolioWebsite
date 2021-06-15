import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import English from './translations/en.json'
import Spanish from './translations/es.json'
import Russian from './translations/ru.json'

const resources = {
    en: {
        translation: English
    }, 
    es: {
        translation: Spanish
    }, 
    ru: {
        translation: Russian
    }
}

i18n
  // Enables the i18next backend
  .use(Backend)
  // Enable automatic language detection
  .use(LanguageDetector)
  // Enables the hook initialization module
  .use (initReactI18next)
  .init({
    // Standard language used
    resources,
    fallbackLng: 'en',
    debug: true,
    //Detects and caches a cookie from the language provided
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;