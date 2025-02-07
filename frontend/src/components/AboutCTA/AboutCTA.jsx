import { useState } from "react";
import "./AboutCTA.css";

const AboutCTA = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false); // Define error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/email/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true); // Success state
        setError(false); // Clear error state
        setFormData({ name: "", email: "" }); // Clear the form
        setTimeout(() => setIsSubmitted(false), 5000); // Hide success message after 5 seconds
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(true); // Set error state
    }
  };

  return (
    <section className="about-cta-section">
      <div className="about-cta-container">
        <h2 className="about-cta-header">Join Our Mission</h2>
        <p className="about-cta-description">
          Be part of our journey in transforming water treatment technology.
          <br />
          Connect with us to explore opportunities for collaboration and impact.
        </p>

        {isSubmitted && (
          <div className="about-cta-success">
            Thank you for reaching out to us!
          </div>
        )}

        {error && (
          <div className="error-message">
            There was an error sending your message. Please try again.
          </div>
         )}

        <form className="about-cta-form-group" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="about-cta-input"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="about-cta-input"
            required
          />
        </form>

        <div className="about-cta-button-group">
          <button type="button" className="about-cta-button" onClick={handleSubmit}>
            Connect With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
