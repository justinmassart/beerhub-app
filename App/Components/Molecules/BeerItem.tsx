import React from 'react';
import Text from 'app/Components/Atoms/Text';
import { TouchableOpacity } from 'react-native';
import View from 'app/Components/Atoms/View';
import { useNavigation } from '@react-navigation/native';
import { BeersStackNavigationProp } from 'app/Navigation/AppTab/BeersStack';
import Box from 'app/Components/Atoms/Box';
import Icon from 'react-native-vector-icons/Ionicons';

const BeerItem = ({ beer }: { beer: any }) => {
  const { navigate } = useNavigation<BeersStackNavigationProp>();
  const aromas = JSON.parse(beer?.aromas);

  console.log(beer);

  return (
    <TouchableOpacity onPress={() => navigate('beer', { beer: beer })}>
      <Box color={undefined} radius={undefined} style={{ marginTop: 32 }}>
        <View noPadding>
          <Text>{beer?.brand?.brand?.name}</Text>
          <Text>{beer?.name}</Text>
          <Text>{beer?.type}</Text>
          <Text>{aromas.join(', ')}</Text>
          <Text>
            {beer?.volume +
              ' cl - ' +
              beer?.abv +
              '% ABV - ' +
              beer?.ibu +
              ' IBU'}
          </Text>
        </View>
        <View noPadding>
          <Icon name="heart" size={20} color="#249" />
        </View>
      </Box>
    </TouchableOpacity>
  );
};

export default BeerItem;
