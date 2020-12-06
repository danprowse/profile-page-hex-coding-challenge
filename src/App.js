import React from 'react';
import Userinfo from './components/Userinfo'
import Skills from './components/skills/Skills'
import Highlights from './components/Highlights'
import Suitability from './components/Suitability'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Userinfo />
      <Skills />
      <Highlights />
      <Suitability />
      <Footer />
    </div>
  );
}

export default App;
