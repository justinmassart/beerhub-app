import React, { useCallback, useEffect, useState } from 'react';
import {
  Modal,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import View from 'app/Components/Atoms/View';

import GET_BEER_TYPES_SEARCH_INPUTS from 'app/Operations/queries/getBeerTypesSearchInputs';

import InputField from '../InputField';

const BeerTypesSearchModal = ({ isVisible, onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<string[]>(['']);

  const handleFetch = async () => {
    try {
      const response = await GET_BEER_TYPES_SEARCH_INPUTS();
      setResults(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const filteredResults = results.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Modal
      style={styles.modal}
      visible={isVisible}
      animationType="slide"
      onRequestClose={onClose}
      transparent={true}>
      <View style={styles.modalContainer}>
        <View
          noPaddingVertical
          isHorizontal
          justifyContent="space-between"
          alignItems="center">
          <View noPadding flex={4}>
            <InputField
              placeholder={'Write a type of beer to start searching'}
              type={'text'}
              onChangeText={(value: string) => {
                setSearchTerm(value);
              }}
            />
          </View>
          <View
            noPadding
            flex={1}
            justifyContent="center"
            alignItems="flex-end">
            <TouchableOpacity
              onPress={() => {
                setSearchTerm('');
                onClose();
              }}>
              <Icon name="close" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={filteredResults}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                onSelect(item);
              }}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.toString()}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Dimensions.get('window').height * 0.5,
    backgroundColor: '#f7f7f7',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5,
  },
  closeButton: {},
});

export default BeerTypesSearchModal;
