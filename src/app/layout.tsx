import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/store/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Manga Searcher',
  description: 'It`s a custom manga searcher',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
          {modal}
        </StoreProvider>
      </body>
    </html>
  );
}
