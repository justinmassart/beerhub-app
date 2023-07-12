/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HubStack from 'app/Navigation/AppTab/HubStack';
import HomeStack from 'app/Navigation/AppTab/HomeStack';
import BeersStack from 'app/Navigation/AppTab/BeersStack';
import PlacesStack from 'app/Navigation/AppTab/PlacesStack';
import ProfileStack from 'app/Navigation/AppTab/ProfileStack';
import { useTranslation } from 'react-i18next';

export type AppTabNavigationType = {
  AppTab: undefined;
  Home: undefined;
  Hub: undefined;
  Beers: undefined;
  Places: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<AppTabNavigationType>();

export default () => {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Hub"
        component={HubStack}
        options={{ title: t('Hub.title') || 'Hub' }}
      />
      <Tab.Screen
        name="Beers"
        component={BeersStack}
        options={{ title: t('Beers.title') || 'Beers' }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ title: t('Home.title') || 'Home' }}
      />
      <Tab.Screen
        name="Places"
        component={PlacesStack}
        options={{ title: t('Places.title') || 'Places' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{ title: t('Profile.title') || 'Profile' }}
      />
    </Tab.Navigator>
  );
};
