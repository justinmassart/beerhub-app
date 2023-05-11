import {t} from 'i18next';
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import Text from 'app/Components/Atoms/Text';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GET_BEERS from 'app/Operations/queries/getBeers';

const Home = () => {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    const getBeers = async () => {
      try {
        if (!beers) {
          const response = await GET_BEERS();
          const data = response.data;
          await AsyncStorage.setItem('beers', JSON.stringify(data));
        }
        const beersFromStorage = await AsyncStorage.getItem('beers');
        const parsedBeers = JSON.parse(beersFromStorage);
        setBeers(parsedBeers);
      } catch (error) {
        console.log(error);
      }
    };
    getBeers();
  });

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
      <FlatList
        data={beers}
        renderItem={renderBeerItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Home;
