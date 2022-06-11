import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import GlobalStyles from './globalStyles';

/* -------pages--------- */
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
