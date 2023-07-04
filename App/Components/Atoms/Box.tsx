import React from 'react';
import { View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const Box = ({
  style = {},
  shadow = true,
  color = 'white',
  radius = 10,
  height = 200,
  ...props
}) => {
  const boxStyle = {
    backgroundColor: color,
    borderRadius: radius,
    minHeight: height,
  };

  return (
    <Shadow
      disabled={!shadow}
      stretch={true}
      sides={{ start: true, end: true, bottom: true, top: false }}
      corners={{
        topStart: false,
        topEnd: false,
        bottomStart: true,
        bottomEnd: true,
      }}
      startColor="#0001"
      distance={7.5}>
      <View style={[boxStyle, style]}>
        <View {...props}></View>
      </View>
    </Shadow>
  );
};

export default Box;
