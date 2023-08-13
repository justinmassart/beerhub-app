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

const BeerVolumesSearchModal = ({ isVisible, onClose, onSelect }) => {
  const [selectedBeerVolume, setSelectedBeerVolume] = useState<string[]>([]);
  const volumesAvailable = [
    '15cl',
    '25cl',
    '33cl',
    '50cl',
    '75cl',
    '1L',
    '1.5L',
    '1.75L',
    '2L',
    '+2L',
  ];

  const handleSelectVolumes = (volume: string) => {
    if (selectedBeerVolume.includes(volume)) {
      const updatedVolumes = selectedBeerVolume.filter(item => item !== volume);
      setSelectedBeerVolume(updatedVolumes);
    } else {
      setSelectedBeerVolume([...selectedBeerVolume, volume]);
    }
  };

  useEffect(() => {
    onSelect(selectedBeerVolume);
  }, [selectedBeerVolume]);

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
        <FlatList
          data={volumesAvailable}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                handleSelectVolumes(item);
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

export default BeerVolumesSearchModal;
