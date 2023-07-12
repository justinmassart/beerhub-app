import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackNavigationProp } from 'app/Navigation/AppTab/ProfileStack';
import { TouchableOpacity } from 'react-native';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import PageContainer from 'app/Components/Atoms/PageContainer';

const Profile = () => {
  const { navigate } = useNavigation<ProfileStackNavigationProp>();
  return (
    <PageContainer>
      <View noPadding>
        <View noPaddingHorizontal>
          <Text>Profile page</Text>
        </View>
        <View noPaddingHorizontal>
          <Text>You are not logged in ...</Text>
          <View noPaddingHorizontal>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: '#DDDDDD',
                padding: 10,
              }}
              onPress={() => navigate('Login')}>
              <Text>Login</Text>
            </TouchableOpacity>
            <Text>or</Text>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: '#DDDDDD',
                padding: 10,
              }}
              onPress={() => navigate('SignUp')}>
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View noPaddingHorizontal>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#DDDDDD',
              padding: 10,
            }}
            onPress={() => navigate('Settings')}>
            <Text>Paramètres</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PageContainer>
  );
};

export default Profile;
