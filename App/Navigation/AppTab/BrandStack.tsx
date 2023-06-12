/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import BrandPage from 'app/Pages/Brand';
import BrandsPage from 'app/Pages/Brands';
import HeaderTitle from 'app/Components/Molecules/Navigation/HeaderTitle';

import Text from 'atoms/Text';

export type BrandsNavigationType = {
  brands: undefined;
  brand: {
    brandId?: string;
    brandName?: string;
  };
};

export type BrandsStackNavigationProp =
  StackNavigationProp<BrandsNavigationType>;

export type BrandsStackRouteProp<T extends keyof BrandsNavigationType> =
  RouteProp<BrandsNavigationType, T>;

const BrandsStack = createStackNavigator<BrandsNavigationType>();

export default () => {
  const { t } = useTranslation();
  return (
    <BrandsStack.Navigator>
      <BrandsStack.Screen
        name="brands"
        component={BrandsPage}
        options={{
          headerLeft: () => <Text />,
          headerTitle: () => <HeaderTitle title={t('Brands.title')} />,
        }}
      />
      <BrandsStack.Screen
        name="brand"
        component={BrandPage}
        options={({ route }) => ({
          headerTitle: () => (
            <HeaderTitle title={route.params?.brandName || 'BrandName'} />
          ),
        })}
      />
    </BrandsStack.Navigator>
  );
};
