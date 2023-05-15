/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import PlacesPage from 'app/Pages/Places';
import HeaderTitle from 'app/Components/Molecules/Navigation/HeaderTitle';
import Text from 'app/Components/Atoms/Text';

export type PlacesNavigationType = {
  places: undefined;
};

const PlacesStack = createStackNavigator<PlacesNavigationType>();

export default () => {
  const {t} = useTranslation();
  return (
    <PlacesStack.Navigator
      screenOptions={{
        headerLeft: () => <Text />,
      }}>
      <PlacesStack.Screen
        name="places"
        component={PlacesPage}
        options={{
          headerTitle: () => <HeaderTitle title={t('Places.title')} />,
        }}
      />
    </PlacesStack.Navigator>
  );
};
