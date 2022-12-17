import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import MaskInput from 'react-native-mask-input';

// interface 
interface InputFormContainerProps {
  hasError?: boolean;
}

export const Container = styled.View<InputFormContainerProps>`
  width: 100%;

  ${({ hasError }) => !hasError && css`
    margin-bottom: 16px;
  `};
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.colors.blue_900};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.font.bold};

  margin-bottom: 8px;
`;

export const ContentInput = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  background-color: ${({theme}) => theme.colors.white_100};

  border-radius: 10px;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.gray_400};

  padding: 0 16px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 56px;
  color: ${({theme}) => theme.colors.blue_900};
  font-family: ${({theme}) => theme.font.regular};
  font-size: ${RFValue(16)}px;
`;

export const ContainerIcon = styled.TouchableOpacity``; 

export const Error = styled.Text`
  color: ${({theme}) => theme.colors.red_500};
  font-family: ${({theme}) => theme.font.regular};
  font-size: ${RFValue(16)}px;
  
  margin-top: 4px;
  margin-bottom: 8px;
`;

export const InputMask = styled(MaskInput)`
  flex: 1;
  height: 56px;

  color: ${({theme}) => theme.colors.blue_900};
  font-family: ${({theme}) => theme.font.regular};
  font-size: ${RFValue(16)}px;
`;