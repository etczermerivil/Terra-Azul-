import './ServicesCTA.css';

const ServicesCTA = () => {
  return (
    <section className="join-us-section">
      <div className="join-us-container">
        <h2 className="join-us-header">Innovators Welcome: Join Us</h2>
        <p className="join-us-description">
          Become an investor today and join us in revolutionizing water treatment technology,
          <br />
          driving innovation, and creating a sustainable future together.
        </p>
        <div className="join-us-form-group">
          <input
            type="text"
            placeholder="Your Name"
            className="join-us-input-field"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="join-us-input-field"
          />
        </div>
        <div className="join-us-button-group">
          <button className="join-us-button">Partner With Us</button>
        </div>
      </div>
    </section>
  );

};

export default ServicesCTA;
