import styled from 'styled-components/native';
import { StatusBar } from "react-native";

console.log(StatusBar.currentHeight);

import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

export const Map = styled(MapView)`
  flex: 1;
`;