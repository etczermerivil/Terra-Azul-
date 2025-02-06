
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
      <div className="hero-content">
        <h1>Terra Azul Tech</h1>
        {/* New container for paragraph */}
        <div className="hero-subcontent">
          {/* <p>Providing 20 years of sustainable water treatment and rejuvenation.</p> */}
          <p>Shaping the future of water treatment with renewable energy.</p>
        </div>
        {/* New container for button */}
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
