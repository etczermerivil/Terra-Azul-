import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './ProvenTrackRecord.css';

const ProvenTrackRecord = () => {
  const categories = [
    {
      title: 'Environmental',
      image: '/Images/environmental/14.jpg',
      description:
        'Our company has a proven track record of working on environmental projects, ranging from restoring water quality in recreational areas to enhancing aquatic ecosystems. We focus on sustainable solutions to preserve and rejuvenate natural environments for future generations.',
      color: '#f9c74f', // Example color
    },
    {
      title: 'Treatment',
      image: '/Images/treatment/9.jpg',
      description:
        'We specialize in water treatment projects, addressing challenges in stormwater discharge, wastewater management, and pollution mitigation. Our innovative methods ensure compliance with environmental standards while prioritizing efficiency and sustainability.',
      color: '#90be6d', // Example color
    },
    {
      title: 'Agriculture',
      image: '/Images/agriculture/1.jpg',
      description:
        'In agriculture, we provide solutions to enhance water quality and productivity in farming and aquaculture. From shrimp ponds to hydroponic systems, our expertise supports sustainable practices and resource optimization.',
      color: '#577590', // Example color
    },
  ];

  return (
    <section className="proven-track-record">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="horizontal-swiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="category-slide">
            <div className="slide-content">
              <div className="text-box">
                <h3>{category.title}</h3>
                <p>{category.description}</p> {/* Use the description field */}
              </div>
              <div className="image-box">
                <img src={category.image} alt={`${category.title}`} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProvenTrackRecord;
