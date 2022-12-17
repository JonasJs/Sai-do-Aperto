import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingBottom: getBottomSpace()+20,
    paddingTop: 24,
  }
}))`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Form = styled.View`
  margin-bottom: 8px;
`;