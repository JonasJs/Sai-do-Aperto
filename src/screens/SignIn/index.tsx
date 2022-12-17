import React from 'react';
import { showMessage } from "react-native-flash-message";

// Firebase
import { signIn } from "../../firebase/user";

// Hooks
import { useAuth } from '../../context/auth';

// Navigation
import { useNavigation } from "@react-navigation/native";

// Form
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_SIGNIN } from '../../utils/schemas';

// Components
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

// Image
import Logo from "../../assets/logo.svg";


// Styles
import * as S from "./styles";

// Interfaces
interface IFormData {
  email: string;
  password: string;
};

export function SignIn() {
  const { loadUser } = useAuth();

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({resolver: yupResolver(SCHEMA_SIGNIN)});
  
  async function handleSignIn(data: IFormData) {
    try {
      const { email, password } = data;

      const uid = await signIn({email, password});
      await loadUser(uid);

      navigation.navigate("home");
      
    } catch (error: any) {
      showMessage({
        message: error?.message || 'Ops!, Ocorreu um error.',
        description: "Tente Novamente!",
        type: "warning",
      });
    }
  }
  return (
    <S.Container>
      <Logo height={100} />
      <S.Form>
        <Controller
          control={control}
          render={({ field: { onChange, value }}) => (
            <Input
              label="E-mail:"
              placeholder="Digite seu e-mail:"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
              error={errors?.email?.message}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          render={({ field: { onChange, value }}) => (
            <Input
              label="Senha:"
              placeholder="Digite sua senha:"
              secureTextEntry
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
              error={errors?.password?.message}
            />
          )}
          name="password"
        />
      </S.Form>
      <Button onPress={handleSubmit(handleSignIn)}>Entrar</Button>
      
      <S.Link onPress={() => navigation.navigate("signUp")}>
        <S.TextLink>Criar Conta</S.TextLink>
      </S.Link>
    </S.Container>
  );
}
