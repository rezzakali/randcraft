import GradientColorGenerate from '@/pages/gradient-color-generate';
import Lorem from '@/pages/lorem';
import RandomDataGenerate from '@/pages/random-data-generate';
import RandomIdGenerate from '@/pages/random-id-generate';
import Skeletons from '@/pages/skeletons';
import { Route, Routes } from 'react-router-dom';
import Index from './components/layout';
import { ThemeProvider } from './components/theme-provider';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Index>
        <Routes>
          <Route path="/" element={<Lorem />} />
          <Route path="/gradient-color" element={<GradientColorGenerate />} />
          <Route path="/random-data" element={<RandomDataGenerate />} />
          <Route path="/random-id" element={<RandomIdGenerate />} />
          <Route path="/skeletons" element={<Skeletons />} />
        </Routes>
      </Index>
    </ThemeProvider>
  );
};

export default App;
