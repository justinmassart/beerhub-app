import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import PageContainer from 'app/Components/Atoms/PageContainer';

import SignUpForm from 'app/Forms/SingUpForm';

import { RootStackNavigationProp } from 'app/Navigation';

const SignUp = () => {
  const [userEmail, setUserEmail] = useState<string>('');

  const navigation = useNavigation<RootStackNavigationProp>();

  const goToHomePage = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'AppTab' }],
    });
  };

  return (
    <PageContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View noPaddingHorizontal>
          <Text>Sign Up page</Text>
        </View>
        {userEmail ? (
          <View noPaddingHorizontal>
            <View noPaddingHorizontal>
              <Text>Your account was successfully created !</Text>
              <Text>
                To verify your email address, click on the button in the email
                to this address : {userEmail}
              </Text>
            </View>
            <View noPaddingHorizontal>
              <TouchableOpacity
                style={{ backgroundColor: 'white', padding: 10 }}
                onPress={goToHomePage}>
                <Text>Go to the Home page</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View noPaddingHorizontal>
            <SignUpForm userEmail={(value: string) => setUserEmail(value)} />
          </View>
        )}
      </ScrollView>
    </PageContainer>
  );
};

export default SignUp;
