/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import LanguagePage from 'app/Pages/Language';
import HeaderTitle from 'app/Components/Molecules/Navigation/HeaderTitle';

export type LanguageNavigationType = {
  language: undefined;
};

const LanguageStack = createStackNavigator<LanguageNavigationType>();

export default () => {
  const {t} = useTranslation();
  return (
    <LanguageStack.Navigator>
      <LanguageStack.Screen
        name="language"
        component={LanguagePage}
        options={{
          headerTitle: () => <HeaderTitle title={t('Language.title')} />,
        }}
      />
    </LanguageStack.Navigator>
  );
};
