import Performance from './components/Performance.jsx';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import PromoCards from './components/PromoCards.jsx';
import Products from './components/Products.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
	  <Hero />
	  <PromoCards />
	  <Products />
	  <Performance />
	  <Newsletter />
	  <Footer />
    </div>
  );
}

export default App;