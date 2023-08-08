import React from 'react';
import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackNavigationProp } from 'app/Navigation/AppTab/ProfileStack';

const LogOrRegister = ({ displayMessage, onClose }) => {
  const { navigate } = useNavigation();

  return (
    <View noPaddingHorizontal alignItems="center">
      {displayMessage && <Text>You are not logged in ...</Text>}
      <View noPaddingHorizontal alignItems="center">
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
          }}
          onPress={() => {
            navigate('AppTab', {
              screen: 'MyProfile',
              params: {
                screen: 'Login',
              },
            });
            onClose(onClose);
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
            navigate('AppTab', {
              screen: 'MyProfile',
              params: {
                screen: 'Register',
              },
            });
            onClose(onClose);
          }}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogOrRegister;
