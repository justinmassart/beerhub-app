import React from 'react';
import Text from 'app/Components/Atoms/Text';
import { TouchableOpacity } from 'react-native';
import View from 'app/Components/Atoms/View';
import { useNavigation } from '@react-navigation/native';
import { PlacesStackNavigationProp } from 'app/Navigation/AppTab/PlacesStack';
import Box from 'app/Components/Atoms/Box';
import Icon from 'react-native-vector-icons/Ionicons';
import Rating from './Rating';

const PlaceItem = ({ place }: { place: any }) => {
  const { navigate } = useNavigation<PlacesStackNavigationProp>();
  const averageRating = place?.ratings?.average_rating || 0;
  const totalRater = place?.ratings?.total_rater || 0;

  return (
    <TouchableOpacity onPress={() => navigate('place', { place: place })}>
      <Box color={undefined} radius={undefined} style={{ marginTop: 32 }}>
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
            <Text>{place?.name}</Text>
          </View>
          <View noPadding flex={2}>
            <Icon name="home-outline" size={150} color="#249" />
          </View>
        </View>
        <View
          noPadding
          isHorizontal
          alignItems="center"
          justifyContent="space-between"
          style={{ maxWidth: '60%' }}>
          <TouchableOpacity onPress={() => console.log('Favorite')}>
            <Icon name="heart-outline" size={40} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Comment')}>
            <Icon name="chatbox-ellipses-outline" size={40} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Share')}>
            <Icon name="share-outline" size={40} color="#000" />
          </TouchableOpacity>
        </View>
      </Box>
    </TouchableOpacity>
  );
};

export default PlaceItem;
