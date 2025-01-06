import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Copy } from 'lucide-react';
import { useState } from 'react';

const Base64 = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isEncoding, setIsEncoding] = useState(true);

  const handleTransform = () => {
    try {
      if (isEncoding) {
        setOutput(btoa(input)); // Encode to Base64
      } else {
        setOutput(atob(input)); // Decode from Base64
      }
    } catch (error) {
      console.log('🚀 ~ handleTransform ~ error:', error);
      setOutput('Invalid input for Base64 decoding!');
    }
  };

  return (
    <div className="bg-sidebar-accent p-4 rounded space-y-4 mb-8">
      <h1 className="text-2xl font-semibold text-center">
        Base64 Encoder / Decoder
      </h1>

      <Textarea
        className="w-full p-2 rounded text-sm"
        rows={4}
        placeholder="Enter your text or Base64 string..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex justify-between items-center">
        <Button
          className={`rounded ${
            isEncoding
              ? 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white'
              : 'bg-gray-300 text-black'
          }`}
          size={'sm'}
          onClick={() => setIsEncoding(true)}
        >
          Encode
        </Button>
        <Button
          className={`px-4 py-2 rounded ${
            !isEncoding
              ? 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white'
              : 'bg-gray-300 text-black'
          }`}
          onClick={() => setIsEncoding(false)}
        >
          Decode
        </Button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleTransform}
        >
          Transform
        </button>
      </div>

      <div className="bg-white p-3 rounded flex items-center justify-between dark:bg-[#030712]">
        <code className="break-words whitespace-pre-wrap text-sm flex-1">
          {output || 'Output will appear here...'}
        </code>
        {output && (
          <Copy
            className="cursor-pointer ml-2 text-gray-500 hover:text-gray-700"
            onClick={() => navigator.clipboard.writeText(output)}
          />
        )}
      </div>
    </div>
  );
};

export default Base64;
