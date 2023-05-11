import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from 'app/Pages/Home';
import LanguagePage from 'app/Pages/Language';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigator = () => {
  const [languageSelected, setLanguageSelected] = useState(false);

  const handleLanguageSelected = () => {
    setLanguageSelected(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={languageSelected ? 'Home' : 'Language'}>
        <Stack.Screen
          name="Language"
          component={LanguagePage}
          initialParams={{onLanguageSelected: handleLanguageSelected}}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerLeft: _disabled => true}}
        />
        {/*         <Stack.Screen
          name="Home"
          component={HomePage}
          options={({route}) => ({
            headerLeft: route.name === 'Home' ? null : undefined, // Conditionally hide the back arrow on Home screen
          })}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
