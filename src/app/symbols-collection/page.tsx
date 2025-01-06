import { Metadata } from 'next';
import Index from './Index';

export const metadata: Metadata = {
  title: 'RandCraft - Symbols Collection',
  description:
    'Discover a comprehensive collection of symbols on RandCraft. Perfect for all your Base64 encoding, decoding, and other random crafting needs.',
  openGraph: {
    title: 'RandCraft - Symbols Collection',
    description:
      'Discover a comprehensive collection of symbols on RandCraft. Perfect for all your Base64 encoding, decoding, and other random crafting needs.',
    url: 'https://www.randcraft.netlify.app/symbols-collection',
    siteName: 'RandCraft',
    images: [
      {
        url: 'https://www.randcraft.netlify.app/symbols.png',
        width: 800,
        height: 600,
        alt: 'RandCraft Symbols Collection',
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
