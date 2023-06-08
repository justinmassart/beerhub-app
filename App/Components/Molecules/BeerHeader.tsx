import React from 'react';
import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from 'app/Navigation';
import { BeersStackNavigationProp } from 'app/Navigation/AppTab/BeersStack';

const BeerHeader = ({ beer }: { beer: any }) => {
  const { navigate } = useNavigation<RootStackNavigationProp>();
  const { navigate: beerNavigation } =
    useNavigation<BeersStackNavigationProp>();

  return (
    <>
      <View>
        <Text>{beer?.name}</Text>
      </View>
      <View>
        <Text>{beer?.type}</Text>
      </View>
      <View noPadding>
        <View>
          <Text>Brewed by :</Text>
        </View>
        <View>
          <Text>{beer?.brand.brand.name}</Text>
        </View>
        <View>
          <Text>{beer?.brand.brand.address}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigate('Brands', { screen: 'brand' })}>
            <Text>See the brewer</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => beerNavigation('beerMap')}>
            <Text>Où déguster ?</Text>
          </TouchableOpacity>
        </View>
        <View
          noPadding
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
          }}
        />
      </View>
    </>
  );
};

export default BeerHeader;
