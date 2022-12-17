
import React from "react";
import { Modal } from 'react-native';

// Styls
import * as S from "./styles";

export function Loading() {
  return (
    <Modal
      transparent={true}
      animationType='fade'
      visible={false}
    >
      <S.Container>
        <S.AnimationContainer>
          {/* <LottieView
            source={require('../../assets/animations/pulsing-dot.json')}
            autoPlay
            loop={true}
          /> */}
          
        </S.AnimationContainer>
        <S.Title>Carregando...</S.Title>
      </S.Container>
    </Modal>
  )
}