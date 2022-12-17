import React from 'react';

// firbase 
import { createUser } from '../../firebase/user';

// Navigation
import { useNavigation } from "@react-navigation/native";

// Utils
import { Masks } from 'react-native-mask-input';


// Form
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_SIGN_UP } from '../../utils/schemas';

// Components
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputMask } from "../../components/Input/InputMask";

// Styles
import * as S from "./styles";

// Interfaces
interface IFormData {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function SignUp() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({resolver: yupResolver(SCHEMA_SIGN_UP)});

  async function handleSignIn(data: IFormData) {
    try {
      const { password, email, name, phone } = data;

      const user = await createUser({
        email,
        password,
        data: {
          email,
          name,
          phone
        }
      });

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Container>
      <S.Form>
        <Controller
          control={control}
          render={({ field: { onChange, value }}) => (
            <Input
              label="Nome:"
              placeholder="Digite seu sobrenome:"
              value={value}
              onChangeText={onChange}
              error={errors?.email?.message}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value }}) => (
            <InputMask
              label="Celular:"
              placeholder="Digite seu celular:"
              keyboardType="phone-pad"
              mask={Masks.BRL_PHONE}
              value={value}
              onChangeText={(unmasked) => {
                onChange(unmasked)
              }}
              error={errors?.phone?.message}
            />
          )}
          name="phone"
        />
        
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
        <Controller
          control={control}
          render={({ field: { onChange, value }}) => (
            <Input
              label="Confirme sua senha:"
              placeholder="Confirme sua senha:"
              secureTextEntry
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
              error={errors?.confirmPassword?.message}
            />
          )}
          name="confirmPassword"
        />
      </S.Form>
      <Button onPress={handleSubmit(handleSignIn)}>Criar Conta</Button>
    </S.Container>
  );
}
