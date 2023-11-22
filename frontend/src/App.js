import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav'
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';


export default function App() {
  const [bgColor, setBgColor] = useState('bg-white');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;

      if (position < 500) {
        setBgColor('bg-white');
      } else if (position < 1000) {
        setBgColor('bg-blue-500');
      } else {
        setBgColor('bg-green-500');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${bgColor} transition-colors duration-500 min-h-screen`}>
      <Nav />
      <Hero />
      <About />
      <Reviews />
      <Footer />
      </div>
  );
}
