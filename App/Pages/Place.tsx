import React from 'react-native';
import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import { useRoute } from '@react-navigation/native';

const Place = () => {
  const { params } = useRoute();
  const { place } = params;

  return (
    <View>
      <Text>Place page</Text>
    </View>
  );
};

export default Place;
