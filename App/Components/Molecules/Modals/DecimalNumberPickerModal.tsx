import React, { useState } from 'react';
import { Modal, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';

const DecimalNumberPickerModal = ({
  isVisible,
  onClose,
  onValueSubmit,
  modalTitle,
}) => {
  const [integerPart, setIntegerPart] = useState('0');
  const [decimalPart, setDecimalPart] = useState('0');

  const handleValueSubmit = () => {
    const selectedValue = parseFloat(`${integerPart}.${decimalPart}`);
    onValueSubmit(selectedValue);
    onClose();
  };

  return (
    <Modal
      style={styles.modal}
      visible={isVisible}
      animationType="slide"
      onRequestClose={onClose}
      transparent={true}>
      <View noPaddingHorizontal style={styles.modalContainer}>
        <View isHorizontal alignItems="center" justifyContent="space-between">
          <Text>{modalTitle}</Text>
          <View
            noPadding
            flex={1}
            justifyContent="center"
            alignItems="flex-end">
            <TouchableOpacity
              onPress={() => {
                onClose();
              }}>
              <Icon name="close" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View noPaddingVertical alignItems="center" style={styles.container}>
          <Picker
            style={styles.picker}
            selectedValue={integerPart}
            onValueChange={itemValue => setIntegerPart(itemValue)}>
            {Array.from({ length: 71 }, (_, index) => (
              <Picker.Item
                key={index}
                label={index.toString()}
                value={index.toString()}
              />
            ))}
          </Picker>
          <Text>.</Text>
          <Picker
            style={styles.picker}
            selectedValue={decimalPart}
            onValueChange={itemValue => setDecimalPart(itemValue)}>
            {Array.from({ length: 10 }, (_, index) => (
              <Picker.Item
                key={index}
                label={index.toString()}
                value={index.toString()}
              />
            ))}
          </Picker>
        </View>
        <View>
          <View noPaddingHorizontal>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: 10,
              }}
              onPress={handleValueSubmit}>
              <Text align="center">Validate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  picker: {
    flex: 1,
  },
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

export default DecimalNumberPickerModal;
