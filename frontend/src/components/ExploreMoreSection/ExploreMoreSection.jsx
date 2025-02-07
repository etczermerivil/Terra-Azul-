import { useIframeModal } from "../../context/IframeModalContext";
import "./ExploreMoreSection.css";

function ExploreMoreSection() {
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
    <section className="explore-more-section">
      <div className="explore-more-container">
        <h2>Become an Investor!</h2>
        <p>
        Join us in transforming water treatment technology—become an investor today and help drive innovation for a sustainable future.
        </p>
        <button onClick={openIframeFormModal} className="form-button">
        Partner With Us
        </button>
      </div>
    </section>
  );
}

export default ExploreMoreSection;
