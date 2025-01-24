import './ProvenTrackRecord.css';

const ProvenTrackRecord = () => {
  const categories = [
    {
      title: 'Agriculture',
      image: '/Images/agriculture/1.jpg',
      description:
        'In agriculture, we provide solutions to enhance water quality and productivity in farming and aquaculture. From shrimp ponds to hydroponic systems, our expertise supports sustainable practices and resource optimization.',
    },
    {
      title: 'Environmental',
      image: '/Images/environmental/5.jpg',
      description:
        'Our company has a proven track record of working on environmental projects, ranging from restoring water quality in recreational areas to enhancing aquatic ecosystems. We focus on sustainable solutions to preserve and rejuvenate natural environments for future generations.',
    },
    {
      title: 'Treatment',
      image: '/Images/treatment/9.jpg',
      description:
        'We specialize in water treatment projects, addressing challenges in stormwater discharge, wastewater management, and pollution mitigation. Our innovative methods ensure compliance with environmental standards while prioritizing efficiency and sustainability.',
    },
  ];

  return (
    <section className="proven-track-record">
      <div className="proven-track">
      <h2 className="proven-header">A Track Record of Success</h2>
      <div className="proven-intro">
        <p className="proven-paragraph">
        With over 14 successful water projects spanning city parks, lakes, ponds, hotels, agriculture, and clubs, we deliver innovative solutions that enhance agriculture, restore ecosystems, and solve complex water treatment challenges worldwide.
        </p>
      </div>


      {/* Category Sections */}
      <div className="proven-categories">
        {categories.map((category, index) => (
          <div key={index} className="category-section">
            <div
              className="category-image"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="image-overlay">
                <h3 className="overlay-title">{category.title}</h3>
              </div>
            </div>
            <div className="category-text">
              <p>{category.description}</p>
            </div>
          </div>
        ))}
      </div>

            {/* Client List Section */}
      {/* <div className="proven-client-container">
        <div className="proven-client-list">
          <ul>
            <li>Shrimp Pond Testing (Sinaloa, Mexico)</li>
            <li>Salton Sea Wastewater (Salton City, CA)</li>
            <li>North Creek, Dana Point (Doheny State Park)</li>
            <li>Lindero Creek (Agoura Hills)</li>
            <li>Del Mar Thoroughbred Club</li>
            <li>Encinitas Ranch Golf Course</li>
            <li>Manchester Wastewater (City of Encinitas)</li>
            <li>Aviara Golf Club – Hole 16 Pond (Carlsbad)</li>
            <li>Sundial Nurseries Hydroponics (San Marcos)</li>
            <li>Barona Resort & Casino (Barona Rancheria)</li>
            <li>Great Park Reflection Ponds (City of Irvine)</li>
            <li>Discovery Lake (City of San Marcos)</li>
            <li>EDCO, Stormwater Discharge</li>
            <li>Whiteleg Shrimp Pond Testing (Vietnam)</li>
          </ul>
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default ProvenTrackRecord;
