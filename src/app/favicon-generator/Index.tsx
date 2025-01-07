'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

import { saveAs } from 'file-saver';
import JSZip from 'jszip';

const FaviconGenerator = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [generatedFavicons, setGeneratedFavicons] = useState<string[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  const generateFavicons = () => {
    if (!uploadedImage) return;

    const resolutions = [16, 32, 48, 64, 128, 256]; // Common favicon sizes
    const imageUrls: string[] = [];

    const image = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      image.src = e.target?.result as string;

      image.onload = () => {
        resolutions.forEach((size) => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (!context) return;

          canvas.width = size;
          canvas.height = size;
          context.drawImage(image, 0, 0, size, size);

          // Generate Data URL (Base64)
          const dataUrl = canvas.toDataURL('image/png');
          imageUrls.push(dataUrl);
        });

        setGeneratedFavicons(imageUrls);
      };
    };

    reader.readAsDataURL(uploadedImage);
  };

  const downloadFavicon = (dataUrl: string, size: number) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `favicon-${size}x${size}.png`;
    link.click();
  };

  const downloadAllImages = async () => {
    const zip = new JSZip();
    const folder = zip.folder('favicons');

    generatedFavicons.forEach((dataUrl, index) => {
      const size = [16, 32, 48, 64, 128, 256][index];
      const base64Data = dataUrl.split(',')[1];
      folder?.file(`favicon-${size}x${size}.png`, base64Data, { base64: true });
    });

    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'favicons.zip');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Favicon Generator</h1>
      {/* Image Upload */}
      <div className="bg-sidebar-accent p-4 rounded">
        <div className="flex items-center gap-4">
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 bg-white cursor-pointer dark:bg-[#030712]"
          />
          <Button
            size={'sm'}
            onClick={generateFavicons}
            disabled={!uploadedImage}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 text-white rounded"
          >
            Generate Favicons
          </Button>
        </div>
      </div>

      {/* Preview and Download */}
      {generatedFavicons.length > 0 && (
        <div className="bg-sidebar-accent p-3 rounded">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Generated Favicons</h2>
            <Button size={'sm'} onClick={downloadAllImages}>
              Download All
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {generatedFavicons.map((dataUrl, index) => {
              const size = [16, 32, 48, 64, 128, 256][index];
              return (
                <div
                  key={index}
                  className="text-center space-y-2 border rounded p-2 dark:border-gray-700"
                >
                  <img
                    src={dataUrl}
                    alt={`Favicon ${size}x${size}`}
                    className="w-auto h-auto mx-auto border"
                  />
                  <button
                    onClick={() => downloadFavicon(dataUrl, size)}
                    className="px-2 py-1 bg-green-500 text-white text-sm rounded"
                  >
                    Download {size}x{size}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FaviconGenerator;
