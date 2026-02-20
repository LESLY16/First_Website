import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
