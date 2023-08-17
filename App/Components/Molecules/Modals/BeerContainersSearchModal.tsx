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

const BeerContainersSearchModal = ({ isVisible, onClose, onSelect }) => {
  const [selectedBeerContainer, setSelectedBeerContainer] = useState<string[]>(
    [],
  );
  const containersAvailable = ['bottle', 'can', 'keg', 'barrel'];

  const handleSelectVolumes = container => {
    if (selectedBeerContainer.includes(container)) {
      const updatedVolumes = selectedBeerContainer.filter(
        item => item !== container,
      );
      setSelectedBeerContainer(updatedVolumes);
    } else {
      setSelectedBeerContainer([...selectedBeerContainer, container]);
    }
  };

  useEffect(() => {
    onSelect(selectedBeerContainer);
  }, [selectedBeerContainer]);

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
          data={containersAvailable}
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

export default BeerContainersSearchModal;
