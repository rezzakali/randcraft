import { Metadata } from 'next';
import FaviconGenerator from './Index';

export const metadata: Metadata = {
  title: 'RandCraft - Favicon Generator',
  description: 'Convert images to favicon or png with multiple resolutions',
  openGraph: {
    title: 'RandCraft - Favicon Generator',
    description: 'Convert images to favicon or png with multiple resolutions',
    url: 'https://randcraft.netlify.app/favicon-generator',
    siteName: 'RandCraft',
    images: [
      {
        url: 'https://randcraft.netlify.app/favicon.png',
        width: 800,
        height: 600,
        alt: 'RandCraft Favicon Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return <FaviconGenerator />;
};

export default page;
