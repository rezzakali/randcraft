import { Metadata } from 'next';
import Index from './Index';

export const metadata: Metadata = {
  title: 'RandCraft - Base64 Tools',
  description:
    'Explore RandCraft for all your Base64 encoding and decoding needs, along with other random crafting tools.',
  openGraph: {
    title: 'RandCraft - Base64 Tools',
    description:
      'Explore RandCraft for all your Base64 encoding and decoding needs, along with other random crafting tools.',
    url: 'https://randcraft.netlify.app/base64',
    siteName: 'RandCraft',
    images: [
      {
        url: 'https://randcraft.netlify.app/decode.png',
        width: 800,
        height: 600,
        alt: 'RandCraft Base64 Tools',
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
