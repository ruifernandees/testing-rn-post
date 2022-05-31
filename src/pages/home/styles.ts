import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 0 ${RFValue(16)}px;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(20)}px;
  font-weight: 500;
  margin-left: ${RFValue(8)}px;
  margin-bottom: ${RFValue(4)}px;
`;
