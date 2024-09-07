import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetailRelay from './pages/ProjectDetailRelay';
import WIP from './pages/WIP';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project/portfolio-2024" element={<WIP />} />
        <Route path="/project/:projectName" element={<ProjectDetailRelay />} />
      </Routes>
    </Router>
  );
};

export default App;