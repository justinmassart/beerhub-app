import {useEffect} from 'react';
import {initReactI18next} from 'react-i18next';
import dayjs from 'dayjs';

import i18n, {resources} from 'app/Services/i18n';
import {getDefaultLanguage} from 'app/Config/Languages';

const I18nProvider = ({children}: {children: JSX.Element}) => {
  const language = getDefaultLanguage();
  console.log(language);
  useEffect(() => {
    i18n.use(initReactI18next).init({
      resources,
      lng: language,
    });
  }, [language]);

  useEffect(() => {
    i18n.on('languageChanged', function (lng) {
      dayjs.locale(lng);
    });
  }, []);

  return children;
};

export default I18nProvider;
