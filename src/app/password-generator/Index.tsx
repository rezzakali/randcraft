'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';
import { useState } from 'react';

const Index = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('P@ssw0rd1234');

  const { toast } = useToast();

  function generatePasswordHandler() {
    const password = generatePassword(
      passwordLength,
      includeSymbols,
      includeNumbers,
      includeUppercase
    );
    setGeneratedPassword(password);
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(generatedPassword);
      toast({ description: 'Password copied to clipboard!' });
    } catch (error) {
      console.log('🚀 ~ copyToClipboard ~ error:', error);
      toast({ description: 'Failed to copy!' });
    }
  }

  function generatePassword(
    length: number,
    includeSymbols: boolean,
    includeNumbers: boolean,
    includeUppercase: boolean
  ) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let characterPool = lowercase;

    if (includeUppercase) {
      characterPool += uppercase;
    }
    if (includeNumbers) {
      characterPool += numbers;
    }
    if (includeSymbols) {
      characterPool += symbols;
    }

    if (!characterPool) {
      throw new Error('At least one character type must be selected.');
    }

    // Generate password securely
    const passwordArray = new Uint8Array(length);
    window.crypto.getRandomValues(passwordArray);

    return Array.from(passwordArray)
      .map((byte) => characterPool[byte % characterPool.length])
      .join('');
  }

  return (
    <div className="mx-auto p-5 shadow-md rounded-md bg-sidebar-accent">
      <div className="space-y-4">
        {/* Length Slider */}
        <div>
          <label className="block font-medium">Password Length</label>
          <input
            type="range"
            min="8"
            max="64"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm">Length: {passwordLength}</p>
        </div>

        {/* Options */}
        <div className="flex items-center flex-wrap gap-3">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            <span className="ml-2">Include Symbols</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <span className="ml-2">Include Numbers</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            <span className="ml-2">Include Uppercase</span>
          </label>
        </div>

        {/* Generate Button */}
        <Button
          onClick={generatePasswordHandler}
          className="w-full bg-blue-500 rounded-md hover:bg-blue-600 text-white"
          size={'sm'}
        >
          Generate Password
        </Button>

        {/* Generated Password */}
        <div className="p-2 rounded-md flex justify-between items-center dark:bg-[#030712] bg-white">
          <p className="break-all">{generatedPassword}</p>
          <Copy onClick={copyToClipboard} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Index;
