import "../styles/info-modal.css";

const InfoModal = ({ isOpen = false, handleModalClose }) => {
  return (
    <dialog id="info-modal" className="info-modal" open={isOpen}>
      <p className="info-modal__paragraph">
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </p>
      <p className="info-modal__paragraph">
        Get <span className="info-modal__txt-highlight">30 points</span> to win
        the game!
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
