import React from 'react';
import styled from 'styled-components';
import { StyleSheet } from '@src/theme/StyleSheet';
import { parseStyleSheet } from '@displaykit/responsive_styles';
import theme from './theme';


interface StyledBaseProps {
  styleSheet?: StyleSheet;
}
/** Evita passar prop desconhecida para o DOM */
const StyledBaseComponent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'styleSheet',
}) <StyledBaseProps>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => styleSheet && parseStyleSheet(styleSheet)}
`;

type BaseProps = React.ComponentProps<'div'> & StyledBaseProps;

export const BaseComponent: React.FC<BaseProps> = ({
  styleSheet = { fontFamily: theme?.typography?.fontFamily },
  ...rest
}) => {
  return <StyledBaseComponent styleSheet={styleSheet} {...rest} />;
};