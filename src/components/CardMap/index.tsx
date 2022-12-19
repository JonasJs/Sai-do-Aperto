import React, {useState} from 'react';
import { Text, View } from 'react-native';

import StarRating from 'react-native-star-rating-widget'
import Icons from '@expo/vector-icons/Feather'

// Styles
import * as S from './styles';
import { useTheme } from 'styled-components'


export function CardMap() {
  const [rating, setRating] = useState(0)
  const theme = useTheme()

  return (
    <S.Container>
      <S.BoxImage>
        <S.Image source = {{uri:'https://lh5.googleusercontent.com/x-_kNlCEfSVPHH5ZBw3neWziCzGkZsEuNOj4itHsMgXc8Nz_XTXQvK5_GlxDq382kqE4yFa2r8K3TwDThwU86KWU_mge_oTlUV3ZPK6dV99vGeT7R4kUGsdexyZb7gaLIbnhh818D2ZqbW1T-WCEVw'}}
          style = {{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
        <S.BoxDistance>
          <Icons name='map-pin' color={theme.colors.white} size={14}/>
          <S.TextDistance>15km</S.TextDistance>
        </S.BoxDistance>
      </S.BoxImage>
      <S.Content>
        <StarRating
          rating={rating}
          starSize={18}
          style={{marginRight: 0, width: '100%'}}
          starStyle={{marginRight: 0, marginLeft: 0}}
          onChange={() => {}}
        />
        <S.Title>Banheiro do Zé</S.Title>
        <S.TextAnddress><Icons name='navigation'/> Rua das flores, 38, inhauma</S.TextAnddress>
      </S.Content>
      <S.Price>
        <S.TextPrice>3,00</S.TextPrice>
      </S.Price>
    </S.Container>
  );
}
