import React, { useEffect, useState } from 'react';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import InputField from 'app/Components/Molecules/InputField';
import { TouchableOpacity } from 'react-native';

import VERIFY_PHONE_NUMBER from 'app/Operations/queries/verifyPhoneNumber';

const VerifyPhoneNumberForm = () => {
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    code: '',
  });

  const handlePhoneNumberVerification = async () => {
    if (isFormComplete) {
      const code = Number(formData.code);
      try {
        setIsLoading(true);
        const response = await VERIFY_PHONE_NUMBER({ code });
        console.log(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const isFormValid =
      Object.values(formData).every(value => value !== null) &&
      formData.code.length === 6 &&
      typeof formData.code === 'string';
    setIsFormComplete(isFormValid);
  }, [formData]);

  return (
    <View noPaddingHorizontal>
      <View noPaddingHorizontal>
        <Text>
          We just sent you a code to your phone number, please enter the code
          here to verify your phone number.
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
