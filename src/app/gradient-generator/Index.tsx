'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy } from 'lucide-react';
import { useState } from 'react';

function convertGradientToTailwind(cssGradient: string) {
  // Corrected Regex to extract gradient direction and up to three colors
  const regex =
    /linear-gradient\(([^,]+),\s*([^,]+),\s*([^,]*)?,?\s*([^\)]*)\)/;

  const match = cssGradient.match(regex);

  if (!match) {
    return 'Invalid gradient format';
  }

  const direction = match[1].trim() as keyof typeof directionMap; // Extract direction
  const color1 = match[2].trim(); // First color
  const viaColor = match[3]?.trim() || ''; // Via color (optional, default empty string)
  const color2 = match[4]?.trim() || color1; // Second color, default to first color if not provided
  // Map CSS directions to Tailwind directions
  const directionMap = {
    'to right': 'bg-gradient-to-r',
    'to left': 'bg-gradient-to-l',
    'to top': 'bg-gradient-to-t',
    'to bottom': 'bg-gradient-to-b',
    'to top right': 'bg-gradient-to-tr',
    'to top left': 'bg-gradient-to-tl',
    'to bottom right': 'bg-gradient-to-br',
    'to bottom left': 'bg-gradient-to-bl',
  };

  const tailwindDirection = directionMap[direction] || 'bg-gradient-to-r'; // Default to right

  // Generate Tailwind gradient classes
  if (viaColor) {
    return `${tailwindDirection} from-[${color1}] via-[${viaColor}] to-[${color2}]`;
  } else {
    return `${tailwindDirection} from-[${color1}] to-[${color2}]`;
  }
}

function GradientColorGenerate() {
  const [customColor1, setCustomColor1] = useState('#FF0000');
  const [customColor2, setCustomColor2] = useState('#0000FF');
  const [viaColor, setViaColor] = useState('#A656F8');

  const [gradientStyle, setGradientStyle] = useState(
    'linear-gradient(to right, #FF0000 , #A656F8, #0000FF)'
  );

  const handleGenerateGradient = () => {
    const gradient = viaColor
      ? `linear-gradient(to right, ${customColor1}, ${viaColor}, ${customColor2})`
      : `linear-gradient(to right, ${customColor1}, ${customColor2})`;
    setGradientStyle(gradient);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateRandomColor = () => {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
    const viaRandomColor = getRandomColor();

    const gradient = viaRandomColor
      ? `linear-gradient(to right, ${randomColor1}, ${viaRandomColor}, ${randomColor2})`
      : `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;

    setGradientStyle(gradient);
  };

  return (
    <div className="flex justify-start items-start">
      <div className="w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Gradient Color Generator
        </h1>

        {/* Custom color pickers */}
        <div className="flex items-center mb-4">
          <label htmlFor="customColor1" className="block mr-2">
            From
          </label>
          <div className="w-72">
            <Input
              type="color"
              id="customColor1"
              name="customColor1"
              className="p-2 border rounded"
              value={customColor1}
              onChange={(e) => setCustomColor1(e.target.value)}
            />
          </div>
          <Input
            type="text"
            className="ml-2 p-2 border  rounded"
            value={customColor1}
            onChange={(e) => setCustomColor1(e.target.value)}
            placeholder="#FF0000"
          />
        </div>

        <div className="flex items-center mb-6">
          <label htmlFor="viaColor" className="block mr-2">
            Via
          </label>
          <div className="w-72">
            <Input
              type="color"
              id="viaColor"
              className="p-2 border rounded"
              value={viaColor}
              onChange={(e) => setViaColor(e.target.value)}
            />
          </div>
          <Input
            type="text"
            className="ml-2 p-2 border rounded"
            value={viaColor}
            onChange={(e) => setViaColor(e.target.value)}
            placeholder="#a656f8"
          />
        </div>
        <div className="flex items-center mb-6">
          <label htmlFor="customColor2" className="block mr-2">
            To
          </label>
          <div className="w-72">
            <Input
              type="color"
              id="customColor2"
              className="p-2 border rounded"
              value={customColor2}
              onChange={(e) => setCustomColor2(e.target.value)}
            />
          </div>
          <Input
            type="text"
            className="ml-2 p-2 border rounded"
            value={customColor2}
            onChange={(e) => setCustomColor2(e.target.value)}
            placeholder="#0000FF"
          />
        </div>

        {/* Generate Gradient button */}
        <div className="flex items-center justify-start gap-4 max-w-sm">
          <Button
            onClick={handleGenerateGradient}
            className="w-full p-2 text-white"
            style={{
              backgroundImage: gradientStyle,
            }}
            size={'sm'}
          >
            Generate Gradient
          </Button>

          <Button
            onClick={generateRandomColor}
            className="w-full p-2 text-white"
            style={{
              backgroundImage: gradientStyle,
            }}
            size={'sm'}
          >
            Generate Random Gradient
          </Button>
        </div>

        {/* Gradient preview */}
        <div className="mt-4">
          <h2 className="text-xl font-bold">Generated Gradient Color</h2>
          <div
            className="p-8 rounded-lg mt-2"
            style={{
              backgroundImage: gradientStyle,
            }}
          ></div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Generated CSS</h2>
          <div className="p-3 bg-sidebar-accent rounded flex items-center justify-between">
            <code>{gradientStyle}</code>
            <Copy
              className="cursor-pointer"
              onClick={() => navigator.clipboard.writeText(gradientStyle)}
            />
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Generated Tailwind CSS</h2>
          <div className="p-3 bg-sidebar-accent rounded flex items-center justify-between">
            <code>{convertGradientToTailwind(gradientStyle)}</code>
            <Copy
              className="cursor-pointer"
              onClick={() =>
                navigator.clipboard.writeText(
                  convertGradientToTailwind(gradientStyle)
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GradientColorGenerate;
