import styled from 'styled-components/native';
import { FlatList } from "react-native"

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
  padding: 0px 20px;

  background-color: ${props => props.theme.colors.white};
`;

export const Bathrooms = (styled.FlatList`` as unknown) as typeof FlatList;
