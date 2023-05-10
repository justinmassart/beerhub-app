/* eslint-disable react-native/no-inline-styles */
import {t} from 'i18next';
import React from 'react';
import {View, Text} from 'react-native';
//import Text from 'app/Components/Atoms/Text';

const Home: React.FC = () => {
  return (
    <View>
      <Text style={{fontFamily: 'Alegreya-Black'}}>{t('Home.title')}</Text>
    </View>
  );
};

export default Home;
