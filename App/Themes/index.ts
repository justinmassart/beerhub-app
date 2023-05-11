import Images from './Images';
import Metrics from './Metrics';
import {FontFamily, FontWeight, FontSize} from './Fonts';
import Colors from './Colors';
import Backgrounds from './Backgrounds';

const ThemeConfig = [
  {
    name: 'light',
    backgrounds: {...Backgrounds.light},
    colors: {...Colors.light},
  },
  {
    name: 'dark',
    backgrounds: {...Backgrounds.dark},
    colors: {...Colors.dark},
  },
];
const getTheme = (isDarkTheme: boolean) =>
  isDarkTheme ? ThemeConfig[1] : ThemeConfig[0];

export {
  Images,
  Metrics,
  FontFamily,
  FontWeight,
  FontSize,
  Colors,
  Backgrounds,
  ThemeConfig,
  getTheme,
};
