import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { theme } from './src/styles/themes/default';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text>Hello World</Text>
    </ThemeProvider>
  );
}
