import { useState } from 'react';

//libs
import StarRating from 'react-native-star-rating-widget'
import FeatherIcons from "@expo/vector-icons/Feather"

// ULtils
import { priceFormatter } from '../../ultils/formater';

// Interfaces
import { IBathrooms } from '../../screens/Listing';

// Styles
import * as S from './styles'
interface CardBigProps {
  data: IBathrooms
}

export function CardBig({data}:CardBigProps) {
  const [rating, setRating] = useState(0)

  function currencyFormat() {
    const price = parseInt(data.price)

    return 'R$ ' + '' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, ' $1,')
 }

 const priceFormatter = currencyFormat()
  return (
    <S.CardBigContainer>
      <S.ContainerImage>
        <S.ImageCard source={{
          uri: data.photos[0]
        }} resizeMode="cover"/>
        <S.AmountImages>
          <S.TextAmountImage>{data.photos.length}</S.TextAmountImage>
          <FeatherIcons name='image' size={20} color="#fff"/>
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
            <FeatherIcons name='map-pin' size={20} color="#9DACBA"/>
            <S.Address>{data.location.latitude}</S.Address>
          </S.BoxAndrees>
          
        </S.Info>
        <S.BoxPrice>
          <S.Price>{priceFormatter}</S.Price>
        </S.BoxPrice>
      </S.ContentInfos>
    </S.CardBigContainer>
  )
}