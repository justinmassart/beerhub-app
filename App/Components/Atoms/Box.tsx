import React from 'react';
import { View, ViewProps } from 'react-native';

interface BoxProps extends ViewProps {
  style?: object;
  shadow?: boolean;
  color?: string;
  radius?: number;
  height?: number;
}

const Box: React.FC<BoxProps> = ({
  style = {},
  shadow = true,
  color = 'white',
  radius = 10,
  height,
  children,
  ...props
}) => {
  const boxStyle = {
    backgroundColor: color,
    borderRadius: radius,
    minHeight: height,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,

    elevation: 5,
  };

  return (
    <View style={[boxStyle, style]} {...props}>
      {children}
    </View>
  );
};

export default Box;
