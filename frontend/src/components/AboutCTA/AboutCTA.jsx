import { useIframeModal } from "../../context/IframeModalContext";
import "./AboutCTA.css";

const AboutCTA = () => {
  const { setIframeModalContent, openIframeModal } = useIframeModal(); // Access the iframe modal context

  const openIframeFormModal = () => {
    setIframeModalContent(
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/4zSj1F2uCt3FlGh5Sm0w"
        style={{
          width: "100%",
          height: "600px",
          border: "none",
          borderRadius: "8px",
        }}
        title="Investor Interest Form"
      ></iframe>
    );
    openIframeModal(); // Open the iframe modal
  };

  return (
    <section className="about-cta-section">
      <div className="about-cta-container">
        <h2 className="about-cta-header">Become an Investor!</h2>
        <p className="about-cta-description">
        Join us in transforming water treatment technology—become an investor today and help drive innovation for a sustainable future.
        </p>

        <div className="about-cta-button-group">
          <button type="button" className="about-cta-button" onClick={openIframeFormModal}>
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
