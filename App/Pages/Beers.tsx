/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import GET_BEERS from 'app/Operations/queries/getBeers';
import Text from 'app/Components/Atoms/Text';

const Beers = () => {
  const [beers, setBeers] = useState(null);
  const [pagination, setPagination] = useState<number>(1);
  const [canLoadMore, setCanLoadMore] = useState<boolean>(true);
  const [lastPage, setLastPage] = useState<number | null>(null);

  const resetPagination = () => {
    setPagination(1);
  };

  const handlePagination = () => {
    if (pagination + 1 === lastPage) {
      setCanLoadMore(false);
    } else {
      setPagination(pagination + 1);
    }
  };

  const fetchBeers = useCallback(async () => {
    try {
      const response = await GET_BEERS(pagination);
      setLastPage(response.last_page);
      const newBeers = response.data;

      const beersFromStorage = await AsyncStorage.getItem('beers');
      const existingBeers = JSON.parse(beersFromStorage || '[]');

      const updatedBeers = [...existingBeers, ...newBeers];
      const uniqueBeers: any = Array.from(
        new Set(updatedBeers.map(beer => beer.id)),
      ).map(id => {
        return updatedBeers.find(beer => beer.id === id);
      });

      await AsyncStorage.setItem('beers', JSON.stringify(uniqueBeers));
      setBeers(uniqueBeers);
    } catch (error) {
      console.log(error);
    }
  }, [pagination]);

  useFocusEffect(
    useCallback(() => {
      resetPagination();
      fetchBeers();
    }, [fetchBeers]),
  );

  const renderBeerItem = ({item}) => (
    <View>
      <Text>{item?.name}</Text>
      <Text>{item?.translations[0]?.description}</Text>
      <Text>{item?.brand?.name}</Text>
      <View style={{minHeight: 25}} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={beers}
        renderItem={renderBeerItem}
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

export default Beers;
