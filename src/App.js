import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
