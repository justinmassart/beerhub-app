import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import View from '../Atoms/View';
import Text from '../Atoms/Text';
import Box from '../Atoms/Box';
import DecimalNumberPickerModal from './Modals/DecimalNumberPickerModal';

const NumberPicker = ({ title, modalTitle, onValueSubmit }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [beerABV, setBeerABV] = useState<number | null>(null);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View noPaddingHorizontal>
      <TouchableOpacity onPress={openModal}>
        <Box input={true}>
          <View noPaddingVertical flex={1} justifyContent="center">
            <Text size="medium">{beerABV ?? title}</Text>
          </View>
        </Box>
      </TouchableOpacity>
      <DecimalNumberPickerModal
        modalTitle={modalTitle}
        isVisible={isModalVisible}
        onClose={closeModal}
        onValueSubmit={(value: number) => {
          setBeerABV(value);
          onValueSubmit(value);
        }}
      />
    </View>
  );
};

export default NumberPicker;
