import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import RootProviders from '@/components/RootProviders';   // ⬅ add


const queryClient = new QueryClient();
const theme = createTheme();

export const metadata = { title: 'PO URL Change' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}