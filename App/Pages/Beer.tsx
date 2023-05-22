import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';

const Beer = () => {
  const {params} = useRoute();
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <Text>{params?.beer?.name}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Brands', {screen: 'brand'})}>
          <Text>Val-Dieu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Beer;
