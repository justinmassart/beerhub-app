import React from 'react';
import { useRoute } from '@react-navigation/native';
import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import BeerHeader from 'app/Components/Molecules/BeerHeader';

const Beer = () => {
  const { params } = useRoute();
  const { beer } = params;

  return (
    <View noPadding>
      <BeerHeader beer={beer}></BeerHeader>
      <View>
        <Text>Test</Text>
      </View>
    </View>
  );
};

export default Beer;
