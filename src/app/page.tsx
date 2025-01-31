import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RandCraft - Home',
  description:
    'Welcome to RandCraft, your ultimate destination for random crafting ideas and inspiration.',
  openGraph: {
    title: 'RandCraft - Home',
    description:
      'Welcome to RandCraft, your ultimate destination for random crafting ideas and inspiration.',
    url: 'https://randcraft.netlify.app',
    siteName: 'RandCraft',
    images: [
      {
        url: 'https://randcraft.netlify.app/randcraft.png',
        width: 800,
        height: 600,
        alt: 'RandCraft',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const items = [
  {
    title: 'Lorem Ipsum',
    image: '/lorem-ipsum.png',
    description: 'Generate placeholder text for your designs and mockups.',
    link: '/lorem-ipsum',
  },
  {
    title: 'Gradient Generator',
    image: '/gradient.png',
    description: 'Create beautiful gradients for your projects.',
    link: '/gradient-generator',
  },
  {
    title: 'Fake Data Generator',
    image: '/fake.png',
    description: 'Generate random data for testing and development.',
    link: '/fake-data-generator',
  },
  {
    title: 'Base64 Encode/Decode',
    image: '/decode.png',
    description: 'Easily encode and decode Base64 strings.',
    link: '/base64',
  },
  {
    title: 'CSS Cursors',
    image: '/cursors.png',
    description: 'Browse and select from a variety of custom CSS cursors.',
    link: '/css-cursors',
  },
  {
    title: 'Symbols Collection',
    image: '/symbols.png',
    description: 'Access a collection of useful symbols and icons.',
    link: '/symbols-collection',
  },
  {
    title: 'Color Shades Generator',
    image: '/color-palette.png',
    description: 'Generate different shades of colors for your designs.',
    link: '/color-shades-generator',
  },
  {
    title: 'Image Compressor/Converter',
    image: '/picture.png',
    description: 'Compress and convert images to various formats.',
    link: '/image-compressor',
  },
  {
    title: 'Password Generator',
    image: '/password.png',
    description: 'Generate strong and secure passwords.',
    link: '/password-generator',
  },
  {
    title: 'Favicon Generator',
    image: '/favicon.png',
    description: 'Convert images to favicon or png with multiple resolutions',
    link: '/favicon-generator',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Randcraft Tools</h1>
        <p className="text-sm">
          A collection of useful tools for developers and designers.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => {
          return (
            <Link
              href={item.link}
              key={index}
              className="group border p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="overflow-hidden rounded-lg flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-contain transition duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <h4 className="mt-4 font-semibold text-sm group-hover:text-blue-500 text-center">
                {item.title}
              </h4>
              <p className="mt-2 text-xs text-center">{item.description}</p>
            </Link>
          );
        })}
      </div>
      <footer className="mt-8 text-center">
        <p className="text-sm">
          This project is open source on{' '}
          <a
            href="https://github.com/rezzakali/randcraft.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
