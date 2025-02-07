import { useIframeModal } from "../../context/IframeModalContext";
import "./InvestorsCTA.css";

const InvestorsCTA = () => {
  const { setIframeModalContent, openIframeModal } = useIframeModal();

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
    <section className="investors-section">
      <div className="investors-container">
        <h2 className="investors-header">Become an Investor!</h2>
        <p className="investors-description">
        Join us in transforming water treatment technology—become an investor today and help drive innovation for a sustainable future.
        </p>


          <button type="button" className="investors-button" onClick={openIframeFormModal}>
            Partner With Us
          </button>
        </div>
    </section>
  );
};

export default InvestorsCTA;
