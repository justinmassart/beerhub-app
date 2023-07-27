/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import ProfilePage from 'app/Pages/Profile';
import SettingsPage from 'app/Pages/Settings';
import LanguagePage from 'app/Pages/Language';
import LoginPage from 'app/Pages/Login';
import RegisterPage from 'app/Pages/Register';
import HeaderTitle from 'app/Components/Molecules/Navigation/HeaderTitle';
import { RouteProp } from '@react-navigation/native';

export type ProfileNavigationType = {
  Profile: undefined;
  Settings: undefined;
  Language: undefined;
  Login: undefined;
  Register: undefined;
};

export type ProfileStackNavigationProp =
  StackNavigationProp<ProfileNavigationType>;

export type DashboardStackRouteProp<T extends keyof ProfileNavigationType> =
  RouteProp<ProfileNavigationType, T>;

const ProfileStack = createStackNavigator<ProfileNavigationType>();

export default () => {
  const { t } = useTranslation();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerTitle: () => <HeaderTitle title={t('Profile.title')} />,
        }}
      />
      <ProfileStack.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          headerTitle: () => <HeaderTitle title={t('Settings.title')} />,
        }}
      />
      <ProfileStack.Screen
        name="Language"
        component={LanguagePage}
        options={{
          headerTitle: () => <HeaderTitle title={t('Language.title')} />,
        }}
      />
      <ProfileStack.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerTitle: () => <HeaderTitle title={t('Login.title')} />,
        }}
      />
      <ProfileStack.Screen
        name="Register"
        component={RegisterPage}
        options={{
          headerTitle: () => <HeaderTitle title={t('SignUp.title')} />,
        }}
      />
    </ProfileStack.Navigator>
  );
};
