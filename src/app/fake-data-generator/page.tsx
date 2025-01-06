import { Metadata } from 'next';
import Index from './Index';

export const metadata: Metadata = {
  title: 'RandCraft - Fake Data Generator',
  description:
    'Generate fake user data for testing and development purposes with RandCraft.',
  openGraph: {
    title: 'RandCraft - Fake Data Generator',
    description:
      'Generate fake user data for testing and development purposes with RandCraft.',
    url: 'https://randcraft.netlify.app/fake-data-generator',
    siteName: 'RandCraft',
    images: [
      {
        url: 'https://randcraft.netlify.app/fake.png',
        width: 800,
        height: 600,
        alt: 'RandCraft Fake Data Generator',
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
