import OCRComponent from './OCRComponent';

export const metadata = {
  title: 'OCR - Extract Text from Images',
  description:
    'A powerful OCR app built with Next.js and Tesseract.js to extract text from images.',
  keywords:
    'OCR, Image to Text, Next.js, Tesseract.js, AI, Optical Character Recognition',
  openGraph: {
    title: 'OCR App - Extract Text from Images',
    description:
      'Upload an image and extract text easily using Tesseract.js in Next.js.',
    url: 'https://randcraft.netlify.app',
    type: 'website',
    images: [
      {
        url: 'https://randcraft.netlify.app/ocr.png',
        width: 1200,
        height: 630,
        alt: 'OCR App Preview',
      },
    ],
  },
};

const page = () => {
  return <OCRComponent />;
};

export default page;
