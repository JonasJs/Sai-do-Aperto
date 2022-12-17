import styled from 'styled-components/native';

export const CardBigContainer = styled.View`
  width: 100%;
`
export const ContainerImage = styled.View`
  width: 100%;
  height: 220px;

  position: relative;
`

export const AmountImages = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  right: 8px;
  bottom: 8px;

  padding: 2px 12px;
  border-radius: 100px;

  background-color: ${({theme}) => theme.colors.brand_500};
`

export const TextAmountImage = styled.Text`
  font-family: ${({theme}) => theme.font.bold};
  font-size: 20px;
  color: ${({theme}) => theme.colors.white};
  margin-right: 6px;

`

export const ImageCard = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;

`

export const ContentInfos = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
`
export const Info = styled.View`
  flex: 1;
  
`

export const Title = styled.Text`
  width: 100%;

  font-family: ${({theme}) => theme.font.bold};
  font-size: 28px;
  
  margin-top: 4px;
  color:  ${({theme}) => theme.colors.blue_900};
`

export const BoxAndrees = styled.View`
  display: flex;
  flex-direction: row;

  margin-top: 6px;
`

export const Address = styled.Text`
  width: 100%;
  font-family: ${({theme}) => theme.font.regular};
  font-size: 18px;
  margin-left: 6px;

  color:  ${({theme}) => theme.colors.gray_500};
`

export const BoxPrice = styled.View`  
  border-radius: 100px;
  padding: 8px 10px;
  margin-left: 20px;

  background-color: ${({theme}) => theme.colors.yellow_500};
`

export const Price = styled.Text`
  font-family: ${({theme}) => theme.font.bold};
  font-size: 18px;

  color: ${({theme}) => theme.colors.white};
`