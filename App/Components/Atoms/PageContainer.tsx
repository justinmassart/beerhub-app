import React from 'react';
import View from 'app/Components/Atoms/View';

const PageContainer = ({ ...props }) => {
  return (
    <View flex={1} noPadding style={{ marginHorizontal: 16 }} {...props} />
  );
};

export default PageContainer;
