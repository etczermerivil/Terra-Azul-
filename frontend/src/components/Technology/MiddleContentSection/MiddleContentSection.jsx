import { useEffect, useRef, useState } from 'react';
import './MiddleContentSection.css';

const MiddleContentSection = () => {
  const steps = [
  {
    id: 1,
    title: 'Understanding Oxygen Allotropes',
    text: 'Oxygen exists in different forms, such as O₂ and O₃, each with unique properties and uses. These forms play a critical role in solutions for water and air treatment.',
    photo: '/Images/Techpage/1.jpg', // Image specific to this step
  },
  {
    id: 2,
    title: 'Engineered Quartz Technology',
    text: 'Advanced quartz crystal technology is used to create a controlled environment for oxygen transformation, ensuring precision and efficiency.',
    photo: '/Images/Techpage/7.jpg', // Image specific to this step
  },
  {
    id: 3,
    title: 'Corona Discharge Innovation',
    text: 'High-voltage corona discharge technology is employed to split oxygen molecules, enabling the creation of multiple oxygen forms.',
    photo: '/Images/Techpage/8.jpg', // Image specific to this step
  },
  {
    id: 4,
    title: 'UV Integration for Oxygen Effects',
    text: 'Ultraviolet (UV) technology is integrated to enhance the creation of specific oxygen forms, improving the generator’s performance.',
    photo: '/Images/Techpage/9.jpg', // Image specific to this step
  },
  {
    id: 5,
    title: 'Secondary UV Enhancement',
    text: 'A second UV process is added to refine and stabilize the desired oxygen forms, enhancing efficiency and effectiveness.',
    photo: '/Images/Techpage/11.jpg', // Image specific to this step
  },
  {
    id: 6,
    title: 'Pressure and Cooling System',
    text: 'Controlled pressure and self-cooling systems maintain stability and support the production of high-quality oxygen forms.',
    photo: '/Images/Techpage/10.jpg', // Image specific to this step
  },
];



  const stepsRef = useRef([]);
  const [inViewStep, setInViewStep] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewStep(Number(entry.target.dataset.id));
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.6,
      }
    );

    Object.values(stepsRef.current).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <section className="middle-content">
      {/* Summary Box */}
      <div className="summary-box">
        <h2 className="middle-header">Our six Step Process</h2>
        {/* <p>
          At Terra Technology, we utilize a six-step process to revolutionize the generation and application of oxygen
          allotropes. Each step is designed to ensure precision, stability, and efficiency in providing cutting-edge
          water treatment solutions.
        </p> */}
      </div>

      {/* Steps */}
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`step ${index === 0 ? 'first-step' : index === steps.length - 1 ? 'last-step' : ''} ${
            index % 2 === 0 ? 'step-left' : 'step-right'
          } ${inViewStep === step.id ? 'in-view' : ''}`}
        >
          <div className="step-number">{step.id}</div>
          <div
            className="step-content"
            ref={(el) => (stepsRef.current[step.id] = el)} // Assign ref only to .step-content
            data-id={step.id}
          >
            <h2 className="step-title">{step.title}</h2>
            <p>{step.text}</p>
          </div>
          <div className="blue-box">
          <img src={step.photo} alt={`Illustration for ${step.title}`} />
          </div> {/* Blue box */}
        </div>
))}


    </section>
  );
};

export default MiddleContentSection;
