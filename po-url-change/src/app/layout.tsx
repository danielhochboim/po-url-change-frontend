import { ReactNode } from 'react';
import RootProviders from '@/components/RootProviders';


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