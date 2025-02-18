import { useState } from "react";
import "./ContactPageBody.css";

const ContactPageBody = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          message: "",
        });
      } else {
        const result = await response.json();
        setStatus("Error: " + result.message);
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <h2 className="contact-body">Connect With Us</h2>
        <p>
          From consulting on water treatment solutions to discussing investment
          opportunities, we are here to collaborate with you. We would love to
          hear from you—feel free to reach out and start the conversation.
        </p>
      </div>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-left">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
              At Terra Azul Tech, we value your inquiries and partnerships.
              Feel free to reach out to us for more information or collaboration
              opportunities.
            </p>
            <div className="contact-info">
              <p className="contact-phone">760-884-1084</p>
              <p className="contact-email">water@terraazultech.com</p>
              <p className="contact-address">5173 Waring Rd #248</p>
              <p className="contact-address">San Diego, CA 92120</p>
            </div>
          </div>

          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="form-row">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="form-input"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="form-input"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number"
                  className="form-input"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="form-button">
                  Send Message
                </button>
                {status && <p className="form-status">{status}</p>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPageBody;
