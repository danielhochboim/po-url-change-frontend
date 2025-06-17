import Providers from './providers';
import './globals.css';           // default from create-next-app

export const metadata = {
  title: 'My MUI / Next.js starter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
