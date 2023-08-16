import React, { useEffect, useState } from 'react';
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

import GET_BRANDS_INPUTS from 'app/Operations/queries/getBrandsInputs';
import InputField from '../InputField';

const BrandsSearchModal = ({ isVisible, onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<[{ id: string; name: string }]>([
    { id: '', name: '' },
  ]);

  const handleSearch = async () => {
    try {
      const response = await GET_BRANDS_INPUTS(searchTerm);
      setResults(response?.data.brands);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

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
              placeholder={'Type a brand to start searching'}
              type={'text'}
              onChangeText={(value: string) => setSearchTerm(value)}
            />
          </View>
          <View
            noPadding
            flex={1}
            justifyContent="center"
            alignItems="flex-end">
            <TouchableOpacity
              onPress={() => {
                setResults([{ id: '', name: '' }]);
                onClose();
              }}>
              <Icon name="close" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={results}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setResults([{ id: '', name: '' }]);
                onSelect(item);
              }}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
        {searchTerm.length >= 2 && (
          <View noPaddingHorizontal>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: 10,
              }}
              onPress={() => {
                setResults([{ id: '', name: '' }]);
                setSearchTerm('');
                onSelect({ id: '', name: searchTerm });
              }}>
              <Text>Add the brand : {searchTerm}</Text>
            </TouchableOpacity>
          </View>
        )}
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

export default BrandsSearchModal;
