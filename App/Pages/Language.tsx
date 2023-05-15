import React, {useState} from 'react';
import {View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

import Text from 'app/Components/Atoms/Text';
import i18n from 'app/Services/i18n';

const Language = () => {
  const {t} = useTranslation();
  const [locale, setLocale] = useState<string>(i18n.language);

  const handleLocaleChange = async (newLocale: string) => {
    try {
      await AsyncStorage.setItem('locale', newLocale);
      i18n.changeLanguage(newLocale);
      setLocale(newLocale);
      await AsyncStorage.removeItem('beers');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View>
        <Text>{t('Language.changeLanguage')}</Text>
      </View>
      <View>
        <Button
          title="FR"
          disabled={locale === 'fr' ? true : false}
          onPress={() => handleLocaleChange('fr')}
        />
        <Button
          title="EN"
          disabled={locale === 'en' ? true : false}
          onPress={() => handleLocaleChange('en')}
        />
      </View>
    </View>
  );
};

export default Language;
