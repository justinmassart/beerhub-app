import React, {useEffect, useState} from 'react';
import {View, Button} from 'react-native';
import i18n from 'app/Services/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {navigate} = useNavigation();
  const [locale, setLocale] = useState<string>(i18n.language);
  const handleLocaleChange = async (newLocale: string) => {
    try {
      await AsyncStorage.setItem('locale', newLocale);
      i18n.changeLanguage(newLocale);
      setLocale(newLocale);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [locale]);

  return (
    <View>
      <View>
        <Button
          title="FR"
          disabled={i18n.language === 'fr' ? true : false}
          onPress={() => {
            handleLocaleChange('fr');
          }}
        />
        <Button
          title="EN"
          disabled={i18n.language === 'en' ? true : false}
          onPress={() => {
            handleLocaleChange('en');
          }}
        />
      </View>
      <View style={{marginTop: 32}}>
        <Button title="Beers" onPress={() => navigate('Beers')} />
        <Button title="Places" onPress={() => navigate('Beers')} />
        <Button title="Hub" onPress={() => navigate('Beers')} />
        <Button title="Settings" onPress={() => navigate('Beers')} />
      </View>
    </View>
  );
};

export default Home;
