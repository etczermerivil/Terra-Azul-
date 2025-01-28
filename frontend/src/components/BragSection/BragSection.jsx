import './BragSection.css';

const BragSection = () => {
  const items = [
    { title: 'Fully Connected', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Strategy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Management', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Financial', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Secure', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <section className="brag">
      <div className="brag-section">
        <div className="brag-header">
          <h2>Meet The Team</h2>
          <p className="brag-paragraph">
            The Terra Azul Tech team is a synergistic blend of passion, innovation, and dedication. Backed by two decades of
            pioneering work in sustainable technology, our researchers, scientists, and field experts never cease their quest
            for excellence in crafting efficient, eco-friendly water rejuvenation solutions.
          </p>
        </div>
        <div className="brag-grid">
          {items.map((item, index) => (
            <div key={index} className="brag-item">
              <div className="brag-image-placeholder"></div> {/* Placeholder for image */}
              <div className="brag-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default BragSection;
