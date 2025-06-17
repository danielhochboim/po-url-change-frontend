'use client';

import { ReactNode } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
} from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const theme = createTheme();               // ← runs only in the browser
const queryClient = new QueryClient();     // ← idem

export default function RootProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
