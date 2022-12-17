
import React, { useEffect } from "react";
import { BackHandler } from "react-native";

// Firebase
import { isLoggedUser } from "../../firebase/user";

// Hooks
import { useAuth } from "../../context/auth";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Images
import LogoWhite from "../../assets/logo-white.svg";

// Styles
import * as S from "./styles";

export function Preload() {
  const { loadUser } = useAuth();

  const navigation = useNavigation();

  useEffect(() => {
    async function preload() {
      try {
        
        const uid = await isLoggedUser();
        if(uid) {
          await loadUser(String(uid));
        }
  
        navigation.navigate("app")
      } catch (error) {
        BackHandler.exitApp();
      }
    }

    preload();
  }, []);
  
  return (
    <S.Container>
      <LogoWhite />
      {/* <ActivityIndicator /> */}
    </S.Container>
  )
}
