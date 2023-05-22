import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

import AppTab from 'app/Navigation/AppTab';
import {createStackNavigator} from '@react-navigation/stack';

import BrandsStack from 'app/Navigation/AppTab/BrandStack';

export type RootNavigationType = {
  AppTab: undefined;
  Brands: undefined;
};

const RootStack = createStackNavigator<RootNavigationType>();

const Navigator = () => {
  const {t} = useTranslation();
  //const [initialRoute, setInitialRoute] = useState<'Home' | 'Language'>();

  /*   useEffect(() => {
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
  } */

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          // TODO: Remove detachPreviousScreen
          // https://github.com/react-navigation/react-navigation/issues/9891#issuecomment-916453157
          detachPreviousScreen: false,
          animationEnabled: false,
          headerShown: false,
          presentation: 'modal',
        }}>
        <RootStack.Screen name="AppTab" component={AppTab} />
        <RootStack.Screen name="Brands" component={BrandsStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
