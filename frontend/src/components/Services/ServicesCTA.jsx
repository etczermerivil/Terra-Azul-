import { useState } from "react";
import "./ServicesCTA.css";

const ServicesCTA = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="join-us-section">
      <div className="join-us-container">
        <h2 className="join-us-header">Innovators Welcome: Join Us</h2>
        <p className="join-us-description">
          Become an investor today and join us in revolutionizing water treatment technology,
          <br />
          driving innovation, and creating a sustainable future together.
        </p>

        {isSubmitted && (
          <div className="success-message">
            Thank you for partnering with us!
          </div>
        )}

        {/* Form stays separate from the button-group */}
        <form className="join-us-form-group" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="join-us-input-field"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="join-us-input-field"
            required
          />
        </form>

        {/* Button remains outside of the form to keep original styling */}
        <div className="join-us-button-group">
          <button type="button" className="join-us-button" onClick={handleSubmit}>
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
