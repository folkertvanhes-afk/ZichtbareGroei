import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FlowEvent from './pages/FlowEvent';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flow" element={<FlowEvent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;