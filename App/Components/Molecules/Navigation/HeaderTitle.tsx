import React, {useContext} from 'react';

import Text from 'app/Components/Atoms/Text';
import {Colors} from 'app/Themes';
import {ThemeContext} from 'app/Themes/Styled';

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
