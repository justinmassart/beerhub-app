import React from 'react';
import Text from 'app/Components/Atoms/Text';
import { TouchableOpacity } from 'react-native';
import View from 'app/Components/Atoms/View';
import { useNavigation } from '@react-navigation/native';
import { BeersStackNavigationProp } from 'app/Navigation/AppTab/BeersStack';
import Box from 'app/Components/Atoms/Box';
import Icon from 'react-native-vector-icons/Ionicons';
import Rating from './Rating';

const BeerItem = ({ beer, isDisabled }: { beer: any; isDisabled: boolean }) => {
  const { navigate } = useNavigation<BeersStackNavigationProp>();
  const aromas = JSON.parse(beer?.aromas);
  const averageRating = beer?.ratings?.average_rating || 0;
  const totalRater = beer?.ratings?.total_rater || 0;

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={() => navigate('beer', { beer: beer })}>
      <Box height={200} style={{ marginTop: 32 }}>
        <View
          noPadding
          isHorizontal
          justifyContent="space-between"
          style={{ maxWidth: '55%' }}>
          <Rating rating={averageRating} />
          <Text>{totalRater} votes</Text>
        </View>
        <View noPadding isHorizontal>
          <View noPadding flex={3}>
            <Text>{beer?.brand?.brand?.name}</Text>
            <Text>{beer?.name}</Text>
            <Text>{beer?.type}</Text>
            <Text>{aromas.join(', ')}</Text>
            <Text>
              {33 + ' cl - ' + beer?.abv + '% ABV - ' + beer?.ibu + ' IBU'}
            </Text>
            <Text>{beer?.brand?.brand?.address}</Text>
          </View>
          <View noPadding flex={2}>
            <Icon name="beer-outline" size={150} color="#249" />
          </View>
        </View>
        <View
          noPadding
          isHorizontal
          alignItems="center"
          justifyContent="space-between"
          style={{ maxWidth: '60%' }}>
          <TouchableOpacity
            disabled={isDisabled}
            onPress={() => console.log('Favorite')}>
            <Icon name="heart-outline" size={40} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={isDisabled}
            onPress={() => console.log('Comment')}>
            <Icon name="chatbox-ellipses-outline" size={40} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={isDisabled}
            onPress={() => console.log('Share')}>
            <Icon name="share-outline" size={40} color="#000" />
          </TouchableOpacity>
        </View>
      </Box>
    </TouchableOpacity>
  );
};

export default BeerItem;
