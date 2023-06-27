import React from 'react';
import { View } from 'react-native';

import { Platform } from 'react-native';

const Box = ({ style = {}, shadow = true, color, radius, ...props }) => {
  const shadowStyle = shadow
    ? Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.05,
          shadowRadius: 5,
        },
        android: {
          elevation: 10,
        },
        default: {},
      })
    : {};

  const boxStyle = {
    backgroundColor: color || 'white',
    borderRadius: radius || 10,
  };

  return (
    <View style={[boxStyle, shadowStyle, style]}>
      <View {...props}></View>
    </View>
  );
};

export default Box;
