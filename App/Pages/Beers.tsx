import React, {useState, useCallback} from 'react';
import {View, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native'; // Import the useFocusEffect hook

import GET_BEERS from 'app/Operations/queries/getBeers';
import Text from 'app/Components/Atoms/Text';
import i18n from 'app/Services/i18n';

const Beers = () => {
  const [beers, setBeers] = useState(null);

  const fetchBeers = async () => {
    try {
      setBeers(null);
      const response = await GET_BEERS();
      const data = response.data;
      await AsyncStorage.setItem('beers', JSON.stringify(data));
      const beersFromStorage = await AsyncStorage.getItem('beers');
      const parsedBeers = JSON.parse(beersFromStorage);
      setBeers(parsedBeers);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchBeers();
    }, []),
  );

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
