'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy } from 'lucide-react';
import React, { useState } from 'react';

const LoremIpsumGenerator = () => {
  const [lorems, setLorems] = useState<string>(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse placeat quam, quos maxime ipsa adipisci libero! Accusantium modi quasi esse itaque praesentium, exercitationem, unde dolore nostrum voluptatibus repellat dolorum eos!'
  );

  const [paragraph, setParagraph] = useState('1');
  const [activeTab, setActiveTab] = useState('lorem-ipsum');

  // Function to generate Lorem Ipsum data
  function generateLoremIpsum(paragraphs = 3) {
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
    const result = [];
    for (let i = 0; i < paragraphs; i++) {
      result.push(generateParagraph(Math.floor(Math.random() * 5) + 3)); // Random 3-7 sentences per paragraph
    }
    return result.join('\n\n');
  }

  // Function to generate Pokemon Ipsum data
  function generatePokemonIpsum(paragraphs = 3) {
    const pokemonWords = [
      'pikachu',
      'charmander',
      'bulbasaur',
      'squirtle',
      'jigglypuff',
      'meowth',
      'psyduck',
      'snorlax',
      'eevee',
      'mewtwo',
      'gengar',
      'charizard',
      'lucario',
      'greninja',
      'garchomp',
      'sylveon',
      'incineroar',
      'zoroark',
      'togepi',
      'mudkip',
    ];
    const actions = [
      'uses Thunderbolt',
      'is training hard',
      'is searching for berries',
      'is battling a wild Pokémon',
      'is evolving into its next form',
      'is resting near the river',
      'is exploring a cave',
      'is preparing for a gym battle',
      'is playing with other Pokémon',
      'is learning a new move',
    ];

    const locations = [
      'in the forest',
      'near the mountain',
      'at the Pokémon Center',
      'on the beach',
      'in the tall grass',
      'inside a Pokéball',
      'in the trainer’s bag',
      'at the gym',
      'in the wild',
      'in a hidden cave',
    ];

    // Helper to generate meaningful sentences
    function generateSentence() {
      const pokemon =
        pokemonWords[Math.floor(Math.random() * pokemonWords.length)];
      const action = actions[Math.floor(Math.random() * actions.length)];
      const location = locations[Math.floor(Math.random() * locations.length)];
      return `${pokemon} ${action} ${location}.`;
    }

    // Helper to generate paragraphs
    function generateParagraph(sentenceCount: number) {
      const paragraph = [];
      for (let i = 0; i < sentenceCount; i++) {
        paragraph.push(generateSentence());
      }
      return paragraph.join(' ');
    }

    // Generate the output based on user input
    const result = [];
    for (let i = 0; i < paragraphs; i++) {
      result.push(generateParagraph(Math.floor(Math.random() * 5) + 3)); // Random 3-7 sentences per paragraph
    }
    return result.join('\n\n');
  }

  // Function to generate Samual Ipsum data
  function generateSamualIpsum(paragraphs = 3) {
    const samualWords = [
      'samual',
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
          samualWords[Math.floor(Math.random() * samualWords.length)];
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
    const result = [];
    for (let i = 0; i < paragraphs; i++) {
      result.push(generateParagraph(Math.floor(Math.random() * 5) + 3)); // Random 3-7 sentences per paragraph
    }
    return result.join('\n\n');
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 20) {
      setParagraph(String(20));
    } else {
      setParagraph(e.target.value);
    }
  };

  function generateFromInput(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let generatedText;
    if (activeTab === 'lorem-ipsum') {
      generatedText = generateLoremIpsum(+paragraph || 2);
    } else if (activeTab === 'pokemon-ipsum') {
      generatedText = generatePokemonIpsum(+paragraph || 2);
    } else if (activeTab === 'samual-ipsum') {
      generatedText = generateSamualIpsum(+paragraph || 2);
    }
    if (generatedText) {
      setLorems(generatedText);
    }
  }

  return (
    <div className="space-y-3">
      <div className="rounded shadow-md p-3 border">
        {/* Tabs */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-0 mb-4 rounded-full overflow-hidden border">
          <div
            className={`py-1 text-center cursor-pointer text-sm sm:text-xs flex items-center justify-center border-r ${
              activeTab === 'lorem-ipsum' ? 'bg-blue-500/10' : ''
            }`}
            onClick={() => setActiveTab('lorem-ipsum')}
          >
            Lorem Ipsum
          </div>
          <div
            className={`py-1 text-center cursor-pointer text-sm sm:text-xs flex items-center justify-center border-r ${
              activeTab === 'pokemon-ipsum' ? 'bg-blue-500/10' : ''
            }`}
            onClick={() => setActiveTab('pokemon-ipsum')}
          >
            Pokemon Ipsum
          </div>
          <div
            className={`py-1 text-center cursor-pointer text-sm sm:text-xs flex items-center justify-center ${
              activeTab === 'samual-ipsum' ? 'bg-blue-500/10' : ''
            }`}
            onClick={() => setActiveTab('samual-ipsum')}
          >
            Samual Ipsum
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={generateFromInput}
          className="gap-3 flex flex-wrap items-center justify-between"
        >
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <p className="text-sm">Paragraphs</p>
            <Input
              type="text"
              value={paragraph}
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="paragraph"
              id="paragraph"
              className="w-12 text-sm"
              maxLength={2}
              minLength={1}
            />

            <Input
              type="range"
              className="w-full sm:w-36 cursor-pointer"
              value={paragraph}
              min={1}
              max={20}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <Button
            type="submit"
            className="w-full sm:w-24 mt-3 sm:mt-0"
            size={'sm'}
          >
            Generate
          </Button>
        </form>
      </div>

      {/* Generated Output */}
      <div className="relative overflow-y-scroll max-h-80 dark:bg-sidebar bg-sidebar-accent p-2 rounded">
        {lorems.length && (
          <button
            className="absolute top-2 right-2 text-sm"
            onClick={() => navigator.clipboard.writeText(lorems)}
          >
            <Copy />
          </button>
        )}
        <p className="p-2 text-justify mt-2 text-sm">
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
