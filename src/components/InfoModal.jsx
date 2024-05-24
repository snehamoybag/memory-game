import "../styles/info-modal.css";

const InfoModal = ({ isOpen = false, handleModalClose }) => {
  return (
    <dialog className="info-modal" open={isOpen}>
      <p className="info-modal__paragraph">
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </p>
      <button
        type="button"
        className="info-modal__btn-close"
        onClick={handleModalClose}
      >
        Close
      </button>
    </dialog>
  );
};

export default InfoModal;
