import React, { useEffect, useState } from 'react';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import InputField from 'app/Components/Molecules/InputField';
import { TouchableOpacity } from 'react-native';

import VERIFY_PHONE_NUMBER from 'app/Operations/queries/verifyPhoneNumber';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerifyPhoneNumberForm = () => {
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userPhone, setUserPhone] = useState<string>('');
  const [formData, setFormData] = useState({
    code: '',
  });

  const handlePhoneNumberVerification = async () => {
    const phone = await AsyncStorage.getItem('phoneNumber');
    if (isFormComplete && phone) {
      const code = Number(formData.code);
      try {
        setIsLoading(true);
        const response = await VERIFY_PHONE_NUMBER({ code, phone });
        await AsyncStorage.setItem('verification', 'verified');
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  const handleFormValidation = () => {
    const isFormValid =
      Object.values(formData).every(value => value !== null) &&
      formData.code.length === 6 &&
      typeof formData.code === 'string';
    setIsFormComplete(isFormValid);
  };

  useEffect(() => {
    handleFormValidation();
    const handleUserPhone = async () => {
      const data = JSON.stringify(await AsyncStorage.getItem('phoneNumber'));
      setUserPhone(data);
    };

    handleUserPhone();
  }, [formData, userPhone]);

  return (
    <View noPaddingHorizontal>
      <View noPaddingHorizontal>
        <Text>
          We just sent a code to this phone number : {userPhone}.{'\n'}Please
          enter the code here to verify your phone number.
        </Text>
      </View>
      <View noPaddingHorizontal>
        <InputField
          type="phone"
          onChangeText={value => setFormData({ ...formData, code: value })}
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
          onPress={handlePhoneNumberVerification}>
          <Text>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyPhoneNumberForm;
