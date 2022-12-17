import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};

  padding: 20px;
`;

export const Form = styled.View`
  margin-bottom: 8px;
`;

export const Link = styled.TouchableOpacity`
  padding: 0 20px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

export const TextLink = styled.Text`
  color: ${({ theme }) => theme.colors.brand_500};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${RFValue(16)}px;
`;
