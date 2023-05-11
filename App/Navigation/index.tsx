import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from 'app/Pages/Home';
import LanguagePage from 'app/Pages/Language';
import {NavigationContainer} from '@react-navigation/native';
import {AVAILABLE_LANGUAGES, getDefaultLanguage} from 'app/Config/Languages';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const Navigator = () => {
  const [storageLocale, setStorageLocale] = useState<string | null>(null);
  const defaultLang = getDefaultLanguage();

  const isLocaleAvailable = () => {
    if (
      AVAILABLE_LANGUAGES.includes(defaultLang) ||
      AVAILABLE_LANGUAGES.includes(storageLocale)
    ) {
      console.log(defaultLang);
      console.log(storageLocale);
      return true;
    }
    return false;
  };

  useEffect(() => {
    const getStoredLocale = async () => {
      const storedLocale = await AsyncStorage.getItem('locale');
      setStorageLocale(storedLocale);
    };
    getStoredLocale();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLocaleAvailable() ? 'Home' : 'Language'}>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerLeft: _disabled => true}}
        />
        <Stack.Screen name="Language" component={LanguagePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
