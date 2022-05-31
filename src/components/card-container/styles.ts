import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  background-color: #eee;
  padding: ${RFValue(8)}px ${RFValue(12)}px;
  border-radius: ${RFValue(8)}px;
`;
