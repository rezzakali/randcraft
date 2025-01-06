import { Metadata } from 'next';
import ColorShadesGenerator from './Index';

export const metadata: Metadata = {
  title: 'RandCraft - Color Shades Generator',
  description:
    "Discover and generate various shades of colors with RandCraft's Color Shades Generator. Perfect for designers and developers.",
  openGraph: {
    title: 'RandCraft - Color Shades Generator',
    description:
      "Discover and generate various shades of colors with RandCraft's Color Shades Generator. Perfect for designers and developers.",
    url: 'https://www.randcraft.netlify.app/color-shades-generator',
    siteName: 'RandCraft',
    images: [
      {
        url: 'https://www.randcraft.netlify.app/color-palette.png',
        width: 800,
        height: 600,
        alt: 'RandCraft Color Shades Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return <ColorShadesGenerator />;
};

export default page;
