import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import View from 'app/Components/Atoms/View';

import Box from '../Atoms/Box';

import BeerContainersSearchModal from './Modals/BeerContainersSearchModal';

const BeerContainersSearchField = ({ onChange }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedBeerVolume, setSelectedBeerVolume] = useState<string[]>([]);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleOnChange = value => {
    onChange(value);
  };

  return (
    <View noPaddingHorizontal>
      <TouchableOpacity onPress={openModal}>
        <Box input={true}>
          <View noPaddingVertical flex={1} justifyContent="center">
            <Text>
              {selectedBeerVolume.join(', ') || 'Select all available volumes'}
            </Text>
          </View>
        </Box>
      </TouchableOpacity>
      <BeerContainersSearchModal
        isVisible={isModalVisible}
        onClose={closeModal}
        onSelect={value => {
          setSelectedBeerVolume(value);
          handleOnChange(value);
        }}
      />
    </View>
  );
};

export default BeerContainersSearchField;
