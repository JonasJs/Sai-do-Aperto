

import React from "react";
import { showMessage } from "react-native-flash-message";

// Hooks
import { useAuth } from "../../context/auth";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Components
import { Button } from "../../components/Button";

// Styles
import * as S from "./styles";

export function Profile() {
  const { signOutApp } = useAuth();

  const navigation = useNavigation();
  
  async function handleSignOut() {
    await signOutApp();
    navigation.navigate("home");
    
    showMessage({
      message: 'Você saiu da sua conta.',
      description: "",
      type: "success",
    });
  }

  return (
    <S.Container>
      <Button onPress={handleSignOut}>Sair</Button>
    </S.Container>
  )
}