import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

import HubStack from 'app/Navigation/AppTab/HubStack';
import HomeStack from 'app/Navigation/AppTab/HomeStack';
import BeersStack from 'app/Navigation/AppTab/BeersStack';
import PlacesStack from 'app/Navigation/AppTab/PlacesStack';
import ProfileStack from 'app/Navigation/AppTab/ProfileStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type RootNavigationType = {
  App: undefined;
  Home: undefined;
  Hub: undefined;
  Beers: undefined;
  Places: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootNavigationType>();

const Navigator = () => {
  const {t} = useTranslation();
  const [initialRoute, setInitialRoute] = useState<'Home' | 'Language'>();

  useEffect(() => {
    const checkStoredLocale = async () => {
      const storedLocale = await AsyncStorage.getItem('locale');

      if (storedLocale) {
        setInitialRoute('Home');
      } else {
        setInitialRoute('Language');
      }
    };

    checkStoredLocale();
  }, []);

  if (initialRoute === undefined) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          // TODO: Remove detachPreviousScreen
          // https://github.com/react-navigation/react-navigation/issues/9891#issuecomment-916453157
          detachPreviousScreen: false,
          animationEnabled: false,
          headerShown: false,
          presentation: 'modal',
        }}>
        <Tab.Screen
          name="Hub"
          component={HubStack}
          options={{title: t('Hub.title') || 'Hub'}}
        />
        <Tab.Screen
          name="Beers"
          component={BeersStack}
          options={{title: t('Beers.title') || 'Beers'}}
        />
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{title: t('Home.title') || 'Home'}}
        />
        <Tab.Screen
          name="Places"
          component={PlacesStack}
          options={{title: t('Places.title') || 'Places'}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{title: t('Profile.title') || 'Profile'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
