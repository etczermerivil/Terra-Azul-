import { useIframeModal } from "../../context/IframeModalContext";
import "./ServicesCTA.css";

const ServicesCTA = () => {

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
    <section className="join-us-section">
      <div className="join-us-container">
        <h2 className="join-us-header">Become an Investor!</h2>
        <p className="join-us-description">
        Join us in transforming water treatment technology—become an investor today and help drive innovation for a sustainable future.
        </p>

        <button type="button" className="join-us-button" onClick={openIframeFormModal}>
            Partner With us
          </button>
        </div>
    </section>
  );
};

export default ServicesCTA;
