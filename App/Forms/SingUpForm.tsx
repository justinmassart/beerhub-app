import React from 'react';
import { TouchableOpacity } from 'react-native';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import InputField from 'app/Components/Molecules/InputField';

const SignUpForm = () => {
  return (
    <>
      <View noPaddingHorizontal>
        <Text>Login Form</Text>
      </View>
      <View noPaddingHorizontal>
        <Text>First name</Text>
        <InputField type="text" />
      </View>
      <View noPaddingHorizontal>
        <Text>Last name</Text>
        <InputField type="text" />
      </View>
      <View noPaddingHorizontal>
        <Text>Email</Text>
        <InputField type="email" />
      </View>
      <View noPaddingHorizontal>
        <Text>Phone number*</Text>
        <InputField type="phone" />
      </View>
      <View noPaddingHorizontal>
        <Text>Country</Text>
        <InputField type="text" />
      </View>
      <View noPaddingHorizontal>
        <Text>Password</Text>
        <InputField type="password" />
      </View>
      <View noPaddingHorizontal>
        <Text>Confirm password</Text>
        <InputField type="password" />
      </View>
      <View noPaddingHorizontal>
        <TouchableOpacity
          style={{ backgroundColor: 'white', padding: 10 }}
          onPress={() => console.log('Creating Account ...')}>
          <Text>Create my account</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignUpForm;
