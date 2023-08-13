import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import View from 'app/Components/Atoms/View';

import Box from '../Atoms/Box';

import BeerTypesSearchModal from './Modals/BeerTypesSearchModal';

const BeerTypesSearchField = ({ beerTypeName }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedBeerType, setSelectedBeerType] = useState<string>('');

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const handleSelectBrand = (beerType: string) => {
    setSelectedBeerType(beerType);
    beerTypeName(beerType);
    closeModal();
  };

  return (
    <View noPaddingHorizontal>
      <TouchableOpacity onPress={openModal}>
        <Box input={true}>
          <View noPaddingVertical flex={1} justifyContent="center">
            <Text>{selectedBeerType || 'Select a type of beer'}</Text>
          </View>
        </Box>
      </TouchableOpacity>
      <BeerTypesSearchModal
        isVisible={isModalVisible}
        onClose={closeModal}
        onSelect={handleSelectBrand}
      />
    </View>
  );
};

export default BeerTypesSearchField;
