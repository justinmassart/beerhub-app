import baseStyled, {
  ThemeContext as baseContext,
} from 'styled-components/native';
import ReactNativeStyledInterface from 'styled-components/native';

import ThemeType from 'types/ThemeType';

export const ThemeContext = baseContext as unknown as React.Context<ThemeType>;

export default baseStyled as unknown as typeof ReactNativeStyledInterface;
