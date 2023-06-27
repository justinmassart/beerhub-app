import React from 'react';
import { View } from 'react-native';

const PageContainer = ({ ...props }) => {
  return <View style={{ padding: 16 }} {...props} />;
};

export default PageContainer;
