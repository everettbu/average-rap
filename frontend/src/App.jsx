import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Albums from './pages/Albums';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/albums" element={<Albums />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
