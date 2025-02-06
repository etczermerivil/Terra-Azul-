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
        <h2 className="middle-header">A Smarter, Greener Approach</h2>

        {/* <p>
          At Terra Technology, we have developed a cutting-edge six-step process to optimize the generation and application of oxygen allotropes for water treatment.
        </p>
        <p>
          By leveraging state-of-the-art components we are paving the way for significant advancements in environmental sustainability. This groundbreaking offers a more effective and eco-friendly solution for global water treatment challenges.
        </p> */}
        <p>
              At Terra Technology, we harness the power of the sun to revolutionize water treatment. Using ambient air, we convert it into oxygen and process it through our Quantum Electromagnetic Generator, which produces stable multiple oxygen allotropes. This innovative method, powered by renewable solar energy, unlocks new possibilities for efficient water treatment applications that were previously limited by conventional ozone technology.
            </p>
            <p>
              Our ozone system is compact—about the size of a dishwasher—consumes less energy than a bread toaster, and can treat large volumes of water at a fraction of the cost.
            </p>
            <p>
            Learn more about our six-step process and how it drives significant advancements in environmental sustainability.
        </p>
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
