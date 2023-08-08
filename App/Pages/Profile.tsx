import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProfileStackNavigationProp } from 'app/Navigation/AppTab/ProfileStack';

import { useAuth } from 'app/Hooks/Me';

import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';
import PageContainer from 'app/Components/Atoms/PageContainer';

import LogOrRegister from 'app/Components/Molecules/LogOrRegister';
import REVOKE_TOKEN from 'app/Operations/queries/revokeToken';

const Profile = () => {
  const [ERROR, setERROR] = useState<string | null>(null);
  const { navigate } = useNavigation<ProfileStackNavigationProp>();
  const { me, setMe } = useAuth();

  const handlelogout = async () => {
    if (me) {
      try {
        await REVOKE_TOKEN(me.id, me.authToken);
        setMe(null);
        await AsyncStorage.multiRemove(['user', 'authToken']);
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  const handleEmptyCache = async () => {
    try {
      setMe(null);
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageContainer>
      <View noPaddingHorizontal>
        <Text>Profile page</Text>
      </View>
      <View noPadding>
        {!me && <LogOrRegister />}
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
        {me && (
          <View noPaddingHorizontal>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: '#DDDDDD',
                padding: 10,
              }}
              onPress={handlelogout}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
        <View noPaddingHorizontal>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#DDDDDD',
              padding: 10,
            }}
            onPress={handleEmptyCache}>
            <Text>Empty cache</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PageContainer>
  );
};

export default Profile;
