import "./Contact.css";
// import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-cfo-section">
      <div className="contact-cfo-container">
      <p className="contact-cfo-info">
          For more investment inquiries, please feel free to contact our <strong>CFO</strong>:
    </p>
        {/* <h2 className="contact-cfo-header">Contact Our </h2> */}

        <div className="contact-cfo-details">
          <p className="contact-cfo-name">
          Christopher Baber
          </p>
          <p className="contact-cfo-phone">
          828-275-1315
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
