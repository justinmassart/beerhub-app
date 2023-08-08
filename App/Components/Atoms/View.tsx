import { ElementType } from 'react';
import { ViewProps, View as RNView } from 'react-native';
import { css } from 'styled-components/native';

import styled from 'themes/Styled';
import { Metrics } from 'app/Themes';

type AlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch';
type JustifyType = AlignType | 'space-around' | 'space-between';

interface Props extends ViewProps {
  isHorizontal?: boolean;
  alignItems?: AlignType;
  isFull?: boolean;
  justifyContent?: JustifyType;
  flex?: number;
  noPadding?: boolean;
  hidden?: boolean;
  noPaddingVertical?: boolean;
  noPaddingHorizontal?: boolean;
  paddingType?: PaddingSizeType;
  borderRadius?: number;
}

export type PaddingSizeType = 'large' | 'normal' | 'small' | 'none';

export const getPadding = (padding?: PaddingSizeType) => {
  switch (padding) {
    case 'large':
      return Metrics.doubleBaseMargin;
    case 'small':
      return Metrics.smallMargin;
    case 'none':
      return '0';
    case 'normal':
    default:
      return Metrics.baseMargin;
  }
};

const View: ElementType<Props> = styled(RNView)<Props>`
  borderradius: ${({ borderRadius }: Props) => borderRadius ?? 0}px;
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
  flex-direction: ${({ isHorizontal }: Props) =>
    isHorizontal ? 'row' : 'column'};
  align-items: ${({ alignItems = 'stretch' }: Props) => alignItems};
  justify-content: ${({ justifyContent = 'flex-start' }: Props) =>
    justifyContent};
  padding: ${({
    noPadding = false,
    paddingType,
    noPaddingHorizontal,
    noPaddingVertical,
  }: Props) => {
    if (noPadding) {
      return 0;
    }
    if (noPaddingHorizontal) {
      return `${getPadding(paddingType)}px 0`;
    }
    if (noPaddingVertical) {
      return `0 ${getPadding(paddingType)}px`;
    }
    return getPadding(paddingType) + 'px';
  }};
  width: ${({ isFull }: Props) => (isFull ? '100%' : 'auto')};

  ${({ flex }: Props) =>
    flex &&
    css`
      flex: ${flex};
    `}
`;

export default View;
