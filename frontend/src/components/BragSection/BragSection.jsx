import './BragSection.css';

const BragSection = () => {
  const items = [
    { title: 'Robert Stone',
      position: 'CEO & CTO',
      description: 'Inventor, patent-holder, Prior CEO mining company, Oxygen Allotrope Expert',
      image: '/Images/Staff/1.png'
     },
    { title: 'Emma Sakaguchi',
      position: 'COO & Co-Founder',
      description: 'International business, Certified translator, Hino Motors corp trainer',
      image: '/Images/Staff/2.png' },

    { title: 'Christopher Baber',
      position: 'CFO',
      description: '25-yr commercial finance, Real estate professional, VP, PrimeStar Capital',
      image: '/Images/Staff/7.png' },

    { title: 'Nichole Stevenson',
      position: 'CMO',
      description: '20-yr edu policy expert, International humanitarian, Public speaker',
      image: '/Images/Staff/4.png' },

    { title: 'Joe Bonazza',
      position: 'Sales Director',
      description: 'Industrial filter expert, Total Equipment Mun. Mgr., 45-yr engineering expert',
      image: '/Images/Staff/5.png' },

    // { title: 'Tory Walker',
    //   position: 'PE/QSD/QSP',
    //   description: 'Certified Floodplain Manager, Stormwater Quality Expert',
    //   image: '/Images/Staff/6.png' },
  ];


  return (
    <section className="brag">
      <div className="brag-section">
        <div className="brag-header">
          <h2>Meet The Team</h2>
          <p className="brag-paragraph">
          <p>
            We have a passionate team dedicated to restoring water ecosystems. With over 20 years of innovation and real-world expertise, we deliver sustainable solutions that make a difference. Meet the team!
          </p>
</p>
        </div>
        <div className="brag-grid">
          {items.map((item, index) => (
            <div key={index} className="brag-item">
              {/* Replace the placeholder div with an img tag */}
              <div className="brag-image-container">
                <img src={item.image} alt={item.title} className="brag-image" loading="lazy" />
              </div>
              <div className="brag-info">
                <h3>{item.title}</h3>
                <h4>{item.position}</h4>
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
