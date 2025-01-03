import CSSCursors from '@/pages/css-cursors';
import GradientColorGenerate from '@/pages/gradient-color-generate';
import Lorem from '@/pages/lorem-ipsum';
import RandomDataGenerate from '@/pages/random-data-generate';
import RandomIdGenerate from '@/pages/random-id-generate';
import { Route, Routes } from 'react-router-dom';
import Index from './components/layout';
import { ThemeProvider } from './components/theme-provider';
import SymbolsCollection from './pages/symbols-collection';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Index>
        <Routes>
          <Route path="/" element={<Lorem />} />
          <Route path="/gradient-color" element={<GradientColorGenerate />} />
          <Route path="/random-fake-data" element={<RandomDataGenerate />} />
          <Route path="/random-id-generate" element={<RandomIdGenerate />} />
          <Route path="/css-cursors" element={<CSSCursors />} />
          <Route path="/symbols-collection" element={<SymbolsCollection />} />
        </Routes>
      </Index>
    </ThemeProvider>
  );
};

export default App;
