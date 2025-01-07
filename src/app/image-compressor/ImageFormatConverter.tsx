import { Button } from '@/components/ui/button'; // Import your Button component
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { saveAs } from 'file-saver';
import Image from 'next/image';
import React, { useState } from 'react';

const ImageFormatConverter = () => {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [convertedImage, setConvertedImage] = useState<string | null>(null);
  const [desiredFormat, setDesiredFormat] = useState('png');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];
      setOriginalImage(imageFile);
    }
  };

  const convertImageFormat = async () => {
    if (!originalImage) return;

    setLoading(true);
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new window.Image();
      img.src = event.target?.result as string;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) return;

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const convertedDataURL = canvas.toDataURL(`image/${desiredFormat}`);
        setConvertedImage(convertedDataURL);
        setLoading(false);
      };
    };

    reader.readAsDataURL(originalImage);
  };

  const downloadConvertedImage = () => {
    if (convertedImage) {
      const blob = dataURLToBlob(convertedImage);
      saveAs(blob, `converted-image.${desiredFormat}`);
    }
  };

  const dataURLToBlob = (dataURL: string) => {
    const [header, data] = dataURL.split(',');
    const mime = header.match(/:(.*?);/)?.[1];
    const binary = atob(data);
    const array = [];

    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }

    return new Blob([new Uint8Array(array)], { type: mime });
  };

  return (
    <div className="p-4 mt-6 rounded bg-sidebar-accent">
      <h1 className="text-2xl font-bold mb-4">Image Format Converter</h1>

      {/* Image Upload */}
      <div className="mb-4 border rounded p-2 bg-white dark:bg-[#030712]">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="rounded w-full cursor-pointer"
          disabled={loading}
        />
      </div>

      {/* Format Selection */}
      <div className="mb-4">
        <Select onValueChange={(e) => setDesiredFormat(e)}>
          <SelectTrigger>
            <SelectValue placeholder="Select Your Desire Format" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="png">PNG</SelectItem>
            <SelectItem value="jpg">JPG</SelectItem>
            <SelectItem value="jpeg">JPEG</SelectItem>
            <SelectItem value="webp">WEBP</SelectItem>
            <SelectItem value="avif">AVIF</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Convert Button */}
      <Button
        onClick={convertImageFormat}
        variant={'outline'}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Convert Image'}
      </Button>

      {/* Converted Image Preview */}
      {convertedImage && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Converted Image:</h2>
          <Image
            src={convertedImage}
            alt="Converted"
            className="max-w-xs border mt-2"
            width={500}
            height={500}
          />
          <Button
            className="mt-2"
            onClick={downloadConvertedImage}
            variant={'outline'}
          >
            Download Converted Image
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageFormatConverter;
