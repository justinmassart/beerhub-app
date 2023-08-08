import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RootStackNavigationProp } from 'app/Navigation';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import PageContainer from 'app/Components/Atoms/PageContainer';

import LoginForm from 'app/Forms/LoginForm';

import VerifyPhoneNumberForm from 'app/Forms/VerifyPhoneNumberForm';

import { useAuth } from 'app/Hooks/Me';

const Login = () => {
  const { setMe, me } = useAuth();
  const [isPhoneVerified, setIsPhoneVerified] = useState<boolean>(true);

  const navigation = useNavigation<RootStackNavigationProp>();

  const goToHomePage = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'AppTab' }],
    });
  };

  useEffect(() => {}, [me]);

  return (
    <PageContainer>
      <View noPaddingHorizontal>
        <Text>Login page</Text>
      </View>
      {!isPhoneVerified ? (
        <VerifyPhoneNumberForm />
      ) : (
        <>
          {me ? (
            <View noPaddingHorizontal>
              <Text>Welcome {me.firstname}</Text>
              <Text>You are logged in</Text>
              <TouchableOpacity
                style={{ backgroundColor: 'white', padding: 10 }}
                onPress={goToHomePage}>
                <Text>Go to the Home page</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <LoginForm
              isPhoneVerified={(value: boolean) => setIsPhoneVerified(value)}
            />
          )}
        </>
      )}
    </PageContainer>
  );
};

export default Login;
