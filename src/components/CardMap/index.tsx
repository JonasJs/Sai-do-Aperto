import React from 'react';

import StarRating from 'react-native-star-rating-widget'
import Icons from '@expo/vector-icons/Feather'

// Styles
import * as S from './styles';
import { useTheme } from 'styled-components'

// Interfaces
interface CardMapProps {
  distance: string;
  location: string;
  title: string;
  photos: string[];
  avaliation: number;
  price: string;
}

export function CardMap({ avaliation, distance, location, photos = [''], price, title }: CardMapProps) {
  const theme = useTheme()

  return (
    <S.Container>
      <S.BoxImage>
        <S.Image source = {{uri: photos[0]}}
          style = {{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
        <S.BoxDistance>
          <Icons name='map-pin' color={theme.colors.white} size={14}/>
          <S.TextDistance>{distance}</S.TextDistance>
        </S.BoxDistance>
        <S.Photos>
          <S.QuantityPhoto>5</S.QuantityPhoto>
          <Icons name='image' color={theme.colors.white} size={16}/>
        </S.Photos>
      </S.BoxImage>
      <S.Content>
        <StarRating
          rating={avaliation}
          starSize={18}
          style={{marginRight: 0, width: '100%'}}
          starStyle={{marginRight: 0, marginLeft: 0}}
          onChange={() => {}}
        />
        <S.Title>{title}</S.Title>
        <S.TextAnddress><Icons name='navigation' size={14}/>{location}</S.TextAnddress>
      </S.Content>
      <S.Price>
        <S.TextPrice>{price}</S.TextPrice>
      </S.Price>
    </S.Container>
  );
}
