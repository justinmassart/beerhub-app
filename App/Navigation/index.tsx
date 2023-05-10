import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from 'app/Pages/Home';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
