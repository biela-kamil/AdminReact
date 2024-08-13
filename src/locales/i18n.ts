import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pl from './pl.json'
import eng from './eng.json'

const resources = {
  pl: {
    translation: pl
  },
  eng: {
    translation: eng
  }
}

void i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pl',
    // @ts-expect-error sss
    debug: import.meta.env.VITE_REACT_APP_I18N_DEBUG === 'true',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
