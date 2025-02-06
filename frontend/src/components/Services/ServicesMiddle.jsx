import './ServicesMiddle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faLeaf, faWifi, faHandshake } from '@fortawesome/free-solid-svg-icons';

const ServicesMiddle = () => {
  return (
    <section className="services-middle-section">
      <div className="services-header">
      <h2 className="services-middle-header">Comprehensive Services</h2>

        <p>
        We provide tailored consulting and advanced solutions to address your unique water purification challenges. Our services include cutting-edge technology, innovative solutions, and reliable maintenance to meet your needs efficiently and sustainably. For added flexibility, our solar-powered trailers enable off-grid water treatment, making it easier to tackle purification projects in remote locations. Check below to see if our services meet your needs.
        </p>
      </div>

      <div className="services-grid">
  {/* Top Left Box */}
{/* Top Left Box */}
<div className="service-box service-left-box">
  <div className="icon-container">
    <FontAwesomeIcon icon={faWater} style={{ color: 'teal' }} />
  </div>
  <div className="content-container">
    <h3>Municipal Water Management</h3>
    <ul>
    <li>Drinking water purification for municipalities and private industries.</li>
    <li>Stormwater and wastewater treatment solutions.</li>
    <li>Potable water solutions for urban and rural areas.</li>
    <li>Bacteria testing to ensure safe and clean drinking water.</li>
    <li>Industrial runoff treatment to ensure compliance with regulations.</li>
    </ul>
  </div>
</div>

{/* Top Right Box */}
<div className="service-box service-right-box">
  <div className="icon-container">
    <FontAwesomeIcon icon={faLeaf} style={{ color: 'green' }} />
  </div>
  <div className="content-container">
    <h3>Environmental Services</h3>
    <ul>
    <li>Rehabilitation of lakes, rivers, and reservoirs.</li>
    <li>Wild habitat restoration for healthier ecosystems.</li>
    <li>Algae bloom (HAB) control to improve water clarity and balance.</li>
    <li>Environmental projects to restore degraded ecosystems.</li>
    <li>Maintaining recreational reservoirs for sustainable use.</li>
    </ul>
  </div>
</div>

</div>

<div className="services-grid">
  {/* Bottom Left Box */}
  <div className="service-box service-bottom-left-box">
    <div className="icon-container">
      <FontAwesomeIcon icon={faWifi} style={{ color: '#3659c0' }} />
    </div>
    <div className="content-container">
      <h3>Real-Time Monitoring</h3>
      <p>Our real-time and monthly services include:</p>
      <ul>
        <li>Offsite monitoring via remote sensors.</li>
        <li>Packaged with long-term warranties.</li>
        <li>Scalable service contracts for monthly onsite visits.</li>
        <li>Capable of pairing with other devices and solutions.</li>
      </ul>
    </div>
  </div>

  {/* Bottom Right Box */}
  <div className="service-box service-bottom-right-box">
    <div className="icon-container">
      <FontAwesomeIcon icon={faHandshake} style={{ color: 'grey' }} />
    </div>
    <div className="content-container">
      <h3>Equipment Leasing</h3>
      <p>Reduce paperwork and liability with:</p>
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
  );
};

export default ServicesMiddle;
