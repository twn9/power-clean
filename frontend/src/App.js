import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
