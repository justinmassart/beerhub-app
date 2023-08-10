import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

import { useAuth } from 'app/Hooks/Me';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';

import InputField from 'app/Components/Molecules/InputField';
import PhoneNumberInput from 'app/Components/Molecules/PhoneNumberInput';

import LOG_USER from 'app/Operations/queries/LogUser';
import { useFocusEffect } from '@react-navigation/native';

const LoginForm = ({ isPhoneVerified }) => {
  const { setMe } = useAuth();
  const [userCountry, setUserCountry] = useState<string>('');
  const [userCountryCallingCode, setUserCountryCallingCode] =
    useState<string>('');
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ERROR, setERROR] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    callingCode: '+1',
    phoneNumber: '',
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

  const handleUserCountryData = async () => {
    const country = await AsyncStorage.getItem('userCountryData');
    if (country) {
      const countryData = JSON.parse(country);
      setUserCountry(RNLocalize.getCountry());
      setUserCountryCallingCode(countryData.callingCode);
    }
  };

  const handleCountrySelect = country => {
    setFormData({ ...formData, callingCode: '+' + country });
  };

  useFocusEffect(
    useCallback(() => {
      handleUserCountryData();
    }, []),
  );

  useEffect(() => {
    const isFormValid =
      formData.password.length >= 6 &&
      formData.password.length <= 64 &&
      /^\d{5,15}$/.test(formData.phoneNumber);
    setIsFormComplete(isFormValid);
  }, [formData]);

  return (
    <>
      {(ERROR === 'PHONE_NOT_VERIFIED' && (
        <View noPaddingHorizontal>
          <Text>
            {
              'Please verify your phone number with the code previously sent before trying to log in'
            }
          </Text>
        </View>
      )) ||
        (ERROR === 'PHONE_NOT_EXISTS' && (
          <View noPaddingHorizontal>
            <Text>{'This phone number isn’t registered in our database.'}</Text>
          </View>
        )) ||
        (ERROR === 'UNKNOWN_ERROR' && (
          <View noPaddingHorizontal>
            <Text>{'Unknown error, please contact an administrator'}</Text>
          </View>
        ))}
      <View noPaddingHorizontal>
        <Text>Phone Number</Text>
        {}
        <PhoneNumberInput
          countryCallingCode={userCountryCallingCode}
          countryCode={userCountry}
          countryFlag={(value: string) => setUserCountry(value)}
          onCountryChange={handleCountrySelect}
          onPhoneNumberChange={(value: string) =>
            setFormData({ ...formData, phoneNumber: value })
          }
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

const styles = StyleSheet.create({
  countryPickerContainerStyle: {
    width: '20%',
  },
  inputBorder: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
});

export default LoginForm;
