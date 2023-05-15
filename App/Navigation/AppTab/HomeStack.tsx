/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import HomePage from 'app/Pages/Home';
import HeaderTitle from 'app/Components/Molecules/Navigation/HeaderTitle';
import Text from 'app/Components/Atoms/Text';

export type HomeNavigationType = {
  home: undefined;
};

const HomeStack = createStackNavigator<HomeNavigationType>();

export default () => {
  const {t} = useTranslation();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerLeft: () => <Text />,
      }}>
      <HomeStack.Screen
        name="home"
        component={HomePage}
        options={{
          headerTitle: () => <HeaderTitle title={t('Home.title')} />,
        }}
      />
    </HomeStack.Navigator>
  );
};
