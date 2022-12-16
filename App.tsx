import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { theme } from './src/styles/themes/default';

import { Routes } from './src/routes';

import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black})

  return (
    <ThemeProvider theme={theme}>
      {fontsLoader ? <Routes /> : <ActivityIndicator/>}
    </ThemeProvider>
  );
}
