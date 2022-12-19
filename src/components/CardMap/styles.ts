import styled from "styled-components/native";


export const Container = styled.View`
  width: 85%;
  height: 120px;

  flex-direction: row; 
  align-items: center;

  padding-left: 8px;
  padding-right: 8px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.white};
`

export const BoxImage = styled.View`
  width: 125px;
  height: 125px;

  border-radius: 10px;
  margin-top: -13px;
  padding: 2px;

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


  border-radius: 100px;
  background-color: ${({theme}) => theme.colors.blue_900};
`

export const TextDistance = styled.Text`
  margin-left: 2px;

  font-weight: 700;
  font-size: 12px;

  color: ${({theme}) => theme.colors.white};
`

export const Content = styled.View`
  margin-left: 8px;
  flex: 1;
`

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;

  margin-bottom: 8px;
`

export const TextAnddress = styled.Text`  
  font-size: 14px;
  color: ${({theme}) => theme.colors.gray_500};
`   

export const Price = styled.View`
  padding: 8px;
  border-radius: 100px;

  background-color: ${({theme}) => theme.colors.yellow_500};
`

export const TextPrice = styled.Text`
  font-size: 14px;
  font-weight: 700;

  color: ${({theme}) => theme.colors.white};
`