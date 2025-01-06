import arrowSymbols from './symbols/arrows';
import functionSymbols from './symbols/function-symbols';
import mostUsedSymbols from './symbols/most-used-symbols';
import { punctuationSymbols } from './symbols/punctuation-symbols';
import { specialSymbols } from './symbols/special-symbols';

export interface Data {
  group: string;
  symbols: {
    name: string;
    symbol: string;
    entity: string;
    css: string;
  }[];
}

export type SymbolData = Data[];

export const symbolsData: SymbolData = [
  {
    group: 'Most Used',
    symbols: mostUsedSymbols,
  },
  {
    group: 'Arrows',
    symbols: arrowSymbols,
  },
  {
    group: 'Math and Functions',
    symbols: functionSymbols,
  },
  {
    group: 'Punctuation',
    symbols: punctuationSymbols,
  },
  {
    group: 'Special',
    symbols: specialSymbols,
  },
];
