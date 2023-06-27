import React from 'react';
import Text from 'app/Components/Atoms/Text';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BeersStackNavigationProp } from 'app/Navigation/AppTab/BeersStack';
import Box from 'app/Components/Atoms/Box';

const BeerItem = ({ beer }: { beer: any }) => {
  const { navigate } = useNavigation<BeersStackNavigationProp>();

  return (
    <Box
      color={undefined}
      radius={undefined}
      style={{ marginBottom: 16, marginTop: 16 }}>
      <TouchableOpacity onPress={() => navigate('beer', { beer: beer })}>
        <Text>{beer?.name}</Text>
        <Text>{beer?.translations[0]?.description}</Text>
        <Text>{beer?.brand?.brand?.name}</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default BeerItem;
