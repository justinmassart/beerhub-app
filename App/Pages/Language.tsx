import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Text from 'app/Components/Atoms/Text';
import i18n from 'app/Services/i18n';

const Language = () => {
  const {navigate} = useNavigation();

  const chooseLanguage = async (locale: string) => {
    i18n.changeLanguage(locale);
    await AsyncStorage.setItem('locale', locale);
    navigate('Home');
  };

  return (
    <View>
      <View>
        <Text>Choose your language</Text>
      </View>
      <View>
        <Button title="FR" onPress={() => chooseLanguage('fr')} />
        <Button title="EN" onPress={() => chooseLanguage('en')} />
      </View>
    </View>
  );
};

export default Language;
