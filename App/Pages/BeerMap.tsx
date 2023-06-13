import React from 'react';
import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import MapView from 'react-native-maps';

const Beer = () => {
  return (
    <View style={{ width: 400, height: 400 }}>
      <View>
        <Text>Carte</Text>
      </View>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Beer;
