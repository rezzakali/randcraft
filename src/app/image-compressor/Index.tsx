'use client';

import { Button } from '@/components/ui/button'; // Import your Button component
import imageCompression from 'browser-image-compression';
import React, { useState } from 'react';
import ImageFormatConverter from './ImageFormatConverter';

const ImageCompressor = () => {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [compressedImage, setCompressedImage] = useState<Blob | null>(null);

  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];
      setOriginalImage(imageFile);
    }
  };

  const compressImage = async () => {
    if (originalImage) {
      // Compression options
      const options = {
        maxSizeMB: 1, // Maximum file size in MB
        maxWidthOrHeight: 1024, // Max width or height of the output image
        useWebWorker: true, // Use web worker for faster compression
      };

      setLoading(true);
      try {
        const compressedBlob = await imageCompression(originalImage, options);
        setCompressedImage(compressedBlob);
      } catch (error) {
        console.error('Image compression error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const downloadCompressedImage = () => {
    if (compressedImage) {
      const url = URL.createObjectURL(compressedImage);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'compressed-image.jpg'; // Specify the download file name
      link.click();
    }
  };

  return (
    <div>
      <div className="p-4 rounded bg-sidebar-accent">
        <h1 className="text-2xl font-bold mb-4">Image Compressor</h1>

        {/* File Upload */}
        <div className="flex justify-start w-full bg-sidebar-accent rounded border dark:bg-[#030712]">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border border-sidebar-accent rounded-md p-2 w-full cursor-pointer bg-white dark:bg-[#030712]"
            disabled={loading}
          />
        </div>

        {/* Show Original Image */}
        {originalImage && (
          <div className="mt-4 border p-4 rounded">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">Original Image:</h2>
              <Button
                size={'sm'}
                onClick={compressImage}
                disabled={loading}
                variant={'outline'}
              >
                {!loading ? 'Compress Image' : 'Loading...'}
              </Button>
            </div>
            <p className="text-sm">Name: {originalImage.name}</p>
            <p className="text-sm">
              Size: {(originalImage.size / 1024).toFixed(2)} KB
            </p>
            <img
              src={URL.createObjectURL(originalImage)}
              alt="Original"
              className="max-w-xs mt-2 rounded-md border"
            />
          </div>
        )}

        {/* Show Compressed Image */}
        {compressedImage && (
          <div className="mt-4 border rounded p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">Compressed Image:</h2>
              <Button
                size={'sm'}
                onClick={downloadCompressedImage}
                variant={'outline'}
              >
                Download Compressed Image
              </Button>
            </div>
            <p>Size: {(compressedImage.size / 1024).toFixed(2)} KB</p>
            <img
              src={URL.createObjectURL(compressedImage)}
              alt="Compressed"
              className="max-w-xs mt-2"
            />
          </div>
        )}
      </div>
      {/* Image Format Converter */}
      <ImageFormatConverter />
    </div>
  );
};

export default ImageCompressor;
