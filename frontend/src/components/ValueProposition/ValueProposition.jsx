import { useEffect } from 'react';
import './ValueProposition.css';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import './Droplet.css';
// import DropletAnimation from './DropletAnimation';
import { scrollEffects } from "../Animation/Animation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCogs, faWifi, faHandshake } from '@fortawesome/free-solid-svg-icons';

const ValueProposition = () => {
  useEffect(() => {
    // Initialize Plyr for the iframe in the right-box
    const player = new Plyr('.right-box iframe', {
      controls: ['play', 'progress', 'current-time', 'fullscreen'], // Customize controls
      settings: ['quality', 'speed'], // Optional settings
    });

    scrollEffects();

    // Optional: Cleanup Plyr instance on component unmount
    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className='sectionMore'>
    <section className="value-proposition-section">

      <div className="section-header">
        <h2>A Smarter Way to Clean Water</h2>
        <p className="quick-p">
          From advanced ozone systems to real-time monitoring, our water treatment solutions prioritize efficiency, sustainability, and global impact. Check out our services below to see how we can help turn water treatment challenges into sustainable solutions.

        </p>


      </div>

   <div className="value-proposition-container">

  {/* First Box */}
  <div className="value-proposition-box ">
    <div className="val-proposition-icon-container">
      <FontAwesomeIcon icon={faLightbulb} style={{ color: "orange" }} />
    </div>
    <div className="content-container">
      <h3>Advanced Technology</h3>
      <ul>
        <li>Produces 350% more ozone gas, lasting 450% longer.</li>
        <li>Prevents ozone loss for maximum cleaning power and efficiency.</li>
        <li>Compliant with the Clean Water Act.</li>
        <li>Improves water quality while fostering a healthier planet.</li>
      </ul>
    </div>
  </div>

  {/* Second Box */}
  <div className="value-proposition-box ">
    <div className="val-proposition-icon-container">
      <FontAwesomeIcon icon={faCogs} style={{ color: "grey" }} />
    </div>
    <div className="content-container">
      <h3>Sustainable Innovations</h3>
      <ul>
        <li>Scalable and sustainable solutions.</li>
        <li>Long-term warranties included.</li>
        <li>Remote monitoring and real-time maintenance.</li>
        <li>Serving municipalities and enterprises globally.</li>
      </ul>
    </div>
  </div>

  {/* Third Box */}
  <div className="value-proposition-box ">
    <div className="val-proposition-icon-container">
      <FontAwesomeIcon icon={faWifi} style={{ color: "#3659c0" }} />
    </div>
    <div className="content-container">
      <h3>Monitoring & Maintenance</h3>
      <p>Our real-time and monthly service to clients:</p>
      <ul>
        <li>Offsite monitoring via remote sensors.</li>
        <li>Packaged with long-term warranties.</li>
        <li>Scalable service contracts for monthly onsite visits.</li>
        <li>Capable of pairing with other devices and solutions.</li>
      </ul>
    </div>
  </div>

  {/* 4th Box */}
  <div className="value-proposition-box ">
    <div className="val-proposition-icon-container">
      <FontAwesomeIcon icon={faHandshake} style={{ color: "green" }} />
    </div>
    <div className="content-container">
      <h3>Equipment Leasing</h3>
      <p>For clients that need options to reduce paperwork and risk:</p>
      <ul>
        <li>Site-specific contracts for 3–5 years.</li>
        <li>Access to up-to-date parts and service.</li>
        <li>Maintenance bundled into one simple plan.</li>
        <li>Low-cost options for municipalities and enterprises.</li>
      </ul>
    </div>
  </div>


</div>

    </section>
    </div>
  );

};

export default ValueProposition;









{/* Header */}
{/* <div className="section-header">
  <h2>How We Make a Difference</h2>
</div> */}




{/* <h2>What Sets Us Apart</h2>
<p>
  At Terra Azul Tech, we’ve spent over two decades developing and refining our patented, solar-powered ozone generator, a groundbreaking technology that purifies water more efficiently and sustainably than ever before. Harnessing solar energy, our compact system produces 350% more ozone gas, lasting 450% longer than conventional methods, as confirmed by independent university research.
</p>
<p>
  By energizing oxygen in states beyond ozone, our innovative mechanism removes harmful compounds and elements from water with unmatched efficiency, addressing pollutant loads of all sizes. Successfully tested in compliance with the Clean Water Act, our system is designed for scalability, restoring water quality while fostering a healthier planet. With 15 years of on-site data and a commitment to sustainability, we’re revolutionizing wastewater management on a global scale.
</p> */}








       {/* Droplet Container */}
{/* <div className="middle-container">

<div className="droplet"
    dangerouslySetInnerHTML={{
      __html: `
      <svg id="Droplet" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 -16 286.4 389.9" xml:space="preserve">
        <defs>
        <linearGradient id="Droplet-shadowGradient" fill-opacity="0.25" gradientUnits="userSpaceOnUse" x1="67.4893" y1="359.2395" x2="218.987" y2="359.2395">
          <stop offset="0" style="stop-color:#005DFF;stop-opacity:0.15"/>
          <stop offset="0.4364" style="stop-color:#0068FF;stop-opacity:8.453682e-02"/>
          <stop offset="1" style="stop-color:#0072FF;stop-opacity:0"/>
        </linearGradient>
        <linearGradient id="Droplet-topGradient" gradientUnits="userSpaceOnUse" x1="28.0693" y1="157.3193" x2="258.1405" y2="157.3193">
          <stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.2"/>
          <stop offset="5.973756e-02" style="stop-color:#FFFFFF;stop-opacity:0.2478"/>
          <stop offset="1" style="stop-color:#FFFFFF"/>
        </linearGradient>
        <linearGradient id="Droplet-lineGradient" gradientUnits="userSpaceOnUse" x1="143.4608" y1="311.1732" x2="143.4608" y2="-9.094947e-13">
          <stop offset="0.2338" style="stop-color:#0072FF"/>
          <stop offset="0.6262" style="stop-color:#00D688"/>
        </linearGradient>
        <linearGradient id="Droplet-bottomGradient" gradientUnits="userSpaceOnUse" x1="143.1049" y1="301.1732" x2="143.1049" y2="83.1643">
          <stop offset="0" style="stop-color:#0072FF;stop-opacity:0.4"/>
          <stop offset="1" style="stop-color:#0072FF;stop-opacity:0"/>
        </linearGradient>
        </defs>
        <style type="text/css">
          .Droplet-shadow{fill:url(#Droplet-shadowGradient);}
          .Droplet-outerDot{fill:#0072FF;}
          .Droplet-line{fill:none;stroke:#0072FF;stroke-width:1.5;stroke-linecap:round;stroke-miterlimit:10;stroke-dasharray:0,5;}
          .Droplet-border{fill:none;stroke:url(#Droplet-lineGradient);stroke-linecap:round;stroke-miterlimit:10;}
          .Droplet-top{fill:url(#Droplet-topGradient);}
          .Droplet-bottom{fill:url(#Droplet-bottomGradient);}
          .Droplet-circle{fill-rule:evenodd;clip-rule:evenodd;fill:#0072FF;}
        </style>
        <g id="Droplet-shadow">
          <ellipse class="Droplet-shadow" cx="143.2" cy="359.2" rx="75.7" ry="14.7"/>
        </g>
        <g id="Droplet-boundingShape">
          <g id="Droplet-backgroundRings">
            <g class="Droplet-background1">
              <path class="Droplet-line" d="M98.7,29.8c7.2-3,24.4-5.1,44.5-5.1c22.6,0,41.5,2.7,46.7,6.3"/>
            </g>
            <g class="Droplet-background2">
              <path class="Droplet-line" d="M50.5,74.6c9.6-8.6,47.5-15,92.7-15c48.5,0,88.6,7.4,94.4,16.9"/>
            </g>
            <g class="Droplet-background3">
              <path class="Droplet-line" d="M11.1,132.8c11-12.2,65.9-21.4,132.1-21.4c69.8,0,127.2,10.3,133.5,23.5"/>
            </g>
            <g class="Droplet-background4">
              <path class="Droplet-line" d="M2.8,201.3c11.6-12.2,70-21.4,140.4-21.4c74.2,0,135.1,10.3,141.8,23.5"/>
            </g>
            <g class="Droplet-background5">
              <path class="Droplet-line" d="M33.7,263.4c10.6-9.3,55.6-16.3,109.5-16.3c57.5,0,104.8,7.9,111.2,18.1"/>
            </g>
          </g>
          <g id="Droplet-shape">
            <path class="Droplet-border" d="M21.7,188.9C21.7,97.7,143.5,0.6,143.5,0.6s121.8,100.2,121.8,188.3c0,67.3-54.5,121.8-121.8,121.8
              S21.7,256.2,21.7,188.9z"/>
            <path class="Droplet-top" d="M28.1,188.7c0-86.2,115-177.9,115-177.9s115,94.7,115,177.9c0,63.5-51.5,115-115,115S28.1,252.3,28.1,188.7z"
              />
            <path class="Droplet-bottom" d="M28.1,188.7c0-86.2,115-177.9,115-177.9s115,94.7,115,177.9c0,63.5-51.5,115-115,115S28.1,252.3,28.1,188.7z"
              />
          </g>
          <g id="Droplet-foregroundRings">
            <g class="Droplet-foreground1">
              <circle class="Droplet-outerDot" cx="191.2" cy="32.9" r=".75" />
              <path class="Droplet-line" d="M187.7,36c-7.2,3-24.4,5.1-44.5,5.1c-22.6,0-41.5-2.7-46.7-6.3"/>
              <circle class="Droplet-outerDot" cx="95.1" cy="32.9" r=".75" />
            </g>
            <g class="Droplet-foreground2">
              <circle class="Droplet-outerDot" cx="238.3" cy="78.8" r=".75"/>
              <path class="Droplet-line" d="M235.9,83.1c-9.6,8.6-47.5,15-92.7,15c-48.5,0-88.6-7.4-94.4-16.9"/>
              <circle class="Droplet-outerDot" cx="48.1" cy="78.8" r=".75"/>
            </g>
            <g class="Droplet-foreground3">
              <circle class="Droplet-outerDot" cx="277.2" cy="137.2" r=".75"/>
              <path class="Droplet-line" d="M275.2,141.7c-11,12.2-65.9,21.4-132.1,21.4c-69.8,0-127.2-10.3-133.5-23.5"/>
              <circle class="Droplet-outerDot" cx="9.1" cy="137.2" r=".75"/>
            </g>
            <g class="Droplet-foreground4">
              <circle class="Droplet-outerDot" cx="285.6" cy="205.8" r=".75"/>
              <path class="Droplet-line" d="M283.5,210.2c-11.6,12.2-70,21.4-140.4,21.4C69,231.7,8.1,221.4,1.4,208.2"/>
              <circle class="Droplet-outerDot" cx="0.8" cy="205.8" r=".75"/>
            </g>
            <g class="Droplet-foreground5">
              <circle class="Droplet-outerDot" cx="255.1" cy="267.6" r=".75"/>
              <path class="Droplet-line" d="M252.7,271.8c-10.6,9.3-55.6,16.3-109.5,16.3c-57.5,0-104.8-7.9-111.2-18.1"/>
              <circle class="Droplet-outerDot" cx="31.3" cy="267.6" r=".75"/>
            </g>
          </g>
          <g id="Dots">
            <circle data-group="1" class="Droplet-circle" cx="143" cy="41.5" r="3"/>
            <circle data-group="3" class="Droplet-circle" cx="143" cy="163.4" r="3"/>
            <circle data-group="2" class="Droplet-circle" cx="143" cy="97.9" r="3"/>
            <circle data-group="4" class="Droplet-circle" cx="143" cy="232" r="3"/>
            <circle data-group="5" class="Droplet-circle" cx="143" cy="288.5" r="3"/>
          </g>
        </g>
      </svg>
            `,
    }}
  />
  <DropletAnimation />
        </div> */}
