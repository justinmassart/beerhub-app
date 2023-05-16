/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import HubPage from 'app/Pages/Hub';
import HeaderTitle from 'app/Components/Molecules/Navigation/HeaderTitle';
import Text from 'app/Components/Atoms/Text';

export type HubNavigationType = {
  hub: undefined;
};

const HubStack = createStackNavigator<HubNavigationType>();

export default () => {
  const {t} = useTranslation();
  return (
    <HubStack.Navigator
      screenOptions={{
        headerLeft: () => <Text />,
      }}>
      <HubStack.Screen
        name="hub"
        component={HubPage}
        options={{
          headerTitle: () => <HeaderTitle title={t('Hub.title')} />,
        }}
      />
    </HubStack.Navigator>
  );
};
