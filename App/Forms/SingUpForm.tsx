import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import InputField from 'app/Components/Molecules/InputField';

import REGISTER_USER from 'app/Operations/queries/registerUser';

import availableCountries from 'app/Helpers/availableCountries';

const SignUpForm = () => {
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    country: '',
    password: '',
    confirm_password: '',
  });

  const handleSubmit = async () => {
    try {
      await REGISTER_USER(formData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const isFormValid =
      Object.values(formData).every(value => value !== '') &&
      availableCountries(formData.country) &&
      formData.password.length >= 6 &&
      formData.password.length <= 64 &&
      formData.username.length >= 2 &&
      formData.username.length <= 24 &&
      formData.confirm_password === formData.password &&
      /^^[A-Za-z-]+$/.test(formData.first_name) &&
      /^^[A-Za-z-]+$/.test(formData.last_name) &&
      /^[a-zA-Z0-9]+$/.test(formData.username) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    setIsFormComplete(isFormValid);
  }, [formData]);

  return (
    <>
      <View noPaddingHorizontal>
        <Text>Login Form</Text>
      </View>
      <View noPaddingHorizontal>
        <Text>First name</Text>
        <InputField
          type="text"
          value={formData.first_name}
          onChangeText={value =>
            setFormData({ ...formData, first_name: value })
          }
        />
      </View>
      <View noPaddingHorizontal>
        <Text>Last name</Text>
        <InputField
          type="text"
          value={formData.last_name}
          onChangeText={value => setFormData({ ...formData, last_name: value })}
        />
      </View>
      <View noPaddingHorizontal>
        <Text>Username</Text>
        <InputField
          type="text"
          value={formData.username}
          onChangeText={value => setFormData({ ...formData, username: value })}
        />
      </View>
      <View noPaddingHorizontal>
        <Text>Email</Text>
        <InputField
          type="email"
          value={formData.email}
          onChangeText={value => setFormData({ ...formData, email: value })}
        />
      </View>
      <View noPaddingHorizontal>
        <Text>Country</Text>
        <InputField
          type="text"
          value={formData.country}
          onChangeText={value => setFormData({ ...formData, country: value })}
        />
      </View>
      <View noPaddingHorizontal>
        <Text>Password</Text>
        <InputField
          type="password"
          value={formData.password}
          onChangeText={value => setFormData({ ...formData, password: value })}
        />
      </View>
      <View noPaddingHorizontal>
        <Text>Confirm password</Text>
        <InputField
          type="password"
          value={formData.confirm_password}
          onChangeText={value =>
            setFormData({ ...formData, confirm_password: value })
          }
        />
      </View>
      <View noPaddingHorizontal>
        <TouchableOpacity
          disabled={!isFormComplete}
          style={{
            backgroundColor: 'white',
            padding: 10,
            opacity: !isFormComplete ? 0.4 : 1,
          }}
          onPress={handleSubmit}>
          <Text>Create my account</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignUpForm;
