import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslation from '../public/locales/en/translation.json'
import ptTranslation from '../public/locales/pt/translation.json'

const defaultLanguage =
  localStorage.getItem('language') || navigator.language.split('-')[0] || 'en'

const resources = {
  en: {
    translation: enTranslation
  },
  pt: {
    translation: ptTranslation
  }
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
