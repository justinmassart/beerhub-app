import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import View from 'app/Components/Atoms/View';

import Box from '../Atoms/Box';

import BeerColorsSearchModal from './Modals/BeerColorsSearchModal';

const BeerColorsSearchField = ({ beerColorName }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedBeerType, setSelectedBeerType] = useState<string>('');

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const handleSelectColor = (beerColor: string) => {
    setSelectedBeerType(beerColor);
    beerColorName(beerColor);
    closeModal();
  };

  return (
    <View noPaddingHorizontal>
      <TouchableOpacity onPress={openModal}>
        <Box input={true}>
          <View noPaddingVertical flex={1} justifyContent="center">
            <Text>{selectedBeerType || 'Select the color of the beer'}</Text>
          </View>
        </Box>
      </TouchableOpacity>
      <BeerColorsSearchModal
        isVisible={isModalVisible}
        onClose={closeModal}
        onSelect={handleSelectColor}
      />
    </View>
  );
};

export default BeerColorsSearchField;
