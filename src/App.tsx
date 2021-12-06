import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/global';
import { themeConfig } from './theme/theme';

import { Game, Home, Results } from './routes';

export default function App() {
  return (
    <ThemeProvider theme={themeConfig}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </ThemeProvider>
  );
}
