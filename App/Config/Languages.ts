import * as RNLocalize from 'react-native-localize';

export const AVAILABLE_LANGUAGES = ['en', 'fr', 'es'];
export const FALLBACK_LANGUAGE = 'en';

export const getDefaultLanguage = (): string => {
  return (
    RNLocalize.findBestLanguageTag(AVAILABLE_LANGUAGES)?.languageTag ||
    FALLBACK_LANGUAGE
  );
};
