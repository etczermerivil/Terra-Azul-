import './ConclusionCTASection.css';

const ConclusionCTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-section-container">
        <h2 className="cta-section-title">
          Innovators Welcome : Join Us
        </h2>
        <p className="cta-section-description">
          Become an investor today and join us in revolutionizing water treatment technology,<br />
          driving innovation, and creating a sustainable future together.
        </p>
        <div className="cta-section-form-group">
          <input type="text" placeholder="Your Name" className="cta-section-input-field" />
          <input type="email" placeholder="Your Email" className="cta-section-input-field" />
        </div>
        <div className="cta-section-button-group">
          <button className="cta-section-button">Partner With Us</button>
        </div>
      </div>
    </section>
  );
};

export default ConclusionCTASection;
