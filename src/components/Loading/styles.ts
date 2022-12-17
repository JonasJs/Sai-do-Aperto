import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.9);
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #F4F5F6;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.font.bold};
`;

export const AnimationContainer = styled.View`
  width: 100%;
  height: 300px;
`;