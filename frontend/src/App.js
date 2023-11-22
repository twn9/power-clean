import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceExplanation />
      <CustomerReviews />
      <Footer />
    </div>
  );
}

export default App;
