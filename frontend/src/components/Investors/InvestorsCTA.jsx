import './InvestorsCTA.css';

const InvestorsCTA = () => {
  return (
    <section className="investors-section">
      <div className="investors-container">
        <h2 className="investors-header">Partner With Us: Invest Today</h2>
        <p className="investors-description">
          Become an investor today and join us in revolutionizing water treatment technology,
          <br />
          driving innovation, and creating a sustainable future together.
        </p>
        <div className="investors-form-group">
          <input
            type="text"
            placeholder="Your Name"
            className="investors-input-field"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="investors-input-field"
          />
        </div>
        <div className="investors-button-group">
          <button className="investors-button">Join Our Mission</button>
        </div>
      </div>
    </section>
  );
};

export default InvestorsCTA;
