import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import PageContainer from 'app/Components/Atoms/PageContainer';

import BeerHeader from 'app/Components/Molecules/BeerHeader';
import BeerInformations from 'app/Components/Molecules/BeerInformations';
import InputField from 'app/Components/Molecules/InputField';

import AddBeerForm from 'app/Forms/AddBeerForm';

const AddBeer = () => {
  return (
    <ScrollView>
      <PageContainer>
        <View noPaddingHorizontal>
          <Text>
            Please be carefull to register correct data about the beer you want
            to add.
          </Text>
        </View>
        <AddBeerForm />
      </PageContainer>
    </ScrollView>
  );
};

export default AddBeer;
