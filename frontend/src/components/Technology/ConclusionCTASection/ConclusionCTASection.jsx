import './ConclusionCTASection.css';

const ConclusionCTASection = () => {
  return (
    <section className="cta-container unique-cta-section">
      <div className="cta-text">
        <h2 className='cta-closer'>
          Become An Investor
        </h2>
        <p>
          Ready to enhance your water treatment processes?
        </p>
      </div>
      <a href="/contact" className="cta-button-unique">Contact Us</a>
    </section>
  );
};

export default ConclusionCTASection;
