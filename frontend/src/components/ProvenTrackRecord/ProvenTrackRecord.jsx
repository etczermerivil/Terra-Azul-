import './ProvenTrackRecord.css';

const ProvenTrackRecord = () => {
  const categories = [
    {
      title: 'Agriculture',
      image: '/Images/agriculture/1.jpg',
      description: 'Boost crop yields with sustainable irrigation and soil solutions.',
    },
    {
      title: 'Aquaculture',
      image: '/Images/Landing/2.jpg',
      description: 'Improve water quality for healthier fish and shrimp farms.',
    },
    {
      title: 'Reservoir',
      image: '/Images/Landing/3.jpg',
      description: 'Maintain reservoir health by reducing sediment and algae.',
    },
    {
      title: 'Algae Blooms',
      image: '/Images/Landing/9.jpg',
      description: 'Control harmful algae blooms and restore water clarity.',
    },
    {
      title: 'Wastewater',
      image: '/Images/Landing/8.jpg',
      description: 'Treat wastewater to remove contaminants and enable recycling.',
    },
    {
      title: 'Mining',
      image: '/Images/Landing/6.jpg',
      description: 'Ensure clean water discharge and compliance in mining.',
    },
    {
      title: 'Bottled Water',
      image: '/Images/Landing/5.jpg',
      description: 'Deliver pure, safe water for the bottled water industry.',
    },
    {
      title: 'Gas and Oil',
      image: '/Images/Landing/7.jpg',
      description: 'Remove pollutants from produced water in gas and oil.',
    },
  ];


  return (
    <section className="proven-track-record">
      <div className="proven-track">
        <h2 className="proven-header">A Track Record of Success</h2>
        <p className="proven-paragraph">
          We provide tailored water treatment solutions for a wide range of environments and needs, ensuring effective and sustainable outcomes. <strong>Hover</strong> over each photo to explore some of our services below!
        </p>

        {/* Category Grid */}
        <div className="proven-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div
                className="category-image"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="image-overlay">
                  <h3 className="overlay-title">{category.title}</h3>
                  <p className="overlay-description">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenTrackRecord;
