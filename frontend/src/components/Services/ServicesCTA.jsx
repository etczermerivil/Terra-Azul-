import './ServicesCTA.css';

const ServicesCTA = () => {
  return (
    <section className="cta-container services-cta-section">
      <div className="cta-text">
        <h2 className="cta-title">
          Consult With Us
        </h2>
        <p>
          Need guidance on water treatment and purification services? Our experts are here to help. Contact us today to explore tailored solutions for your unique challenges.
        </p>
      </div>
      <a href="/contact" className="cta-button-services">Contact Us</a>
    </section>
  );
};

export default ServicesCTA;
