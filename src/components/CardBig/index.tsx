import { useState } from 'react';
import { View, Text } from 'react-native'
import { MapPin, Image } from 'react-native-feather'
import StarRating from 'react-native-star-rating-widget'
import { priceFormatter } from '../../ultils/formater';
import * as S from './styles'

interface CardBigType {
  image: string;
  amountImages: number;
  title: string;
  address: string;
  price: number;
}

interface CardBigProps {
  data: CardBigType
}

export function CardBig({data}:CardBigProps) {
  const [rating, setRating] = useState(0)

  return (
    <S.CardBigContainer>
      <S.ContainerImage>
        <S.ImageCard source={{
          uri: data.image
        }} resizeMode="cover"/>
        <S.AmountImages>
          <S.TextAmountImage>{data.amountImages}</S.TextAmountImage>
          <Image width={20} stroke="#fff"/>
        </S.AmountImages>
      </S.ContainerImage>
     
      <S.ContentInfos>
        <S.Info>
          <StarRating
            rating={rating}
            starSize={24}
            style={{marginRight: 0, width: '100%'}}
            starStyle={{marginRight: 0, marginLeft: 0}}
            onChange={() => setRating(rating)}
          />
          <S.Title>{data.title}</S.Title>
          <S.BoxAndrees>
            <MapPin width={20} stroke="#9DACBA"/>
            <S.Address>{data.address}</S.Address>
          </S.BoxAndrees>
          
        </S.Info>
        <S.BoxPrice>
          <S.Price>{priceFormatter.format(data.price)}</S.Price>
        </S.BoxPrice>
      </S.ContentInfos>
    </S.CardBigContainer>
  )
}