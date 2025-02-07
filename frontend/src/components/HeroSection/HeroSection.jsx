
import './HeroSection.css';


const HeroSection = () => {

  const scrollToQuickFacts = () => {
    const quickFactsSection = document.getElementById("quick-facts");
    if (quickFactsSection) {
      quickFactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section className="hero-section">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/Videos/5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="hero-content">
        <h1>Terra Azul Tech</h1>
        <div className="hero-subcontent">
          <p>Shaping the future of water treatment with renewable energy.</p>
        </div>
        <div className="hero-button-container">
          <button className="cta-button" onClick={scrollToQuickFacts}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
