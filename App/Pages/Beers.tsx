import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GET_BEERS from 'app/Operations/queries/getBeers';
import i18n from 'app/Services/i18n';
import Text from 'app/Components/Atoms/Text';

const Beers = () => {
  const [beers, setBeers] = useState(null);
  const locale = i18n.language;
  useEffect(() => {
    const getBeers = async () => {
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
      <FlatList
        data={beers}
        renderItem={renderBeerItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Beers;
