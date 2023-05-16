/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import GET_PLACES from 'app/Operations/queries/getPlaces';
import Text from 'app/Components/Atoms/Text';

const Places = () => {
  const [places, setPlaces] = useState<any | null>(null);
  const [pagination, setPagination] = useState<number>(1);
  const [canLoadMore, setCanLoadMore] = useState<boolean>(true);
  const [lastPage, setLastPage] = useState<number | null>(null);
  const [resetResults, setResetResults] = useState<boolean>(false);

  const resetPagination = useCallback(async () => {
    const locales = await AsyncStorage.multiGet(['oldPlacesLocale', 'locale']);
    if (locales[0][1] && locales[1][1] && locales[0][1] !== locales[1][1]) {
      await AsyncStorage.setItem('oldPlacesLocale', locales[1][1]);
      setResetResults(true);
      setPlaces(null);
      setPagination(1);
    }
  }, []);

  const handlePagination = () => {
    if (pagination + 1 === lastPage) {
      setCanLoadMore(false);
    } else {
      setPagination(pagination + 1);
    }
  };

  const fetchPlaces = useCallback(async () => {
    try {
      const response = await GET_PLACES(pagination);
      setLastPage(response.last_page);
      const newPlaces = response.data;

      const placesFromStorage = await AsyncStorage.getItem('places');
      const existingPlaces = resetResults
        ? []
        : JSON.parse(placesFromStorage || '[]');

      const updatedPlaces = [...existingPlaces, ...newPlaces];
      const uniquePlaces = Array.from(
        new Set(updatedPlaces.map(place => place.id)),
      ).map(id => {
        return updatedPlaces.find(place => place.id === id);
      });

      await AsyncStorage.setItem('places', JSON.stringify(uniquePlaces));
      setPlaces(uniquePlaces);
    } catch (error) {
      console.log(error);
    } finally {
      if (resetResults) {
        setResetResults(false);
      }
    }
  }, [pagination, resetResults]);

  useFocusEffect(
    useCallback(() => {
      resetPagination();
      fetchPlaces();
    }, [resetPagination, fetchPlaces]),
  );

  const renderPlaceItem = ({item}) => (
    <View>
      <Text>{item?.name}</Text>
      <Text>{item?.translations[0]?.description}</Text>
      <View style={{minHeight: 25}} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={places}
        renderItem={renderPlaceItem}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={
          <>
            {canLoadMore ? (
              <TouchableOpacity
                style={{
                  padding: 20,
                  alignItems: 'center',
                  backgroundColor: '#DDDDDD',
                }}
                onPress={() => handlePagination()}>
                <Text>Load More</Text>
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </>
        }
      />
    </View>
  );
};

export default Places;
