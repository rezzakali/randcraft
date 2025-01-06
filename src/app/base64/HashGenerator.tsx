import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CopyIcon } from 'lucide-react';
import { useState } from 'react';

// Utility to generate random hashes
const generateRandomHash = (bits: number) => {
  const bytes = bits / 8; // Convert bits to bytes

  const randomValues = crypto.getRandomValues(new Uint8Array(bytes));
  return Array.from(randomValues)
    .map((byte) => byte.toString(16).padStart(2, '0')) // Convert each byte to a two-digit hex string
    .join('');
};

const HashGenerator = () => {
  // State for Hash generation
  const [bitLength, setBitLength] = useState(64);
  const [generatedHash, setGeneratedHash] = useState('');

  // Generate Random Hash based on bit length
  const handleGenerateHash = () => {
    const hash = generateRandomHash(bitLength);
    setGeneratedHash(hash);
  };

  return (
    <div className="mt-8 bg-sidebar-accent p-4 rounded">
      <h3 className="text-2xl font-semibold text-center mb-4">
        Random Hash Generator
      </h3>

      {/* Input for Bit Length */}
      <div className="mb-4">
        <Select onValueChange={(e) => setBitLength(Number(e))}>
          <SelectTrigger>
            <SelectValue placeholder="Bit Length" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="64">64-bit</SelectItem>
            <SelectItem value="128">128-bit</SelectItem>
            <SelectItem value="256">256-bit</SelectItem>
            <SelectItem value="512">512-bit</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Generate Button */}
      <Button onClick={handleGenerateHash} size={'sm'} variant={'outline'}>
        Generate Hash
      </Button>

      {/* Display Generated Hash */}

      <div className="mt-4">
        <h4 className="font-medium mb-1 text-xl">Generated Hash</h4>
        <div className="dark:bg-[#030712] bg-white p-3 rounded flex items-center justify-between">
          <div className="rounded flex flex-wrap items-center justify-between w-full relative">
            <code className="text-sm break-all mr-8">
              {generatedHash || 'Output will appear here...'}
            </code>
            {generatedHash && (
              <CopyIcon
                onClick={() => navigator.clipboard.writeText(generatedHash)}
                className="cursor-pointer absolute top-0 right-2 text-gray-500 hover:text-gray-700"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashGenerator;
