import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunitoSans = Nunito_Sans({
  variable: '--nunito-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'RandCraft - Home',
  description:
    'Welcome to RandCraft, your ultimate destination for random crafting ideas and inspiration.',
  openGraph: {
    title: 'RandCraft - Home',
    description:
      'Welcome to RandCraft, your ultimate destination for random crafting ideas and inspiration.',
    url: 'https://randcraft.netlify.app',
    siteName: 'RandCraft',
    images: [
      {
        url: 'https://randcraft.netlify.app/randcraft.png',
        width: 800,
        height: 600,
        alt: 'RandCraft',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

import Layout from '@/components/layout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.variable} antialiased`}>
        <ThemeProvider defaultTheme="dark">
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
