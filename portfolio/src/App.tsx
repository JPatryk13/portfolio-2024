import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetailRelay from './pages/ProjectDetailRelay';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectName" element={<ProjectDetailRelay />} />
      </Routes>
    </Router>
  );
};

export default App;