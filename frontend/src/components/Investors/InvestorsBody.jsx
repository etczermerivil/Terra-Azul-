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



{/* Section 1: Market Opportunity */}
<div className="market-opportunity-wrapper">
  <div className="market-opportunity-container">
    <div className="market-opportunity-content">
      {/* Left Side */}
      <div className="market-opportunity-left">
        <div className="market-opportunity-inner">
          <h2 className="market-opportunity-title">Market Opportunity</h2>
          <p className="market-opportunity-description">
            From municipal systems to industrial enterprises, the global demand for advanced water treatment solutions is on the rise.
          </p>
          {/* <button className="market-opportunity-cta">Investment Opportunity</button> */}
        </div>
      </div>

      {/* Right Side */}
      <div className="market-opportunity-right">
        <div className="market-opportunity-box">
          <h3>Endless Market</h3>
          <p>If the market is water, there’s no end. Fluids, even bigger.</p>
        </div>
        <div className="market-opportunity-box">
          <h3>Enterprise Focus</h3>
          <p>
            Our target market over the next 3 years is <span>enterprise (municipal & industrial)</span>, regulated by
            state, national, and international environmental protections.
          </p>
        </div>
        <div className="market-opportunity-box">
          <h3>Global Growth</h3>
          <p>Global water and wastewater treatment will grow to <span>$956 billion by 2032</span>.</p>
        </div>
        <div className="market-opportunity-box">
          <h3>U.S. Market</h3>
          <p>Wastewater treatment in the United States alone: <span>$121 billion in 2024</span>.</p>
        </div>
      </div>
    </div>
  </div>
</div>




{/* Section 2: How We Plan to Raise Money */}
<div className="funding-plan-section">
  <div className="funding-plan-hero">
    <h1 className="funding-plan-title">Innovative Ways to Raise Funding</h1>
    <p className="funding-plan-subtitle">
      Explore the strategies we use to build trust, drive collaboration, and secure impactful funding.
    </p>
  </div>

  <div className="funding-plan-grid">
    {/* Engineering Partnerships */}
    <div className="funding-plan-item">
      <div className="funding-plan-icon">
        <i className="fas fa-heartbeat"></i>
      </div>
      <div className="funding-plan-content">
        <h3 className="funding-plan-title">Engineering Partnerships</h3>
        <p className="funding-plan-description">
          We boast the endorsement of professional city and independent environmental engineers that make referrals for new municipal clients.
        </p>
      </div>
    </div>

    {/* Environmental Watchdogs */}
    <div className="funding-plan-item">
      <div className="funding-plan-icon">
        <i className="fas fa-bullseye"></i>
      </div>
      <div className="funding-plan-content">
        <h3 className="funding-plan-title">Environmental Watchdogs</h3>
        <p className="funding-plan-description">
          We are in constant talks with local, regional, and national regulators and NGOs to address urgent wastewater issues that poison groundwater.
        </p>
      </div>
    </div>

    {/* Demonstrations & Pilot Programs */}
    <div className="funding-plan-item">
      <div className="funding-plan-icon">
        <i className="fas fa-check-square"></i>
      </div>
      <div className="funding-plan-content">
        <h3 className="funding-plan-title">Demonstrations & Pilot Programs</h3>
        <p className="funding-plan-description">
          We have shown the product off to dozens of prospective clients, showing the results of the technology in real time across Southern CA.
        </p>
      </div>
    </div>

    {/* Funding Programs */}
    <div className="funding-plan-item">
      <div className="funding-plan-icon">
        <i className="fas fa-dollar-sign"></i>
      </div>
      <div className="funding-plan-content">
        <h3 className="funding-plan-title">Funding Programs</h3>
        <p className="funding-plan-description">
          We’re working with Native American & nonprofit organizations to utilize public and private grants and loans in order to access our offerings.
        </p>
      </div>
    </div>
  </div>
</div>




{/* Section 3: The Ask */}
<div className="requested-financing-wrapper">
  <div className="funding-ask-container-invest">
    <h2 className="section-title">Requested Financing</h2>
    <div className="funding-ask-two-column-invest">
      {/* Column 1: Founder Investments */}
      <div>
        <h3 className='InvestbodyH3'>Founder Investments</h3>
        <ul className="founder-investments-list-invest">
          <li>130k - Robert Stone</li>
          <li>50k - Emma Sakaguchi</li>
          <li>50k - Carol Bedford</li>
        </ul>
        <h3 className='InvestbodyH3'>Equity Set-Asides</h3>
        <p className="equity-set-aside-invest"><span>2 million</span> shares, valued at $1 per share.</p>
        <p>Total shares: 10 million. Valuation: $10m</p>
      </div>
      {/* Column 2: Use of Funds */}
      <div>
        <h3 className='InvestbodyH3'>Use of Funds</h3>
        <ul className="use-of-funds-list-invest">
          <li>50k - Cost of Goods Sold (Demo + Sale)</li>
          <li>50k - Professional Team Overhead</li>
          <li>20k - Facility & Office Expenses</li>
          <li>20k - Marketing & Contracting</li>
          <li>10k - Advisors & Contingency</li>
        </ul>
        <p className="flexible-invest-text">
          We are <span>flexible</span> and <span>open</span> to alternative terms at similar valuations.
        </p>
      </div>
    </div>
  </div>
</div>


    </section>
  );
};

export default InvestorsBody;
