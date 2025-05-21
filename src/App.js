import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications'; // ✅ New
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'certifications': return <Certifications />; // ✅ New
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      {renderSection()}
    </div>
  );
}

export default App;
