import { Metadata } from 'next';
import ImageCompressor from './Index';

export const metadata: Metadata = {
  title: 'RandCraft - Image Compressor',
  description:
    'Compress and convert your images efficiently with RandCraft. Explore other random crafting tools as well.',
  openGraph: {
    title: 'RandCraft - Image Compressor',
    description:
      'Compress and convert your images efficiently with RandCraft. Explore other random crafting tools as well.',
    url: 'https://randcraft.netlify.app/image-compressor',
    siteName: 'RandCraft',
    images: [
      {
        url: 'https://randcraft.netlify.app/picture.png',
        width: 800,
        height: 600,
        alt: 'RandCraft Image Compressor',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return <ImageCompressor />;
};

export default page;
