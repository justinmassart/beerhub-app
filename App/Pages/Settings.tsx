/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {ProfileStackNavigationProp} from 'app/Navigation/AppTab/ProfileStack';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Profile = () => {
  const {navigate} = useNavigation<ProfileStackNavigationProp>();
  return (
    <View>
      <View>
        <Text>Setting page</Text>
      </View>
      <TouchableOpacity
        style={{alignItems: 'center', backgroundColor: '#DDDDDD', padding: 10}}
        onPress={() => navigate('Language')}>
        <Text>Languages</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
