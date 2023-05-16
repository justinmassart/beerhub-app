/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import BeersPage from 'app/Pages/Beers';
import HeaderTitle from 'app/Components/Molecules/Navigation/HeaderTitle';

import Text from 'atoms/Text';

export type BeersNavigationType = {
  beers: undefined;
};

const BeersStack = createStackNavigator<BeersNavigationType>();

export default () => {
  const {t} = useTranslation();
  return (
    <BeersStack.Navigator
      screenOptions={{
        // TODO: Remove detachPreviousScreen
        // https://github.com/react-navigation/react-navigation/issues/9891#issuecomment-916453157
        detachPreviousScreen: false,
        animationEnabled: false,
        presentation: 'modal',
      }}>
      <BeersStack.Screen
        name="beers"
        component={BeersPage}
        options={{
          headerLeft: () => <Text />,
          headerTitle: () => <HeaderTitle title={t('Beers.title')} />,
        }}
      />
    </BeersStack.Navigator>
  );
};
