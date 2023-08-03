import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RootStackNavigationProp } from 'app/Navigation';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import PageContainer from 'app/Components/Atoms/PageContainer';

import LoginForm from 'app/Forms/LoginForm';

import { UserType } from 'app/Types/UserType';
import VerifyPhoneNumberForm from 'app/Forms/VerifyPhoneNumberForm';

const Login = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isPhoneVerified, setIsPhoneVerified] = useState<boolean>(true);

  const navigation = useNavigation<RootStackNavigationProp>();

  const goToHomePage = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'AppTab' }],
    });
  };

  return (
    <PageContainer>
      <View noPaddingHorizontal>
        <Text>Login page</Text>
      </View>
      {!isPhoneVerified ? (
        <VerifyPhoneNumberForm />
      ) : (
        <>
          {user ? (
            <View noPaddingHorizontal>
              <Text>Welcome {user.firstname}</Text>
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
              user={(value: UserType) => setUser(value)}
            />
          )}
        </>
      )}
    </PageContainer>
  );
};

export default Login;
