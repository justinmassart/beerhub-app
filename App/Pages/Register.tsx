import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import PageContainer from 'app/Components/Atoms/PageContainer';

import RegisterForm from 'app/Forms/RegisterForm';

import VerifyPhoneNumberForm from 'app/Forms/VerifyPhoneNumberForm';

const Register = () => {
  const [userEmail, setUserEmail] = useState<string>('');

  /*   const goToHomePage = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'AppTab' }],
    });
  }; */

  return (
    <PageContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View noPaddingHorizontal>
          <Text>Register page</Text>
        </View>
        {userEmail ? (
          <VerifyPhoneNumberForm />
        ) : (
          <View noPaddingHorizontal>
            <RegisterForm userEmail={(value: string) => setUserEmail(value)} />
          </View>
        )}
      </ScrollView>
    </PageContainer>
  );
};

export default Register;
