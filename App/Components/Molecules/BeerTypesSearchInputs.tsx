import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import View from 'app/Components/Atoms/View';

import BrandsSearchModal from 'app/Components/Molecules/Modals/BrandsSearchModals';
import Box from '../Atoms/Box';

const BeerTypesSearchField = ({ beerTypeName }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedBeerType, setSelectedBeerType] = useState<{
    name: string;
  } | null>(null);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const handleSelectBrand = (beerType: { name: string }) => {
    setSelectedBeerType(beerType);
    closeModal();
  };

  return (
    <View noPaddingHorizontal>
      <TouchableOpacity onPress={openModal}>
        <Box input={true}>
          <View noPaddingVertical flex={1} justifyContent="center">
            <Text>{selectedBeerType?.name || 'Select a Brand'}</Text>
          </View>
        </Box>
      </TouchableOpacity>
      <BrandsSearchModal
        isVisible={isModalVisible}
        onClose={closeModal}
        onSelect={handleSelectBrand}
      />
    </View>
  );
};

export default BeerTypesSearchField;
