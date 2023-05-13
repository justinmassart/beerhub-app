import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LanguagePage from 'app/Pages/Language';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeStack from 'app/Navigation/AppTab/HomeStack';

const RootStack = createStackNavigator();

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
      <RootStack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          // TODO: Remove detachPreviousScreen
          // https://github.com/react-navigation/react-navigation/issues/9891#issuecomment-916453157
          detachPreviousScreen: false,
          animationEnabled: false,
          headerShown: false,
          presentation: 'modal',
        }}>
        <RootStack.Screen name="Home" component={HomeStack} />
        <RootStack.Screen name="Language" component={LanguagePage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
