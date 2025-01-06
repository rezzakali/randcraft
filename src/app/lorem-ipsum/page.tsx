import { Metadata } from 'next';
import LoremIpsumGenerator from './LoremIpsumGenerator';

export const metadata: Metadata = {
  title: 'RandCraft - Lorem Ipsum Generator',
  description:
    'Generate Lorem Ipsum text with RandCraft. Customize paragraphs, sentences, and words for your needs.',
  openGraph: {
    title: 'RandCraft - Lorem Ipsum Generator',
    description:
      'Generate Lorem Ipsum text with RandCraft. Customize paragraphs, sentences, and words for your needs.',
    url: 'https://randcraft.netlify.app/lorem-ipsum',
    siteName: 'RandCraft',
    images: [
      {
        url: 'https://randcraft.netlify.app/lorem-ipsum.png',
        width: 800,
        height: 600,
        alt: 'RandCraft Lorem Ipsum Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return <LoremIpsumGenerator />;
};

export default page;
