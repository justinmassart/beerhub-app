/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from 'app/Navigation/AppTab/HomeStack';
import BeersStack from 'app/Navigation/AppTab/BeersStack';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={BeersStack} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
