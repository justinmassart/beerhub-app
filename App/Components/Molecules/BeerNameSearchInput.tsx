import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import View from 'app/Components/Atoms/View';

import BeerNamesSearchModal from 'app/Components/Molecules/Modals/BeerNamesSearchModal';
import Box from '../Atoms/Box';

const BeerNameSearchInput = ({ onChange }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedName, setSelectedName] = useState<string>('');

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const handleSelectBrand = (name: string) => {
    setSelectedName(name);
    onChange(name);
    closeModal();
  };

  return (
    <View noPaddingHorizontal>
      <TouchableOpacity onPress={openModal}>
        <Box input={true}>
          <View noPaddingVertical flex={1} justifyContent="center">
            <Text>{selectedName ?? 'Enter the name of the beer'}</Text>
          </View>
        </Box>
      </TouchableOpacity>
      <BeerNamesSearchModal
        isVisible={isModalVisible}
        onClose={closeModal}
        onSelect={handleSelectBrand}
      />
    </View>
  );
};

export default BeerNameSearchInput;
