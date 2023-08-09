import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BeersStackNavigationProp } from 'app/Navigation/AppTab/BeersStack';

import { useAuth } from 'app/Hooks/Me';
import { ProfileStackNavigationProp } from 'app/Navigation/AppTab/ProfileStack';

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
    backgroundColor: '#007AFF',
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

const BeerFloatingButtonMenu = ({ isDarker, isFloatingMenuOpen }) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [didNavigate, setDidNavigate] = useState<boolean>(false);

  const { me } = useAuth();

  const { navigate } = useNavigation<BeersStackNavigationProp>();
  const { navigate: profileNavigate } =
    useNavigation<ProfileStackNavigationProp>();

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    isDarker(!isMenuVisible);
    isFloatingMenuOpen(!isMenuVisible);
  };

  const checkNavigation = () => {
    if (me) {
      setDidNavigate(true);
      navigate('addBeer');
    } else {
      profileNavigate('Profile');
    }
  };

  useFocusEffect(
    useCallback(() => {
      setIsMenuVisible(false);
      isDarker(false);
      isFloatingMenuOpen(false);
    }, []),
  );

  return (
    <>
      <TouchableOpacity style={styles.floatingButton} onPress={toggleMenu}>
        <Icon name="plus" color={'white'} size={50} />
      </TouchableOpacity>
      {isMenuVisible && (
        <View style={styles.menuContainer}>
          <View noPadding>
            <TouchableOpacity onPress={checkNavigation}>
              <View
                borderRadius={10}
                paddingType="small"
                style={styles.menuItem}>
                <Text color="white">Add a beer</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View noPadding>
            <TouchableOpacity onPress={() => console.log('gne')}>
              <View
                borderRadius={10}
                paddingType="small"
                style={styles.menuItem}>
                <Text color="white">Scan a beer</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default BeerFloatingButtonMenu;
