import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const RandomIdGenerator = () => {
  // State for UUID generation
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [generatedId, setGeneratedId] = useState('');

  // Generate ID with optional prefix and suffix
  const handleGenerateId = () => {
    const randomId = `${prefix}${prefix ? '-' : ''}${uuidv4()}${
      suffix ? '-' : ''
    }${suffix}`;
    setGeneratedId(randomId);
  };

  return (
    <div className="rounded bg-sidebar-accent p-4">
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
      <Button onClick={handleGenerateId} size={'sm'} variant={'outline'}>
        Generate ID
      </Button>

      {/* Display Generated ID */}

      <div className="mt-4">
        <h4 className="font-medium mb-1 text-xl">Generated ID</h4>
        <div className="p-3 rounded flex items-center justify-between dark:bg-[#030712] bg-white">
          <code className="break-words whitespace-pre-wrap text-sm flex-1">
            {generatedId || 'Output will appear here...'}
          </code>
          {generatedId && (
            <CopyIcon
              className="cursor-pointer ml-2 text-gray-500 hover:text-gray-700"
              onClick={() => navigator.clipboard.writeText(generatedId)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomIdGenerator;
