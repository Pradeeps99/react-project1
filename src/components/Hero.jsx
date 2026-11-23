
import heroImage from '../assets/hero.png';

function Hero() {
  return (
    <section className="hero-section">
      <img
        src={heroImage}
        alt="SportX cyclist banner"
        className="hero-banner"
      />
    </section>
  );
}

export default Hero;
