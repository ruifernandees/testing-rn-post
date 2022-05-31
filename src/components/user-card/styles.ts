import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ProfileImage = styled.Image`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
  border-radius: ${RFValue(70)}px;
`;

export const DataContainer = styled.View``;

export const Name = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 700;
  margin-left: ${RFValue(8)}px;
`;

export const Role = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 400;
  margin-left: ${RFValue(8)}px;
`;
