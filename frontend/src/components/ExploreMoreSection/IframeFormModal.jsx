
import "./IframeFormModal.css";

function IframeFormModal() {
  return (
    <div id="iframe-modal">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/4zSj1F2uCt3FlGh5Sm0w"
        style={{
          width: "500px",
          height: "600px",
          border: "2px solid #ddd",
          borderRadius: "12px",
          boxShadow: "0 8px 10px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#ffffff",
          margin: "0 auto",

        }}
        title="Investor Interest Form"
      />
    </div>
  );
}

export default IframeFormModal;
