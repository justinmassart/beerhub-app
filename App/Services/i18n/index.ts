import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import fr from './locales/fr.json';
import en from './locales/en.json';
import {getDefaultLanguage} from '../../Config/Languages';

export const resources = {
  fr: {
    translation: fr,
  },
  en: {
    translation: en,
  },
};

export const AVAILABLE_LANGUAGES = Object.keys(resources);

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  lng: getDefaultLanguage(),

  returnNull: false,

  compatibilityJSON: 'v3',

  interpolation: {
    prefix: '{',
    suffix: '}',
    escapeValue: false,
  },
});

export default i18n;
