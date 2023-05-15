/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import ProfilePage from 'app/Pages/Profile';
import SettingsPage from 'app/Pages/Settings';
import LanguagePage from 'app/Pages/Language';
import HeaderTitle from 'app/Components/Molecules/Navigation/HeaderTitle';
import {RouteProp} from '@react-navigation/native';

export type ProfileNavigationType = {
  profile: undefined;
  Settings: undefined;
  Language: undefined;
};

export type ProfileStackNavigationProp =
  StackNavigationProp<ProfileNavigationType>;

export type DashboardStackRouteProp<T extends keyof ProfileNavigationType> =
  RouteProp<ProfileNavigationType, T>;

const ProfileStack = createStackNavigator<ProfileNavigationType>();

export default () => {
  const {t} = useTranslation();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="profile"
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
    </ProfileStack.Navigator>
  );
};
