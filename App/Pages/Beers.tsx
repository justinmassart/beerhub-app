/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import GET_BEERS from 'app/Operations/queries/getBeers';
import Text from 'app/Components/Atoms/Text';
import { BeersStackNavigationProp } from 'app/Navigation/AppTab/BeersStack';
import BeerItem from 'app/Components/Molecules/BeerItem';

const Beers = () => {
  const { navigate } = useNavigation<BeersStackNavigationProp>();
  const [beers, setBeers] = useState<any | null>(null);
  const [pagination, setPagination] = useState<number>(1);
  const [canLoadMore, setCanLoadMore] = useState<boolean>(true);
  const [lastPage, setLastPage] = useState<number | null>(null);
  const [resetResults, setResetResults] = useState<boolean>(false);

  const resetPagination = useCallback(async () => {
    const locales = await AsyncStorage.multiGet(['oldBeersLocale', 'locale']);
    if (locales[0][1] && locales[1][1] && locales[0][1] !== locales[1][1]) {
      await AsyncStorage.setItem('oldBeersLocale', locales[1][1]);
      setResetResults(true);
      setBeers(null);
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

  const fetchBeers = useCallback(async () => {
    try {
      const response = await GET_BEERS(pagination);
      setLastPage(response.last_page);
      const newBeers = response.data;

      const beersFromStorage = await AsyncStorage.getItem('beers');
      const existingBeers = resetResults
        ? []
        : JSON.parse(beersFromStorage || '[]');

      const updatedBeers = [...existingBeers, ...newBeers];
      const uniqueBeers = Array.from(
        new Set(updatedBeers.map(beer => beer.id)),
      ).map(id => {
        return updatedBeers.find(beer => beer.id === id);
      });

      await AsyncStorage.setItem('beers', JSON.stringify(uniqueBeers));
      setBeers(uniqueBeers);
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
      fetchBeers();
    }, [resetPagination, fetchBeers]),
  );

  const renderBeerItem = ({ item }) => <BeerItem beer={item} />;

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
