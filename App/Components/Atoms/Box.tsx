import React from 'react';
import { View, Platform } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const Box = ({ style = {}, shadow = true, color, radius, ...props }) => {
  const boxStyle = {
    backgroundColor: color || 'white',
    borderRadius: radius || 10,
    minHeight: 200,
  };

  return (
    <Shadow
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

/*
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  }


      <Shadow
      stretch={true}
      sides={{ start: true, end: true, bottom: true, top: false }}
      corners={{
        topStart: false,
        topEnd: false,
        bottomStart: true,
        bottomEnd: true,
      }}
      startColor="#000"
      distance={20}>
  */
