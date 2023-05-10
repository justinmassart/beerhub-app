import React, {useContext} from 'react';

import Text from '../../Atoms/Text';
import {Colors} from '../../../Themes';
import {ThemeContext} from '../../../Themes/Styled';

const HeaderTitle = ({
  title,
  themed,
  tintColor,
}: {
  title: string;
  themed?: boolean;
  tintColor?: string;
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Text
      centered
      color={
        tintColor || (themed ? theme.colors.primary : Colors.common.white)
      }>
      {title}
    </Text>
  );
};

export default HeaderTitle;
