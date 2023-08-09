import React from 'react';
import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackNavigationProp } from 'app/Navigation/AppTab/ProfileStack';

const LogOrRegister = () => {
  const { navigate } = useNavigation<ProfileStackNavigationProp>();

  return (
    <View noPaddingHorizontal alignItems="center">
      <Text>Log yourself in to access every features.</Text>
      <Text>If you don't have an account yet, create one !</Text>
      <View noPaddingHorizontal alignItems="center">
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
          }}
          onPress={() => {
            navigate('Login');
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Text>or</Text>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
          }}
          onPress={() => {
            navigate('Register');
          }}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogOrRegister;
