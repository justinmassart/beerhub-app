import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { useAuth } from 'app/Hooks/Me';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import InputField from 'app/Components/Molecules/InputField';
import LOG_USER from 'app/Operations/queries/LogUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForm = ({ isPhoneVerified }) => {
  const { setMe, me } = useAuth();
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ERROR, setERROR] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    phone: '',
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
        setIsLoading(true);
        await getDeviceName();
        const response = await LOG_USER(formData);
        if (response && response.message !== 'ERROR') {
          await AsyncStorage.multiSet([
            ['user', JSON.stringify(response.user)],
            ['authToken', JSON.stringify(response.authToken)],
          ]);
          await AsyncStorage.removeItem('verification');
          const user = response.user;
          const authToken = response.authToken;
          const accessRights = response.accessRights;
          setMe({ ...user, authToken, accessRights });
          user(response.user);
        }
        setIsLoading(false);
      } catch (error: any) {
        setERROR(error.message);
        isPhoneVerified(error.message === 'PHONE_NOT_VERIFIED' ? false : true);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const isFormValid =
      formData.password.length >= 6 &&
      formData.password.length <= 64 &&
      /^\+\d{5,15}$/.test(formData.phone);
    setIsFormComplete(isFormValid);
  }, [formData]);

  return (
    <>
      {/* TODO: change for phone */}
      {(ERROR === 'EMAIL_NOT_VERIFIED' && (
        <View noPaddingHorizontal>
          <Text>
            {
              'Please verify your email address with the email previously sent before trying to log in'
            }
          </Text>
        </View>
      )) ||
        (ERROR === 'EMAIL_NOT_EXISTS' && (
          <View noPaddingHorizontal>
            <Text>{'This email isn’t registered in our database.'}</Text>
          </View>
        )) ||
        (ERROR === 'UNKNOWN_ERROR' && (
          <View noPaddingHorizontal>
            <Text>{'Unknown error, please contact an administrator'}</Text>
          </View>
        ))}
      <View noPaddingHorizontal>
        <Text>Phone</Text>
        <InputField
          type="phone"
          onChangeText={value => setFormData({ ...formData, phone: value })}
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
