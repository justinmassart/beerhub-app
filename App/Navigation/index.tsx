import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from 'app/Pages/Home';
import LanguagePage from 'app/Pages/Language';
import {NavigationContainer} from '@react-navigation/native';
import i18n from 'app/Services/i18n';
import {AVAILABLE_LANGUAGES, getDefaultLanguage} from 'app/Config/Languages';

const Stack = createStackNavigator();

const Navigator = () => {
  const defaultLang = getDefaultLanguage();

  const isLocaleAvailable = () => {
    if (AVAILABLE_LANGUAGES.includes(defaultLang)) {
      return true;
    }
    return false;
  };

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
