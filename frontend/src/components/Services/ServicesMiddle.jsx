import './ServicesMiddle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCogs, faWifi, faHandshake } from '@fortawesome/free-solid-svg-icons';

const ServicesMiddle = () => {
  return (
    <section className="services-middle-section">
      <div className="services-header">
        <h2>Comprehensive Services</h2>
        <p>
          We provide tailored consulting and advanced solutions to address your unique water purification challenges. Our services include cutting-edge technology, innovative solutions, and reliable maintenance to meet your needs efficiently and sustainably. Check below to see if our services meet your needs.
        </p>
      </div>

      <div className="services-grid">
        {/* Top Left Box */}
        <div className="service-box service-left-box">
          <h3>
            <FontAwesomeIcon
              icon={faLightbulb}
              style={{ color: 'orange', marginRight: '1rem' }}
            />
            Advanced Technology
          </h3>
          <ul>
            <li>Produces 350% more ozone gas, lasting 450% longer.</li>
            <li>Prevents ozone loss for maximum cleaning power and efficiency.</li>
            <li>Compliant with the Clean Water Act.</li>
            <li>Improves water quality while fostering a healthier planet.</li>
          </ul>
        </div>

        {/* Top Right Box */}
        <div className="service-box service-right-box">
          <h3>
            <FontAwesomeIcon
              icon={faCogs}
              style={{ color: 'grey', marginRight: '1rem' }}
            />
            Sustainable Innovations
          </h3>
          <ul>
            <li>Scalable and sustainable solutions.</li>
            <li>Long-term warranties included.</li>
            <li>Remote monitoring and real-time maintenance.</li>
            <li>Serving municipalities and enterprises globally.</li>
          </ul>
        </div>
      </div>

      <div className="services-grid">
        {/* Bottom Left Box */}
        <div className="service-box service-bottom-left-box">
          <h3>
            <FontAwesomeIcon
              icon={faWifi}
              style={{ color: '#3659c0', marginRight: '1rem' }}
            />
            Real-Time Monitoring
          </h3>
          <p>Our real-time and monthly services include:</p>
          <ul>
            <li>Offsite monitoring via remote sensors.</li>
            <li>Packaged with long-term warranties.</li>
            <li>Scalable service contracts for monthly onsite visits.</li>
            <li>Capable of pairing with other devices and solutions.</li>
          </ul>
        </div>

        {/* Bottom Right Box */}
        <div className="service-box service-bottom-right-box">
          <h3>
            <FontAwesomeIcon
              icon={faHandshake}
              style={{ color: 'green', marginRight: '1rem' }}
            />
            Equipment Leasing
          </h3>
          <p>Reduce paperwork and liability with:</p>
          <ul>
            <li>Site-specific contracts for 3–5 years.</li>
            <li>Access to up-to-date parts and service.</li>
            <li>Maintenance bundled into one simple plan.</li>
            <li>Low-cost options for municipalities and enterprises.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesMiddle;
