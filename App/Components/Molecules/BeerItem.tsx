import React from 'react';
import Text from 'app/Components/Atoms/Text';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BeersStackNavigationProp } from 'app/Navigation/AppTab/BeersStack';

const BeerItem = ({ beer }: { beer: any }) => {
  const { navigate } = useNavigation<BeersStackNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigate('beer', { beer: beer })}>
      <Text>{beer?.name}</Text>
      <Text>{beer?.translations[0]?.description}</Text>
      <Text>{beer?.brand?.brand?.name}</Text>
      <View style={{ minHeight: 25 }} />
    </TouchableOpacity>
  );
};

export default BeerItem;
