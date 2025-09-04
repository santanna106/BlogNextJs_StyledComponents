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


// utilitário de polimorfismo
type AsProp<E extends React.ElementType> = {
  as?: E;
} & Omit<React.ComponentProps<E>, 'as' | 'color'> & StyledBaseProps;
// (removi 'color' para evitar conflito com CSS; use em styleSheet)

type BaseProps<E extends React.ElementType = 'div'> = AsProp<E>;

export function BaseComponent<E extends React.ElementType = 'div'>(
  { as, styleSheet = { fontFamily: theme?.typography?.fontFamily }, ...rest } : BaseProps<E>
) {
  return <StyledBaseComponent as={as} styleSheet={styleSheet} {...rest} />;
}