import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const baseSpacing = 16;
const buttonHeight = 44;
const imageButtonheight = 100;
const inputHeight = 44;
const navBarHeight = Platform.OS === 'ios' ? 64 : 54;
const tabBarContentPadding = navBarHeight + 3 * baseSpacing;

const metrics = {
  baseMargin: baseSpacing,
  doubleBaseMargin: baseSpacing * 2,
  hugeMargin: baseSpacing * 3,
  smallMargin: baseSpacing / 2,
  extraTinyMargin: 4,
  tinyMargin: 6,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight,
  productBoxSize: 64,
  progressBarHeight: 8,
  tabBarHeight: 56,
  tabBarContentPadding,
  radioImageCoverImageHeight: 56,
  headerHeight: 70,
  cardHeight: 69,
  buttonHeight,
  imageButtonheight,
  inputHeight,
  boxRadius: {
    large: 44,
    medium: 22,
    small: 7,
  },
  border: {
    large: 2,
    small: 1,
  },
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
    xxl: 60,
  },
  treatmentStep: {
    stepSize: 30,
  },
};

export default metrics;
