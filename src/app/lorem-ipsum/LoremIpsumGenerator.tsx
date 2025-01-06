'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy } from 'lucide-react';
import React, { useState } from 'react';

const LoremIpsumGenerator = () => {
  const [lorems, setLorems] = useState<string>(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse placeat quam, quos maxime ipsa adipisci libero! Accusantium modi quasi esse itaque praesentium, exercitationem, unde dolore nostrum voluptatibus repellat dolorum eos!'
  );

  const [values, setValues] = useState({
    paragraph: '',
    sentence: '',
    words: '',
  });

  // Function to generate Lorem Ipsum data
  function generateLoremIpsum({ paragraphs = 3, sentences = 5, words = 200 }) {
    const loremWords = [
      'lorem',
      'ipsum',
      'dolor',
      'sit',
      'amet',
      'consectetur',
      'adipiscing',
      'elit',
      'sed',
      'do',
      'eiusmod',
      'tempor',
      'incididunt',
      'ut',
      'labore',
      'et',
      'dolore',
      'magna',
      'aliqua',
      'ut',
      'enim',
      'ad',
      'minim',
      'veniam',
      'quis',
      'nostrud',
      'exercitation',
      'ullamco',
      'laboris',
      'nisi',
      'ut',
      'aliquip',
      'ex',
      'ea',
      'commodo',
      'consequat',
      'duis',
      'aute',
      'irure',
      'dolor',
      'in',
      'reprehenderit',
      'in',
      'voluptate',
      'velit',
      'esse',
      'cillum',
      'dolore',
      'eu',
      'fugiat',
      'nulla',
      'pariatur',
    ];

    // Helper to generate random sentences
    function generateSentence(wordCount: number) {
      const sentence = [];
      for (let i = 0; i < wordCount; i++) {
        const randomWord =
          loremWords[Math.floor(Math.random() * loremWords.length)];
        sentence.push(randomWord);
      }

      return sentence.join(' ') + '.';
    }

    // Helper to generate paragraphs
    function generateParagraph(sentenceCount: number) {
      const paragraph = [];
      for (let i = 0; i < sentenceCount; i++) {
        const sentenceLength = Math.floor(Math.random() * 10) + 8; // Random sentence length between 8 and 18
        paragraph.push(generateSentence(sentenceLength));
      }
      return paragraph.join(' ');
    }

    // Output based on user input
    if (paragraphs > 0) {
      const result = [];
      for (let i = 0; i < paragraphs; i++) {
        result.push(generateParagraph(Math.floor(Math.random() * 5) + 3)); // Random 3-7 sentences per paragraph
      }
      return result.join('\n\n');
    } else if (sentences > 0) {
      const result = [];
      for (let i = 0; i < sentences; i++) {
        const sentenceLength = Math.floor(Math.random() * 10) + 8;
        result.push(generateSentence(sentenceLength));
      }
      return result.join(' ');
    } else if (words > 0) {
      const result = [];
      for (let i = 0; i < words; i++) {
        const randomWord =
          loremWords[Math.floor(Math.random() * loremWords.length)];
        result.push(randomWord);
      }
      return result.join(' ');
    }

    return '';
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  function generateFromInput(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { paragraph, sentence, words } = values;
    const loremIpsum = generateLoremIpsum({
      paragraphs: +paragraph || 2,
      sentences: +sentence || 5,
      words: +words || 100,
    });
    if (loremIpsum) {
      setLorems(loremIpsum);
    }
  }

  return (
    <div className="space-y-3">
      <h3 className="text-2xl font-semibold tracking-tight text-center mb-2">
        Generate Lorem Ipsum
      </h3>

      <form onSubmit={generateFromInput} className="gap-3 flex flex-col">
        <div className="flex items-center gap-3">
          <Input
            type="number"
            placeholder="paragraph"
            value={values.paragraph}
            onChange={onChangeHandler}
            name="paragraph"
            id="paragraph"
          />
          <Input
            type="number"
            placeholder="sentence"
            value={values.sentence}
            onChange={onChangeHandler}
            name="sentence"
            id="sentence"
          />
          <Input
            type="number"
            placeholder="words"
            value={values.words}
            onChange={onChangeHandler}
            name="words"
            id="words"
          />
        </div>
        <Button type="submit" className="w-24" size={'sm'}>
          Generate
        </Button>
      </form>
      <div className="relative overflow-y-scroll max-h-80 dark:bg-sidebar bg-sidebar-accent p-2 rounded">
        <button
          className="absolute top-2 right-2"
          onClick={() => navigator.clipboard.writeText(lorems)}
        >
          <Copy />
        </button>
        <p className="p-2 text-justify mt-2">
          {lorems.split('\n\n').map((paragraph, index) => (
            <span key={index}>
              {paragraph}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default LoremIpsumGenerator;
