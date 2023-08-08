import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5,
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 16,
  },
  menuContainer: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: 'transparent',
  },
  menuItem: {
    backgroundColor: '#DDDDDD',
    marginRight: 0,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5,
  },
});

const FloatingButtonMenu = ({ isDarker }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    isDarker(!isMenuVisible);
  };

  return (
    <>
      <TouchableOpacity style={styles.floatingButton} onPress={toggleMenu}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
      {isMenuVisible && (
        <View style={styles.menuContainer}>
          <View noPadding>
            <TouchableOpacity onPress={() => console.log('gne')}>
              <View
                borderRadius={10}
                paddingType="small"
                style={styles.menuItem}>
                <Text>Add a beer</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View noPadding>
            <TouchableOpacity onPress={() => console.log('gne')}>
              <View
                borderRadius={10}
                paddingType="small"
                style={styles.menuItem}>
                <Text>Scan a beer</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default FloatingButtonMenu;
