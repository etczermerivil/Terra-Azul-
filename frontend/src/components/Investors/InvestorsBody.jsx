import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faChartPie, faWallet, faInfinity, faTasks, faBuilding, faGlobe, faFlagUsa,  faDraftingCompass, faShieldAlt, faPiggyBank  } from '@fortawesome/free-solid-svg-icons';



import './InvestorsBody.css';

const InvestorsBody = () => {
  return (
    <section className="investors-body">

<div className="summary-box-invest">
  <h2 className="middle-header-invest">Need a Place to Grow Your Savings?</h2>
  <p>
    The water treatment market is a vast and ever-expanding opportunity. With enterprises like municipalities and industrial sectors facing increasing regulations, the demand for innovative and scalable water treatment solutions continues to rise.
  </p>
  <p>
    Discover why this market offers tremendous potential for growth and investment, and how you can be part of this transformative journey.
  </p>
</div>


<div className="market-opportunity-wrapper">
  <div className="market-opportunity-container">
    {/* Title and Intro Section */}
    <div className="market-opportunity-header">
      {/* Left: Title and Intro */}
      <div className="market-opportunity-intro">
        <h2 className="market-opportunity-title">
          {/* <FontAwesomeIcon icon={faChartLine} style={{ marginRight: '10px', color: '#3659c0' }} /> */}
          Market Opportunity
        </h2>

      </div>
      {/* Right: Placeholder for Image */}
      <div className="market-opportunity-image-placeholder">
        {/* Empty box for image */}
      </div>
      <p className="market-opportunity-description">
          Market growth in water treatment is accelerating due to global demand for sustainable solutions. Increasing
          regulations, climate challenges, and rising populations are fueling innovation and investment in this vital
          sector. Below, we highlight four key drivers of this transformative growth.
        </p>
    </div>

{/* Four Key Drivers */}
<div className="market-opportunity-drivers">
  <div className="market-opportunity-box">
    <div className="icon-container">
      <FontAwesomeIcon icon={faInfinity} style={{ color: '#890085', fontSize: '40px' }} />
    </div>
    <div className="content-container">
      <h3 className="market-opportunity-header">Endless Market</h3>
      <div className="underline"></div>
      <p>
        The need for water treatment spans across industries and geographies, with no limit to the potential
        applications. From agricultural irrigation to industrial processing and municipal utilities, water is
        essential everywhere. As water scarcity and pollution grow, the opportunities for innovative treatment
        solutions are truly limitless.
      </p>
    </div>
  </div>
  <div className="market-opportunity-box">
    <div className="icon-container">
      <FontAwesomeIcon icon={faBuilding} style={{ color: '#7E7D80', fontSize: '40px' }} />
    </div>
    <div className="content-container">
      <h3 className="market-opportunity-header">Enterprise Focus</h3>
      <div className="underline"></div>
      <p>
        Municipalities and industrial enterprises are under growing pressure to meet stricter environmental
        regulations at state, national, and international levels. These sectors must adopt scalable and sustainable
        water treatment solutions to stay compliant while addressing operational efficiency, paving the way for
        significant market expansion.
      </p>
    </div>
  </div>
  <div className="market-opportunity-box">
    <div className="icon-container">
      <FontAwesomeIcon icon={faGlobe} style={{ color: '#3659c0', fontSize: '40px' }} />
    </div>
    <div className="content-container">
      <h3 className="market-opportunity-header">Global Growth</h3>
      <div className="underline"></div>
      <p>
        Global water and wastewater treatment is projected to grow to <strong>$956 billion by 2032</strong>, driven by
        rising environmental awareness and the need for clean water in developing and developed nations alike.
      </p>
    </div>
  </div>
  <div className="market-opportunity-box">
    <div className="icon-container">
      <FontAwesomeIcon icon={faFlagUsa} style={{ color: '#C60000', fontSize: '40px' }} />
    </div>
    <div className="content-container">
      <h3 className="market-opportunity-header">U.S. Market</h3>
      <div className="underline"></div>
      <p>
        In the United States alone, the wastewater treatment market is expected to reach <strong>$121 billion by
        2024</strong>, reflecting robust demand for advanced solutions and government-backed initiatives to combat
        water pollution.
      </p>
    </div>
  </div>
</div>

  </div>
</div>





{/* Section 2: How We Plan to Raise Money */}
<div className="funding-plan-section">
  <div className="funding-plan-hero">
    <h1 className="funding-plan-titles">Innovative Ways to Raise Funding</h1>
    <p className="funding-plan-subtitle">
      Explore the strategies we use to build trust, drive collaboration, and secure impactful funding.
    </p>
  </div>

  <div className="funding-plan-grid">
    {/* Engineering Partnerships */}
    <div className="funding-plan-item">
      <div className="funding-plan-icon">
        <FontAwesomeIcon icon={faDraftingCompass} style={{ color: '#5d5d5d', fontSize: '50px' }} />
      </div>
      <div className="funding-plan-content">
        <h3 className="funding-plan-title">Engineering Partnerships</h3>
        <p className="funding-plan-description">
          We boast endorsements from professional city and environmental engineers, who make valuable referrals for new municipal clients and ongoing collaborations.
        </p>
      </div>
    </div>

    {/* Environmental Watchdogs */}
    <div className="funding-plan-item">
      <div className="funding-plan-icon">
        <FontAwesomeIcon icon={faShieldAlt} style={{ color: '#007D00', fontSize: '50px' }} />
      </div>
      <div className="funding-plan-content">
        <h3 className="funding-plan-title">Environmental Watchdogs</h3>
        <p className="funding-plan-description">
          Our team collaborates with local, regional, and national regulators, as well as NGOs, to address critical wastewater issues affecting groundwater resources.
        </p>
      </div>
    </div>

    {/* Demonstrations & Pilot Programs */}
    <div className="funding-plan-item">
      <div className="funding-plan-icon">
        <FontAwesomeIcon icon={faTasks} style={{ color: '#3659c0', fontSize: '50px' }} />
      </div>
      <div className="funding-plan-content">
        <h3 className="funding-plan-title">Demonstrations & Pilot Programs</h3>
        <p className="funding-plan-description">
          We have hosted numerous product demonstrations, showcasing the effectiveness of our technology in real time across Southern California and beyond.
        </p>
      </div>
    </div>

    {/* Funding and Grant Programs */}
    <div className="funding-plan-item">
      <div className="funding-plan-icon">
        <FontAwesomeIcon icon={faPiggyBank} style={{ color: '#D977D2', fontSize: '50px' }} />
      </div>
      <div className="funding-plan-content">
        <h3 className="funding-plan-title">Funding and Grant Programs</h3>
        <p className="funding-plan-description">
          Partnering with Native American and nonprofit organizations, we secure public and private grants and loans to expand access to our innovative offerings.
        </p>
      </div>
    </div>
  </div>
</div>







<div className="requested-financing-wrapper">
  <div className="funding-ask-container-invest">
    <h2 className="section-title">Requested Financing</h2>
    <div className="funding-ask-two-column-invest">
      {/* Column 1: Content */}
      <div>
        <div className="investment-column">
          <div className="investment-item">
            <div className="icon-container">
              <FontAwesomeIcon icon={faUserTie} style={{ fontSize: '75px', color: "#007D00" }} />
            </div>
            <div className="content-container">
              <h3 className="invest-column-title">Founder Investments</h3>
              <ul className="investment-list">
                <li>130k - Robert Stone</li>
                <li>50k - Emma Sakaguchi</li>
                <li>50k - Carol Bedford</li>
              </ul>
            </div>
          </div>
          <div className="investment-item">
            <div className="icon-container">
              <FontAwesomeIcon icon={faChartPie} style={{ fontSize: '75px', color: "#FF9800" }} />
            </div>
            <div className="content-container">
              <h3 className="invest-column-title">Equity Set-Asides</h3>
              <p className="investment-highlight">
                <span>2 million</span> shares, valued at $1 per share.
              </p>
              <p>Total shares: 10 million. Valuation: $10m</p>
            </div>
          </div>
          <div className="investment-item">
            <div className="icon-container">
              <FontAwesomeIcon icon={faWallet} style={{ fontSize: '75px', color: "#A6723A" }} />
            </div>
            <div className="content-container">
              <h3 className="invest-column-title">Use of Funds</h3>
              <ul className="investment-list">
                <li>50k - Cost of Goods Sold (Demo + Sale)</li>
                <li>50k - Professional Team Overhead</li>
                <li>20k - Facility & Office Expenses</li>
                <li>20k - Marketing & Contracting</li>
                <li>10k - Advisors & Contingency</li>
              </ul>
              <p className="investment-flexibility">
                We are <span>flexible</span> and <span>open</span> to alternative terms at similar valuations.
              </p>
            </div>
          </div>
        </div>

      </div>
      {/* Column 2: Empty for Picture */}
      <div className="empty-column"></div>
    </div>
  </div>
</div>




    </section>
  );
};

export default InvestorsBody;
