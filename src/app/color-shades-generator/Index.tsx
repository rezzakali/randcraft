'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const generateShades = (hex: string) => {
  const shades = []; // Initialize an empty array to hold the shades.

  for (let i = 1; i <= 7; i++) {
    // For each shade (1 to 7):
    const shade = lightenOrDarken(hex, (5 - i) * 10);
    // Call `lightenOrDarken` with a percentage derived from the loop index.

    shades.push(shade); // Add the generated shade to the array.
  }

  return shades; // Return the array of shades.
};

const lightenOrDarken = (hex: string, percent: number) => {
  const num = parseInt(hex.slice(1), 16); // Convert HEX color to an integer.
  const amt = Math.round(2.55 * percent); // Calculate the adjustment amount based on the percentage.

  // Extract red, green, and blue components.
  let r = (num >> 16) + amt; // Adjust the red component.
  let g = ((num >> 8) & 0x00ff) + amt; // Adjust the green component.
  let b = (num & 0x0000ff) + amt; // Adjust the blue component.

  // Ensure the values are within the valid range (0 to 255).
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // Combine the RGB components back into a HEX color.
  return '#' + (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1);
};

const ColorShadesGenerator = () => {
  const [colors, setColors] = useState([
    '#FF5733',
    '#33FF57',
    '#5733FF',
    '#FFC300',
    '#FF33A8',
    '#33A8FF',
    '#A8FF33',
    '#FF5733',
    '#C70039',
    '#900C3F',
    '#581845',
    '#1ABC9C',
    '#2ECC71',
    '#3498DB',
    '#9B59B6',
  ]);

  const { toast } = useToast();

  // Add color handler
  const addColor = (color: string) => {
    // Ensure the color starts with a hash (#)
    if (!color.startsWith('#')) {
      color = `#${color}`;
    }
    setColors((prev) => [...prev, color]);
  };

  // Remove color handler
  const removeColor = (index: number) => {
    setColors((prev) => prev.filter((_, i) => i !== index));
  };

  const colorCopyHandler = async (color: string) => {
    const colors = generateShades(color).map((c) => c);
    try {
      await navigator.clipboard.writeText(JSON.stringify(colors));
      toast({ title: 'Copied!', variant: 'default' });
    } catch (error) {
      console.log('🚀 ~ colorCopyHandler ~ error:', error);
      toast({ title: 'Failed to copy!', variant: 'destructive' });
    }
  };

  // Update color handler
  const updateColor = (index: number, newColor: string) => {
    setColors((prev) =>
      prev.map((color, i) => (i === index ? newColor : color))
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Color Shades Generator</h1>

      {/* Add Color Input */}
      <div className="flex items-center gap-2 mb-4">
        <Input
          type="text"
          placeholder="Enter HEX color code"
          className="w-full"
          id="add-color"
          maxLength={6}
          minLength={6}
        />
        <Button
          onClick={() => {
            const color = (
              document.getElementById('add-color') as HTMLInputElement
            ).value;
            addColor(color);
          }}
        >
          Add Color
        </Button>
      </div>

      {/* Display Colors and Shades */}
      <div className="grid grid-cols-1 gap-6">
        {colors.map((color, index) => (
          <div key={index} className="p-2 border rounded">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center border rounded">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => updateColor(index, e.target.value)}
                  className="bg-transparent cursor-pointer h-8"
                />
                <input
                  type="text"
                  value={color}
                  onChange={(e) => updateColor(index, e.target.value)}
                  className="outline-none border-none pl-2 h-8 !shadow-none !focus:outline-none !active:outline-none bg-transparent"
                  placeholder="#000000"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <p
                    onClick={() => colorCopyHandler(color)}
                    className="text-xs cursor-pointer"
                  >
                    Copy all values
                  </p>
                  {colors.length !== 1 && (
                    <p
                      onClick={() => removeColor(index)}
                      className="hover:underline text-red-400 hover:text-red-500 text-xs cursor-pointer"
                    >
                      Remove
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Shades */}
            <div className="grid grid-cols-7 space-x-0.5 mt-2 rounded">
              {generateShades(color).map((shade, i) => (
                <div
                  key={i}
                  className="border cursor-pointer"
                  title={`Click to copy ${shade}`}
                  onClick={() => {
                    navigator.clipboard.writeText(shade);
                    toast({ title: 'Copied!' });
                  }}
                >
                  <div
                    className="w-auto h-8"
                    style={{ backgroundColor: shade }}
                  ></div>
                  <p className="text-xs text-center p-2">{shade}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorShadesGenerator;
