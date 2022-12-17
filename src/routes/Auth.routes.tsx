import React from 'react';
import { useTheme } from 'styled-components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="signIn"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.brand_500,
        },
        headerTitleStyle: {
          fontFamily: theme.font.medium,
          color: theme.colors.white,
          fontSize: 16,
        },
        headerTitleAlign: 'center',
        headerTintColor: theme.colors.white,
      }}>
        
      <Screen 
        name="signIn"
        component={SignIn}
      />

      <Screen
        name="signUp"
        component={SignUp}
        options={{
          headerShown: true,
          title: "CADASTRO"
        }}
      />
    </Navigator>
  )
}