import {Dimensions} from 'react-native';

export const FontWeight = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
};

export const FontFamily = {
  primary: 'Lato-Regular',
  secondary: 'Alegreya-Medium',
  tertiary: 'RobotoCondensed-Regular',
};

const defaultFontSize = {
  h1: 28,
  h2: 24,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  huge: 50,
  title: 28,
  subtitle: 20,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 10,
};

const getFontSize = () => {
  // Use `Dimensions` instead of `Metrics` to avoid "Require cycle"
  const screenWidth = Dimensions.get('screen').width;
  const baseWidth = 400;

  if (screenWidth >= baseWidth) {
    return defaultFontSize;
  } else {
    const ratio = screenWidth / baseWidth;
    const fontSize = defaultFontSize;
    Object.keys(fontSize).map(key => (fontSize[key] = fontSize[key] * ratio));
    return fontSize;
  }
};

export const FontSize = getFontSize();
