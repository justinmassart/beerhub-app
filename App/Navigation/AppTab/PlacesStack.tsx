/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import PlacesPage from 'app/Pages/Places';
import PlacePage from 'app/Pages/Place';
import HeaderTitle from 'app/Components/Molecules/Navigation/HeaderTitle';
import Text from 'app/Components/Atoms/Text';
import { RouteProp } from '@react-navigation/native';

export type PlacesNavigationType = {
  places: undefined;
  place: {
    place: {};
  };
};

export type PlacesStackNavigationProp =
  StackNavigationProp<PlacesNavigationType>;

export type PlacesStackRouteProp<T extends keyof PlacesNavigationType> =
  RouteProp<PlacesNavigationType, T>;

const PlacesStack = createStackNavigator<PlacesNavigationType>();

export default () => {
  const { t } = useTranslation();
  return (
    <PlacesStack.Navigator>
      <PlacesStack.Screen
        name="places"
        component={PlacesPage}
        options={{
          headerLeft: () => <Text />,
          headerTitle: () => <HeaderTitle title={t('Places.title')} />,
        }}
      />
      <PlacesStack.Screen
        name="place"
        component={PlacePage}
        options={({ route }) => ({
          headerTitle: () => (
            <HeaderTitle
              title={
                (route.params?.place as { name: string })?.name || 'PlaceName'
              }
            />
          ),
        })}
      />
    </PlacesStack.Navigator>
  );
};
