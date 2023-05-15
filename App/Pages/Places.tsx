/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
import {View, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native'; // Import the useFocusEffect hook

import GET_PLACES from 'app/Operations/queries/getPlaces';
import Text from 'app/Components/Atoms/Text';

const Places = () => {
  const [places, setPlaces] = useState(null);

  const fetchBeers = async () => {
    try {
      setPlaces(null);
      const response = await GET_PLACES();
      const data = response.data;
      await AsyncStorage.setItem('places', JSON.stringify(data));
      const placesFromStorage = await AsyncStorage.getItem('places');
      const parsedPlaces = JSON.parse(placesFromStorage || '');
      setPlaces(parsedPlaces);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchBeers();
    }, []),
  );

  const renderPlaceItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.translations[0].description}</Text>
      <View style={{minHeight: 25}} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={places}
        renderItem={renderPlaceItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Places;
