import { useState } from "react";
import "./ExploreMoreSection.css";

const ExploreMoreSection = () => {
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
    <section className="explore-more-section">
      <div className="explore-more-container">
        <h2>Innovators Welcome : Join Us</h2>
        <p>
          Become an investor today and join us in revolutionizing water treatment technology,<br />
          driving innovation, and creating a sustainable future together.
        </p>

        {isSubmitted && (
          <div className="success-message">
            Thank you for partnering with us!
          </div>
        )}

        {/* Form stays separate from the button-group */}
        <form className="form-group" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="input-field"
            required
          />
        </form>

        {/* Button remains outside of the form to keep original styling */}
        <div className="button-group">
          <button type="button" onClick={handleSubmit}>Partner With Us</button>
        </div>
      </div>
    </section>
  );
};

export default ExploreMoreSection;
