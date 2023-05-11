import {t} from 'i18next';
import React, {useEffect, useState} from 'react';
import {View, FlatList, Button} from 'react-native';
import Text from 'app/Components/Atoms/Text';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GET_BEERS from 'app/Operations/queries/getBeers';
import i18n from 'app/Services/i18n';
import {getDefaultLanguage} from 'app/Config/Languages';

const Home = () => {
  const [beers, setBeers] = useState(null);
  const [locale, setLocale] = useState<string | null>(null);

  useEffect(() => {
    const getBeers = async () => {
      if (locale) {
        try {
          const response = await GET_BEERS(locale);
          const data = response.data;
          await AsyncStorage.setItem('beers', JSON.stringify(data));
          const beersFromStorage = await AsyncStorage.getItem('beers');
          const parsedBeers = JSON.parse(beersFromStorage);
          setBeers(parsedBeers);
        } catch (error) {
          console.log(error);
        }
      } else {
        const defaultLang = getDefaultLanguage();
        i18n.changeLanguage(defaultLang);
      }
    };
    getBeers();
  }, [locale]);

  const renderBeerItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.translations[0].description}</Text>
      <View style={{minHeight: 25}} />
    </View>
  );

  return (
    <View>
      <Text font="secondary" weight="medium" size="huge">
        {t('Home.title')}
      </Text>
      <Button
        title="FR"
        disabled={i18n.language === 'fr' ? true : false}
        onPress={() => {
          i18n.changeLanguage('fr');
          setLocale('fr');
        }}
      />
      <Button
        title="EN"
        disabled={i18n.language === 'en' ? true : false}
        onPress={() => {
          i18n.changeLanguage('en');
          setLocale('en');
        }}
      />
      <FlatList
        data={beers}
        renderItem={renderBeerItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Home;
