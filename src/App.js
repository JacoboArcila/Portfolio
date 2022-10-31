import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import { ThemeProvider } from 'styled-components';
import {Theme} from './Theme';
/* -------pages--------- */
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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
          <Route path='/portfolio/education' element={<Education />} />
          <Route path='/portfolio/projects' element={<Projects />} />
          <Route path='/portfolio/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
