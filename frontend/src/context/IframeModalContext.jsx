import { useRef, useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import './IframeModal.css';

const IframeModalContext = createContext();

export function IframeModalProvider({ children }) {
  const iframeModalRef = useRef();
  const [iframeModalContent, setIframeModalContent] = useState(null);
  const [onIframeModalClose, setOnIframeModalClose] = useState(null);

  const closeIframeModal = () => {
    setIframeModalContent(null); // clear the modal contents
    if (typeof onIframeModalClose === 'function') {
      setOnIframeModalClose(null);
      onIframeModalClose();
    }
  };

  const contextValue = {
    iframeModalRef,
    iframeModalContent,
    setIframeModalContent,
    setOnIframeModalClose,
    closeIframeModal,
  };

  return (
    <>
      <IframeModalContext.Provider value={contextValue}>
        {children}
      </IframeModalContext.Provider>
      <div ref={iframeModalRef} />
    </>
  );
}

export function IframeModal() {
  const { iframeModalRef, iframeModalContent, closeIframeModal } = useContext(IframeModalContext);

  if (!iframeModalRef || !iframeModalRef.current || !iframeModalContent) return null;

  return ReactDOM.createPortal(
    <div id="iframe-modal">
      <div id="iframe-modal-background" onClick={closeIframeModal} />
      <div id="iframe-modal-content">
        {iframeModalContent}
      </div>
    </div>,
    iframeModalRef.current
  );
}

export const useIframeModal = () => useContext(IframeModalContext);
