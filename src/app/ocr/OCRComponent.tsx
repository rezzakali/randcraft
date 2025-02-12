'use client';

import { Input } from '@/components/ui/input';
import { Copy } from 'lucide-react';
import { useState } from 'react';
import Tesseract from 'tesseract.js';

const OCRComponent = () => {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      recognizeText(file);
    }
  };

  const recognizeText = async (file: File) => {
    setLoading(true);
    try {
      const { data } = await Tesseract.recognize(file, 'eng');
      setText(data.text);
    } catch (error) {
      console.error('OCR Error:', error);
      setText('Error extracting text');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">OCR</h1>
      <div className="bg-sidebar-accent p-4 rounded w-full">
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border p-2 bg-white cursor-pointer dark:bg-[#030712]"
        />
      </div>
      {image && (
        <img
          src={image}
          alt="Uploaded"
          className="w-72 h-auto mb-4 border rounded shadow-lg my-2"
        />
      )}
      {loading ? (
        <p>⏳ Extracting text...</p>
      ) : (
        text && (
          <div className="p-4 bg-sidebar-accent rounded relative">
            <p className="p-4 rounded">{text}</p>
            <Copy
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => navigator.clipboard.writeText(text)}
            />
          </div>
        )
      )}
    </div>
  );
};

export default OCRComponent;
