import { Metadata } from 'next';
import Index from './Index';

export const metadata: Metadata = {
  title: 'RandCraft - Password Generator',
  description: 'Generate strong and secure passwords with your desire format.',
  openGraph: {
    title: 'RandCraft - Password Generator',
    description:
      'Generate strong and secure passwords with your desire format.',
    url: 'https://randcraft.netlify.app/password-generator',
    siteName: 'RandCraft',
    images: [
      {
        url: 'https://randcraft.netlify.app/password.png',
        width: 800,
        height: 600,
        alt: 'RandCraft Password Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return <Index />;
};

export default page;
