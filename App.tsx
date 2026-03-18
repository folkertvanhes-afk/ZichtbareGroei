import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FlowEvent from './pages/FlowEvent';
import AboutMe from './pages/AboutMe';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flow" element={<FlowEvent />} />
        <Route path="/over-mij" element={<AboutMe />} />
      </Routes>
      <WhatsAppButton />
    </>
  );
};

export default App;