import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Base64Tool from './Base64Tool';

// Utility to generate random hashes
const generateRandomHash = (bits: number) => {
  const bytes = bits / 8; // Convert bits to bytes

  const randomValues = crypto.getRandomValues(new Uint8Array(bytes));
  return Array.from(randomValues)
    .map((byte) => byte.toString(16).padStart(2, '0')) // Convert each byte to a two-digit hex string
    .join('');
};

const UUIDGenerator = () => {
  // State for UUID generation
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [generatedId, setGeneratedId] = useState('');

  // State for Hash generation
  const [bitLength, setBitLength] = useState(64);
  const [generatedHash, setGeneratedHash] = useState('');

  // Generate ID with optional prefix and suffix
  const handleGenerateId = () => {
    const randomId = `${prefix}${prefix ? '-' : ''}${uuidv4()}${
      suffix ? '-' : ''
    }${suffix}`;
    setGeneratedId(randomId);
  };

  // Generate Random Hash based on bit length
  const handleGenerateHash = () => {
    const hash = generateRandomHash(bitLength);
    setGeneratedHash(hash);
  };

  return (
    <div className="flex flex-col">
      <Base64Tool />

      <div className="rounded">
        <h1 className="text-2xl font-semibold text-center mb-4">
          UUID/Random ID Generator
        </h1>

        {/* Input for Prefix */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Prefix (Optional):</label>
          <Input
            type="text"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            placeholder="Enter a prefix"
          />
        </div>

        {/* Input for Suffix */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Suffix (Optional):</label>
          <Input
            type="text"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
            placeholder="Enter a suffix"
          />
        </div>

        {/* Generate Button */}
        <Button onClick={handleGenerateId} size={'sm'}>
          Generate ID
        </Button>

        {/* Display Generated ID */}
        {generatedId && (
          <div className="mt-4">
            <h4 className="font-medium mb-1 text-xl">Generated ID</h4>
            <div className="bg-sidebar-accent p-3 rounded flex items-center justify-between">
              <code>{generatedId}</code>
              <CopyIcon
                onClick={() => navigator.clipboard.writeText(generatedId)}
                className="cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>

      {/* Random Hash Generator */}
      <div className="mt-8">
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
        <Button onClick={handleGenerateHash} size={'sm'}>
          Generate Hash
        </Button>

        {/* Display Generated Hash */}
        {generatedHash && (
          <div className="mt-4">
            <h4 className="font-medium mb-1 text-xl">Generated Hash</h4>
            <div className="bg-sidebar-accent p-3 rounded flex flex-wrap items-center justify-between w-full relative">
              <code className="text-sm break-all">{generatedHash}</code>
              <CopyIcon
                onClick={() => navigator.clipboard.writeText(generatedHash)}
                className="cursor-pointer ml-2 absolute top-3 right-2"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UUIDGenerator;
