import './ContactPageBody.css';

const ContactPageBody = () => {
  return (
<div className="contact-page-container">

<div className="contact-header">
    <h2 className="contact-body">Connect With Us</h2>

    <p>
      From consulting on water treatment solutions to discussing investment opportunities, we are here to collaborate with you. We would love to hear from you—feel free to reach out and start the conversation.
    </p>
  </div>

  <section className="contact-section">


    <div className="contact-container">
      <div className="contact-left">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          At Terra Azul Tech, we value your inquiries and partnerships. Feel free to reach out to us for more information or collaboration opportunities.
        </p>
        <div className="contact-info">
          {/* <p className="contact-name"><strong>Robert Stone</strong></p>
          <p className="contact-role">CFO, Terra Azul Tech</p> */}
          <p className="contact-phone">760-884-1084</p>
          <p className="contact-email">Info@terraazultech.com</p>
          <p className="contact-address">5173 Waring Rd #248</p>
          <p className="contact-address">San Diego, CA 92120</p>
        </div>
      </div>
      <div className="contact-right">
        <form>
          <div className="form-group">
            <div className="form-row">
              <input type="text" placeholder="First Name" className="form-input" />
              <input type="text" placeholder="Last Name" className="form-input" />
            </div>
            <input type="email" placeholder="Email Address" className="form-input" />
            <input type="tel" placeholder="Phone Number" className="form-input" />
            <textarea placeholder="Message" className="form-textarea"></textarea>
            <button type="submit" className="form-button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>

  );
};

export default ContactPageBody;
