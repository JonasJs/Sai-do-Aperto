import React from 'react';
import { ThemeProvider } from 'styled-components'

import { theme } from './src/styles/themes/default';

// Context
import { AuthProvider } from "./src/context/auth";

// Components
import { Loading } from "./src/components/Loading";

// routes
import { Routes } from './src/routes';

import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black})

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Loading />
        {fontsLoader && <Routes /> }
      </ThemeProvider>
    </AuthProvider>
  );
}
