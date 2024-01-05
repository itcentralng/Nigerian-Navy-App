// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Objectives from './pages/Objectives';
import DefaultCheif from './pages/DefaultCheif';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultCheif />} />
        <Route path="/about" element={<About />} />
        <Route path="/Objectives" element={<Objectives />} />
        <Route path="/default" element={<DefaultCheif />} />
      </Routes>
    </Router>
  );
};

export default App;
