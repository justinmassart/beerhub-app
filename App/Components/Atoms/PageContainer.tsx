import React from 'react';
import { View } from 'react-native';

const PageContainer = ({ ...props }) => {
  return <View style={{ marginHorizontal: 16 }} {...props} />;
};

export default PageContainer;
