import {useRoute} from '@react-navigation/native';
import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import React from 'react';

const Brand = () => {
  const {params} = useRoute();
  return (
    <View>
      <View>
        <Text>Une marque</Text>
      </View>
    </View>
  );
};

export default Brand;
