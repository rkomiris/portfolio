import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="impact">
          <Impact />
        </section>
        <section id="case-studies">
          <Experience />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="capabilities">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
