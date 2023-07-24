import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import InputField from 'app/Components/Molecules/InputField';
import LOG_USER from 'app/Operations/queries/LogUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForm = () => {
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ERROR, setERROR] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    device_name: '',
  });

  const getDeviceName = async () => {
    const name = await DeviceInfo.getDeviceName();
    formData.device_name = name;
  };

  const handleLogin = async () => {
    if (isFormComplete) {
      try {
        await getDeviceName();
        setIsLoading(true);
        const response = await LOG_USER(formData);
        if (response && response.message !== 'ERROR') {
          await AsyncStorage.multiSet([
            ['user', JSON.stringify(response.user)],
            ['authToken', JSON.stringify(response.authToken)],
          ]);
        }
        setIsLoading(false);
      } catch (error: any) {
        setERROR(error.message);
        setIsLoading(false);
      }
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
      {(ERROR === 'EMAIL_NOT_VERIFIED' && (
        <View noPaddingHorizontal>
          <Text>
            {
              'Please verify your email address with the email previously sent before trying to log in'
            }
          </Text>
        </View>
      )) ||
        (ERROR === 'UNKNOWN_ERROR' && (
          <View noPaddingHorizontal>
            <Text>{'Unknown error, please contact an administrator'}</Text>
          </View>
        ))}
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
          textContentType={'oneTimeCode'}
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
