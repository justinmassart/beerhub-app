import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import PageContainer from 'app/Components/Atoms/PageContainer';
import SignUpForm from 'app/Forms/SingUpForm';

const SignUp = () => {
  const [userEmail, setUserEmail] = useState<string>('');

  return (
    <PageContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View noPaddingHorizontal>
          <Text>Sign Up page</Text>
        </View>
        {userEmail ? (
          <View>
            <Text>Your account was successfully created !</Text>
            <Text>
              To verify your email address, click on the button in the email to
              this address : {userEmail}
            </Text>
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
