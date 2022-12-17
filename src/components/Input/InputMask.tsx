import React from "react";
import { Mask } from 'react-native-mask-input';
import { TextInputProps } from "react-native";
// Styles
import * as S from "./styles";

// interface
interface IButton extends TextInputProps {
  label?: string;
  error?: string;
  mask: Mask;
}

export function InputMask({ label, error, mask, ...rest }: IButton) {

  return (
    <S.Container hasError={!!error}>
      {label && <S.Label>{label}</S.Label>}
      <S.ContentInput>
        <S.InputMask mask={mask} {...rest} />
      </S.ContentInput>
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}