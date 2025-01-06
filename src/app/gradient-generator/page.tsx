import { Metadata } from 'next';
import GradientColorGenerate from './Index';

export const metadata: Metadata = {
  title: 'RandCraft - Gradient Generator',
  description:
    'Discover RandCraft for generating beautiful gradients and other random crafting tools.',
  openGraph: {
    title: 'RandCraft - Gradient Generator',
    description:
      'Discover RandCraft for generating beautiful gradients and other random crafting tools.',
    url: 'https://randcraft.netlify.app/gradient-generator',
    siteName: 'RandCraft',
    images: [
      {
        url: 'https://randcraft.netlify.app/gradient.png',
        width: 800,
        height: 600,
        alt: 'RandCraft Gradient Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return <GradientColorGenerate />;
};

export default page;
