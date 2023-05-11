import {TextProps} from 'react-native';
import {FC} from 'react';

import styled from 'app/Themes/Styled';
import {FontSize, Metrics, FontFamily, FontWeight} from 'app/Themes';

type FontFamilyType = 'primary' | 'secondary' | 'tertiary';
export type FontWeightType =
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'bold'
  | 'black';
export type FontSizeType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'huge'
  | 'title'
  | 'subtitle'
  | 'regular'
  | 'medium'
  | 'small'
  | 'tiny';
type LineHeightType = 'base' | 'none';

interface Props extends TextProps {
  color?: string;
  size?: FontSizeType;
  baseSpace?: boolean;
  smallSpace?: boolean;
  tinySpace?: boolean;
  centered?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
  align?: 'left' | 'center' | 'right';
  lineHeight?: LineHeightType;
  font?: FontFamilyType;
  weight?: FontWeightType;
  underline?: boolean;
  lineThrough?: boolean;
  superscript?: boolean;
  italic?: boolean;
}

const Text: FC<Props> = styled.Text<Props>`
  color: ${({color, theme}) => color || theme.colors.primary};
  font-size: ${({size = 'regular', superscript}) =>
    superscript ? FontSize.small : FontSize[size] || FontSize.regular}px;
  line-height: ${({size = 'regular', lineHeight = 'base', superscript}) => {
    if (superscript) {
      return FontSize[size];
    }

    return lineHeight === 'base'
      ? (FontSize[size] || FontSize.regular) * 1.375
      : FontSize[size] || FontSize.regular;
  }}px;
  margin-bottom: ${({smallSpace, tinySpace, baseSpace}) => {
    if (tinySpace) {
      return `${Metrics.tinyMargin}px`;
    }

    if (smallSpace) {
      return `${Metrics.smallMargin}px`;
    }

    if (baseSpace) {
      return `${Metrics.baseMargin}px`;
    }

    return 0;
  }};
  text-align: ${({centered = false, align}) => {
    if (align) {
      return align;
    }
    return centered ? 'center' : 'left';
  }};
  font-family: ${({font = 'primary'}) => FontFamily[font]};
  font-weight: ${({weight = 'regular'}) => FontWeight[weight]};
  text-transform: ${({uppercase, capitalize}) =>
    uppercase ? 'uppercase' : capitalize ? 'capitalize' : 'none'};
  text-decoration: ${({underline, lineThrough}) =>
    `${underline ? 'underline' : ''} ${lineThrough ? 'line-through' : ''}`};
  text-decoration-color: ${({color, theme}) => color || theme.colors.primary};
  font-style: ${({italic}) => (italic ? 'italic' : 'normal')};
`;

export default Text;
