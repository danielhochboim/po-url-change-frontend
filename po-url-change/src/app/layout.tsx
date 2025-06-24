import { ReactNode } from 'react';
import RootProviders from '@/components/RootProviders';
import Navbar from '@/components/Navbar';



export const metadata = { title: 'PO URL Change' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootProviders><Navbar />
{children}</RootProviders>
      </body>
    </html>
  );
}