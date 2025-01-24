
import './ExploreMoreSection.css';

const ExploreMoreSection = () => {
  return (
    <section className="explore-more-section">
      <h2>Innovators Welcome :   Join Us</h2>
      <p>
        Become an investor today and join us in revolutionizing water treatment technology,<br />
        driving innovation, and creating a sustainable future together.
      </p>

      <div className="button-group">
        <a href="/about">
          <button>About Us</button>
        </a>
        <a href="/contact">
          <button>Partner with Us</button>
        </a>
      </div>
    </section>
  );
};

export default ExploreMoreSection;
