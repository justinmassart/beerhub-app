import React from 'react';
import { Modal, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';

import LogOrRegister from 'app/Components/Molecules/LogOrRegister';

const LogOrRegisterModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <TouchableOpacity style={styles.overlay} activeOpacity={1}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBox} alignItems="center">
            <View noPadding>
              <Text>Please log in or register to continue.</Text>
            </View>
            <LogOrRegister onClose={onClose} displayMessage={false} />
            <Button title="Close" onPress={onClose} />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default LogOrRegisterModal;
