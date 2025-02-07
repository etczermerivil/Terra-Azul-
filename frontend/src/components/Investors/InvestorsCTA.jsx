import { useState } from "react";
import "./InvestorsCTA.css";

const InvestorsCTA = () => {
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
    <section className="investors-section">
      <div className="investors-container">
        <h2 className="investors-header">Partner With Us: Invest Today</h2>
        <p className="investors-description">
          Become an investor today and join us in revolutionizing water treatment technology,
          <br />
          driving innovation, and creating a sustainable future together.
        </p>

        {isSubmitted && (
          <div className="success-message">
            Thank you for partnering with us!
          </div>
        )}

        {error && (
          <div className="error-message">
            There was an error sending your message. Please try again.
          </div>
         )}

        {/* Form stays separate from the button-group */}
        <form className="investors-form-group" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="investors-input-field"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="investors-input-field"
            required
          />
        </form>

        {/* Button remains outside of the form to keep original styling */}
        <div className="investors-button-group">
          <button type="button" className="investors-button" onClick={handleSubmit}>
            Join Our Mission
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestorsCTA;
