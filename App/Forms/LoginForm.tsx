import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import InputField from 'app/Components/Molecules/InputField';
import LOG_USER from 'app/Operations/queries/LogUser';

const LoginForm = () => {
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    device_name: '',
  });

  const getDeviceName = async () => {
    const name = await DeviceInfo.getDeviceName();
    setFormData({ ...formData, device_name: name });
    console.log(typeof name);
  };

  const handleLogin = async () => {
    try {
      await getDeviceName();
      setIsLoading(true);
      const response = await LOG_USER(formData);
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const isFormValid =
      formData.password.length >= 6 &&
      formData.password.length <= 64 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    setIsFormComplete(isFormValid);
  }, [formData]);

  return (
    <>
      <View noPaddingHorizontal>
        <Text>Login Form</Text>
      </View>
      <View noPaddingHorizontal>
        <Text>Email</Text>
        <InputField
          type="email"
          onChangeText={value => setFormData({ ...formData, email: value })}
        />
      </View>
      <View noPaddingHorizontal>
        <Text>Password</Text>
        <InputField
          type="password"
          onChangeText={value => setFormData({ ...formData, password: value })}
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
          onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginForm;
