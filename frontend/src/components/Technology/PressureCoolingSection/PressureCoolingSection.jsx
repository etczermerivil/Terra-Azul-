
import './PressureCoolingSection.css';

const PressureCoolingSection = () => {
  return (
    <section className="container box gray-bg">
      <h2 className="section-title">
        6. Pressure &amp; Cooling (Essential Ingredients)
      </h2>
      <div className="section-two-column">
        <div className="section-text">
          <p>
            Controlled pressure and a built-in cooling system maintain optimal
            temperatures for stable allotrope production while preventing damage
            to internal components.
          </p>
        </div>
        <div className="section-img">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Pressure & Cooling Placeholder"
            className="img-rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default PressureCoolingSection;
