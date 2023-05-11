import {t} from 'i18next';
import React from 'react';
import {View} from 'react-native';
import Text from 'app/Components/Atoms/Text';

const Home: React.FC = () => {
  return (
    <View>
      <Text font="secondary" weight="medium" size="huge">
        {t('Home.title')}
      </Text>
    </View>
  );
};

export default Home;
