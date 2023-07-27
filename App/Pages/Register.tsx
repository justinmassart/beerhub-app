import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import PageContainer from 'app/Components/Atoms/PageContainer';

import RegisterForm from 'app/Forms/RegisterForm';

import { RootStackNavigationProp } from 'app/Navigation';

const Register = () => {
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
          <Text>Register page</Text>
        </View>
        {userEmail ? (
          <View noPaddingHorizontal>
            <View noPaddingHorizontal>
              <Text>Your account was successfully created !</Text>
              <Text>
                To verify your email address, click on the button in the email
                to this address : {userEmail}
              </Text>
              <Text>
                After that, go to the login page in the profile page and log
                yourself in !
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
            <RegisterForm userEmail={(value: string) => setUserEmail(value)} />
          </View>
        )}
      </ScrollView>
    </PageContainer>
  );
};

export default Register;
