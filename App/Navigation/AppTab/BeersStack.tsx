/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import BeerPage from 'app/Pages/Beer';
import BeersPage from 'app/Pages/Beers';
import BeerMapPage from 'app/Pages/BeerMap';
import HeaderTitle from 'app/Components/Molecules/Navigation/HeaderTitle';

import Text from 'atoms/Text';

export type BeersNavigationType = {
  beers: undefined;
  beer: {
    beer: {};
  };
  beerMap: undefined;
};

export type BeersStackNavigationProp = StackNavigationProp<BeersNavigationType>;

export type DashboardStackRouteProp<T extends keyof BeersNavigationType> =
  RouteProp<BeersNavigationType, T>;

const BeersStack = createStackNavigator<BeersNavigationType>();

export default () => {
  const { t } = useTranslation();
  return (
    <BeersStack.Navigator>
      <BeersStack.Screen
        name="beers"
        component={BeersPage}
        options={{
          headerLeft: () => <Text />,
          headerTitle: () => <HeaderTitle title={t('Beers.title')} />,
        }}
      />
      <BeersStack.Screen
        name="beer"
        component={BeerPage}
        options={({ route }) => ({
          headerTitle: () => (
            <HeaderTitle
              title={
                (route.params?.beer as { name: string })?.name || 'BeerName'
              }
            />
          ),
        })}
      />
      <BeersStack.Screen
        name="beerMap"
        component={BeerMapPage}
        options={{
          headerTitle: () => <HeaderTitle title={t('BeerMap.title')} />,
        }}
      />
    </BeersStack.Navigator>
  );
};
