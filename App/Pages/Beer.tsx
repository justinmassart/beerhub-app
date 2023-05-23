import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import {RootStackNavigationProp} from 'app/Navigation';
import {BeersStackNavigationProp} from 'app/Navigation/AppTab/BeersStack';

const Beer = () => {
  const {params} = useRoute();
  const {navigate} = useNavigation<RootStackNavigationProp>();
  const {navigate: beerNavigation} = useNavigation<BeersStackNavigationProp>();

  return (
    <View>
      <View>
        <Text>{params?.beer?.name}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigate('Brands', {screen: 'brand'})}>
          <Text>Val-Dieu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => beerNavigation('beerMap')}>
          <Text>Où déguster ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Beer;
