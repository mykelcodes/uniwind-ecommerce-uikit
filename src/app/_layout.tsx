import '../global.css';

import { DefaultTheme, type Theme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <Stack />
    </ThemeProvider>
  );
}

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: '#313AEB',
    text: '#FFFFFF',
  },
};
