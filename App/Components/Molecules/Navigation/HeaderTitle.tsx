import React from 'react';

import Text from 'app/Components/Atoms/Text';
import {Colors} from 'app/Themes';

const HeaderTitle = ({
  title,
  tintColor,
}: {
  title: string;
  themed?: boolean;
  tintColor?: string;
}) => {
  return (
    <Text centered color={tintColor || Colors.common.black}>
      {title}
    </Text>
  );
};

export default HeaderTitle;
