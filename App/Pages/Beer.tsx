import React from 'react';
import { useRoute } from '@react-navigation/native';
import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import BeerHeader from 'app/Components/Molecules/BeerHeader';
import { ScrollView } from 'react-native-gesture-handler';
import BeerInformations from 'app/Components/Molecules/BeerInformations';

const Beer = () => {
  const { params } = useRoute();
  const { beer }: any = params;

  return (
    <View noPadding flex={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View noPadding>
          <BeerHeader beer={beer}></BeerHeader>
          {/* ABOUT SECTION */}
          <View>
            <Text size="h1">About</Text>
          </View>
          <View>
            <Text size="h2">Description</Text>
          </View>
          <View>
            <Text>{beer.translations[0].description}</Text>
          </View>
          <View>
            <Text size="h2">Informations</Text>
          </View>
          <BeerInformations beer={beer} />
          <View>
            <Text size="h1">Comments</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Beer;
