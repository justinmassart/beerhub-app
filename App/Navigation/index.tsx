import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeStack from 'app/Navigation/AppTab/HomeStack';
import BeersStack from 'app/Navigation/AppTab/BeersStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LanguageStack from './AppTab/LanguageStack';

export type RootNavigationType = {
  App: undefined;
  Home: undefined;
  Hub: undefined;
  Beers: undefined;
  Places: undefined;
  Profile: undefined;
  Language: undefined;
};

const Tab = createBottomTabNavigator<RootNavigationType>();

const Navigator = () => {
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
        initialRouteName={initialRoute}
        screenOptions={{
          // TODO: Remove detachPreviousScreen
          // https://github.com/react-navigation/react-navigation/issues/9891#issuecomment-916453157
          detachPreviousScreen: false,
          animationEnabled: false,
          headerShown: false,
          presentation: 'modal',
        }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Beers" component={BeersStack} />
        <Tab.Screen name="Language" component={LanguageStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
