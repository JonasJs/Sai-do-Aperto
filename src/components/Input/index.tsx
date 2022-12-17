import React, { useState } from "react";
import { useTheme } from "styled-components";
import Feather from '@expo/vector-icons/Feather';

import { TextInputProps } from "react-native";

// Styles
import * as S from "./styles";

// interface
interface IButton extends TextInputProps {
  label?: string;
  secureTextEntry?: boolean;
  error?: string;
}

export function Input({ label, secureTextEntry, error, ...rest }: IButton) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const theme = useTheme();

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(prevState => !prevState);
  }

  return (
    <S.Container hasError={!!error}>
      {label && <S.Label>{label}</S.Label>}
      <S.ContentInput>
        <S.Input {...rest} secureTextEntry={secureTextEntry && isPasswordVisible}/>
        { secureTextEntry && (
          <S.ContainerIcon onPress={handlePasswordVisibilityChange}>
            <Feather
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={24}
              color={theme.colors.gray_500}
            />
          </S.ContainerIcon>
        )}
      </S.ContentInput>
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}