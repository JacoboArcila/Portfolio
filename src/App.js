import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import { ThemeProvider } from 'styled-components';
import {Theme} from './Theme';
/* -------pages--------- */
import Home from './pages/Home';
import Projects from './pages/Projects';

import Nav from "./components/Nav/Nav";
import Footer from './components/Foooter/Footer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Nav />
        <Routes>
          <Route path='/portfolio' element={<Home />} />
          <Route path='/portfolio/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
