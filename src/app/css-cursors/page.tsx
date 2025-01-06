import { Metadata } from 'next';
import Index from './Index';

export const metadata: Metadata = {
  title: 'RandCraft - CSS Cursors',
  description:
    'Discover a variety of CSS cursors with RandCraft. Copy and use them in your projects easily.',
  openGraph: {
    title: 'RandCraft - CSS Cursors',
    description:
      'Discover a variety of CSS cursors with RandCraft. Copy and use them in your projects easily.',
    url: 'https://www.randcraft.netlify.app/css-cursors',
    siteName: 'RandCraft',
    images: [
      {
        url: 'https://www.randcraft.netlify.app/cursors.png',
        width: 800,
        height: 600,
        alt: 'RandCraft CSS Cursors',
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
