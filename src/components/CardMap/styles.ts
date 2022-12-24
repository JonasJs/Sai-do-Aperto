import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: 125px;

  flex-direction: row; 
  align-items: center;

  padding: 10px 10px 10px 8px;

  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.white};
`

export const BoxImage = styled.View`
  width: 100%;
  max-width: 125px;
  height: 125px;

  margin-top: -15px;
  padding: 2px;

  border-radius: 10px;
  position: relative;

  background-color: ${({theme}) => theme.colors.white};
`

export const Image = styled.Image`
  border-radius: 10px;
`

export const BoxDistance = styled.View`
  position: absolute;
  left: 6px;
  top: 6px;

  padding: 6px;
  flex-direction: row;
  align-items: center;


  border-radius: 100px;
  background-color: ${({theme}) => theme.colors.blue_900};
`

export const Photos = styled.View`
  position: absolute;

  right: 10px;
  bottom: 5px;

  flex-direction: row;
  align-items: center;
`

export const QuantityPhoto = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  line-height: 18px;

  margin-right: 2px;
  color: ${({theme}) => theme.colors.white};
`

export const TextDistance = styled.Text`
  margin-left: 2px;

  font-weight: 700;
  font-size: ${RFValue(12)}px;

  color: ${({theme}) => theme.colors.white};
`

export const Content = styled.View`
  flex: 1;
  margin-left: 8px;

`

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-weight: 700;

  margin-bottom: 8px;
`

export const TextAnddress = styled.Text`  
  font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.gray_500};
`   

export const Price = styled.TouchableOpacity`
  padding: 8px 10px;
  border-radius: 100px;

  background-color: ${({theme}) => theme.colors.yellow_500};
`

export const TextPrice = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 700;

  color: ${({theme}) => theme.colors.white};
`