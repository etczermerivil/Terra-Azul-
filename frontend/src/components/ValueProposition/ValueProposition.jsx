import { useEffect } from 'react';
import './ValueProposition.css';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const ValueProposition = () => {
  useEffect(() => {
    // Initialize Plyr for the iframe in the right-box
    const player = new Plyr('.right-box iframe', {
      controls: ['play', 'progress', 'current-time', 'fullscreen'], // Customize controls
      settings: ['quality', 'speed'], // Optional settings
    });

    // Optional: Cleanup Plyr instance on component unmount
    return () => {
      player.destroy();
    };
  }, []);

  return (
    <section className="value-proposition-section">
      {/* Header */}
      <div className="section-header">
        <h2>Where We Come In</h2>
      </div>

      {/* Box Container */}
      <div className="box-container">
        {/* Left Box */}
        <div className="left-box">

          <h3>20 years of experience</h3>

          <p>
            Over the past 20 years, we’ve developed, tested, patented, and deployed a new technology that relies on oxygen to purify water more completely, faster, and at substantially less expense than any other technology currently available in the market.
          </p>

          <p>
            With small amounts of power, we have found a way to energize oxygen in states beyond ozone, binding to harmful compounds and elements, removing them from water efficiently and at lower cost.
          </p>
        </div>

        {/* Right Box */}
        <div className="right-box">
          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/sEaKrsNeLfQ?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&controls=1"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        </div>
      </div>
    </section>
  );

};

export default ValueProposition;
