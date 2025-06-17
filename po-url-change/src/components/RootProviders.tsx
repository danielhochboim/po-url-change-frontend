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

const theme = createTheme();
const queryClient = new QueryClient();

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
