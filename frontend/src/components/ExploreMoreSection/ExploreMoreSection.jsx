import './ExploreMoreSection.css';

const ExploreMoreSection = () => {
  return (
    <section className="explore-more-section">
      <div className="explore-more-container">
        <h2>Innovators Welcome : Join Us</h2>
        <p>
          Become an investor today and join us in revolutionizing water treatment technology,<br />
          driving innovation, and creating a sustainable future together.
        </p>
        <div className="form-group">
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="email" placeholder="Your Email" className="input-field" />
        </div>
        <div className="button-group">
          <button>Partner With Us</button>
        </div>
      </div>
    </section>
  );
};

export default ExploreMoreSection;
