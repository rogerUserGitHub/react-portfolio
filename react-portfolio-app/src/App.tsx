import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './common/components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/homepage/Home';
import Projects from './views/projects/Projects';
import Contact from './views/contact/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
