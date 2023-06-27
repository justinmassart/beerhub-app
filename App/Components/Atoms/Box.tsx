import React from 'react';
import { View } from 'react-native';

const Box = ({ style, shadow, color, radius, ...props }) => {
  const shadowStyle = shadow
    ? {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
      }
    : {};

  const boxStyle = {
    backgroundColor: color || 'transparent',
    borderRadius: radius || 0,
  };

  return <View style={[boxStyle, shadowStyle, style]} {...props} />;
};

export default Box;
