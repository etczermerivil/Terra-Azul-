
import './ExploreMoreSection.css';

const ExploreMoreSection = () => {
  return (
    <section className="explore-more-section">
      <h2>Explore More</h2>
      <p>
        Learn about our mission, innovative technology, and ongoing projects. Connect with us to make a difference.
      </p>
      <div className="button-group">
        <a href="/about">
          <button>About Us</button>
        </a>
        <a href="/contact">
          <button>Contact Us</button>
        </a>
      </div>
    </section>
  );
};

export default ExploreMoreSection;
