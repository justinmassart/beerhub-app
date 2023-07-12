import React from 'react';
import { TouchableOpacity } from 'react-native';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import InputField from 'app/Components/Molecules/InputField';

const LoginForm = () => {
  return (
    <>
      <View noPaddingHorizontal>
        <Text>Login Form</Text>
      </View>
      <View noPaddingHorizontal>
        <Text>Email</Text>
        <InputField type="email" />
      </View>
      <View noPaddingHorizontal>
        <Text>Password</Text>
        <InputField type="password" />
      </View>
      <View noPaddingHorizontal>
        <TouchableOpacity
          style={{ backgroundColor: 'white', padding: 10 }}
          onPress={() => console.log('Connection ...')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginForm;
