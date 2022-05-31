import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container } from './styles';

export const CardContainerComponent: React.FC<TouchableOpacityProps> = ({
  children, ...rest
}) => (
  <Container testID="card-container-component" {...rest}>{children}</Container>
);
