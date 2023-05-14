/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import LanguagePage from 'app/Pages/Language';
import HeaderTitle from 'app/Components/Molecules/Navigation/HeaderTitle';
import Text from 'app/Components/Atoms/Text';

export type LanguageNavigationType = {
  Language: undefined;
};

const LanguageStack = createStackNavigator<LanguageNavigationType>();

export default () => {
  const {t} = useTranslation();
  return (
    <LanguageStack.Navigator>
      <LanguageStack.Screen
        name="Language"
        component={LanguagePage}
        options={{
          headerTitle: () => <HeaderTitle title={t('Language.title')} />,
        }}
      />
    </LanguageStack.Navigator>
  );
};
