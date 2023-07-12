import React from 'react';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import LoginForm from 'app/Forms/LoginForm';
import PageContainer from 'app/Components/Atoms/PageContainer';

const Login = () => {
  return (
    <PageContainer>
      <View noPaddingHorizontal>
        <Text>Login page</Text>
      </View>
      <LoginForm />
    </PageContainer>
  );
};

export default Login;
