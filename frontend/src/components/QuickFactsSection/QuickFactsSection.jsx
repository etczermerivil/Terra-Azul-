import { useEffect, useState, useRef } from 'react';
import './QuickFactsSection.css';

const AnimatedCounter = ({ targetNumber, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef();

  const formatNumber = (num) => {
    if (num === 80) return '80%';
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
    if (num >= 1000000) {
      if (num < 100000000) return (num / 1000000).toFixed(1) + 'M';
      return Math.floor(num / 1000000) + 'M';
    }
    if (num >= 1000) return Math.floor(num / 1000) + 'k';
    return num;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = counterRef.current; // Copy the ref value to a local variable
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef); // Use the local variable here
    };
  }, []);


  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = targetNumber / (duration / 50);

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          start = targetNumber;
          clearInterval(timer);
        }
        setCount(start);
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isVisible, targetNumber]);

  // const maxWidth = `${formatNumber(targetNumber).length}ch`;

  return (
    <div ref={counterRef} className="counter">
      <h2 className="counter-number">{formatNumber(count)}</h2>
      <p className="counter-label">{label}</p>
    </div>
  );
};

const QuickFactsSection = () => {
  return (
    <section className="quick-facts-section">

      {/* Title */}
      <div className="section-title">
        <h2>The Water Crisis in Numbers</h2>
      </div>

      {/* Animated Counters */}
      <div className="counters-container">
        <AnimatedCounter targetNumber={2200000000} label="People without safe drinking water" />
        <AnimatedCounter targetNumber={4000000000} label="People facing water scarcity annually" />
        <AnimatedCounter targetNumber={1800000} label="Annual deaths caused by unsafe water" />
        <AnimatedCounter targetNumber={80} label="Untreated wastewater worldwide (%)" />
      </div>

      {/* Problems and Solutions */}
      <div className="info-container">
        <div className="problems">
          <h3>The Problem</h3>
          <ul>
            <li>Significant reduction in lifespans of exposed living beings.</li>
            <li>Pandemics and droughts are more devastating, spreading quickly and completely.</li>
            <li>
              Until now, the only available options to treat this water have relied on expensive chemicals, dilution,
              filtration, and reverse osmosis.
            </li>
          </ul>
        </div>
        <div className="solutions">
          <h3>The Solution</h3>
          <p>
            Clean water is essential for life, yet billions lack access to it. Addressing this crisis requires innovative and sustainable solutions to remove contaminants and rejuvenate water systems worldwide.
          </p>

          <p>
            The journey toward clean water begins with scalable, forward-thinking solutions that benefit communities and the environment alike.
          </p>

          {/* <p>
            By energizing oxygen in states beyond ozone, we bind to harmful compounds and elements, removing them from
            water efficiently and sustainably.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default QuickFactsSection;
