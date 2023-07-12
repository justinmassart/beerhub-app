import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import PageContainer from 'app/Components/Atoms/PageContainer';
import SignUpForm from 'app/Forms/SingUpForm';

const SignUp = () => {
  return (
    <PageContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View noPaddingHorizontal>
          <Text>Sign Up page</Text>
        </View>
        <View noPaddingHorizontal>
          <SignUpForm />
        </View>
      </ScrollView>
    </PageContainer>
  );
};

export default SignUp;
