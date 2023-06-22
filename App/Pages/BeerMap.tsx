import React from 'react';
import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import MapView from 'react-native-maps';
import { enableLatestRenderer, PROVIDER_GOOGLE } from 'react-native-maps';
import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  enableLatestRenderer();
}

const Beer = () => {
  return (
    <View style={{ width: 400, height: 400 }}>
      <View>
        <Text>Carte</Text>
      </View>
      <View flex={1}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </View>
  );
};

export default Beer;
