import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 48px;

  margin-bottom: 8px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.brand_500};
  border-radius: 10px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${RFValue(16)}px;
`;

