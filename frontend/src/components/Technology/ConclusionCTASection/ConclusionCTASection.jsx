import { useIframeModal } from "../../../context/IframeModalContext";
import "./ConclusionCTASection.css";

const ConclusionCTASection = () => {
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
    <section className="cta-section">
      <div className="cta-section-container">
        <h2 className="cta-section-title">Become an Investor!</h2>
        <p className="cta-section-description">
          Become an investor today and join us in revolutionizing water treatment technology,<br />
          driving innovation, and creating a sustainable future together.
        </p>

        <div className="cta-section-button-group">
          <button type="button" className="cta-section-button" onClick={openIframeFormModal}>
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConclusionCTASection;
