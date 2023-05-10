/* eslint-disable semi */
import BackgroundType from './BackgroundType';
import ColorType from './ColorType';

export default interface ThemeType {
  name: string;
  backgrounds: BackgroundType;
  colors: ColorType;
}
