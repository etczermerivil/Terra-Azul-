
import './IntroAllotropesSection.css';

const IntroAllotropesSection = () => {
  return (
    <section className="container box">
      <h2 className="section-title">1. Introduction to Oxygen Allotropes</h2>
      <div className="section-two-column">
        <div className="section-text">
          <p>
            Oxygen exists in multiple forms called allotropes (e.g., O₂, O₃).
            Each form has distinct properties and uses—from breathing to water
            purification and air treatment.
          </p>
        </div>
        <div className="section-img">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Allotropes Placeholder"
            className="img-rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroAllotropesSection;
