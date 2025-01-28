import { useState } from 'react';
import './MiddleContentSection.css';

const steps = [
  {
    id: 1,
    title: 'Introduction to Oxygen Allotropes',
    text: 'Oxygen exists in multiple forms called allotropes, like O₂ and O₃. O₂ (dioxygen) is the air we breathe, while O₃ (ozone) protects us from harmful UV rays. These forms have unique properties and uses, such as cleaning water and improving air quality.',
  },
  {
    id: 2,
    title: 'Significance and Challenges of Allotrope Generation',
    text: 'Oxygen allotropes offer exciting possibilities but are hard to produce efficiently. Traditional methods require extreme conditions and costly catalysts. Our technology simplifies this process, making it accessible and practical.',
  },
  {
    id: 3,
    title: 'The Fused Quartz Crystal Tube',
    text: 'A fused quartz crystal tube provides stability and ensures no contaminants leach into the oxygen stream. It maintains the integrity and desired properties of the produced allotropes.',
  },
  {
    id: 4,
    title: 'Corona Reaction Plates (Sparking Change)',
    text: 'Strategically placed plates generate a high-voltage corona discharge, breaking apart O₂ molecules into reactive atoms that form new allotropes.',
  },
  {
    id: 5,
    title: 'Double UV Exposure (A Catalyst for Transformation)',
    text: 'Two UV sources positioned along the tube further energize oxygen molecules to form higher-order allotropes, selectively favoring certain configurations.',
  },
  {
    id: 6,
    title: 'Pressure and Cooling (Essential Ingredients)',
    text: 'Controlled pressure and a built-in cooling system stabilize certain allotropes, prevent overheating, and maintain optimal production conditions.',
  },
];

const MiddleContentSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="middle-content">
      <div className="tabs-container">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`tab ${activeStep === step.id ? 'active-tab' : ''}`}
            onClick={() => setActiveStep(step.id)}
          >
            {step.id}
          </div>
        ))}
      </div>
      <div className="step">
        <div className="step-number">{activeStep}</div>
        <div className="step-content">
          <h2 className="step-title">{steps[activeStep - 1].title}</h2>
          <p>{steps[activeStep - 1].text}</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleContentSection;
