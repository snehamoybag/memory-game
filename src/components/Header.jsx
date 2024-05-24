import logoImg from "/icons/lightbulb-circle.svg";
import infoIcon from "/icons/info-icon.svg";
import InfoModal from "./InfoModal";
import { useState } from "react";
import "../styles/header.css";
import "../styles/logo.css";
import "../styles/sr-only.css";

const Header = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const openInfoModal = () => setIsInfoModalOpen(true);
  const closeInfoModal = () => setIsInfoModalOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImg} alt="site logo" className="logo__img" />
        <h1 className="logo__text">Memory Game</h1>
      </div>
      <button
        type="button"
        className="header__btn-info"
        title="info"
        onClick={openInfoModal}
      >
        <span className="sr-only">Game info</span>
        <img src={infoIcon} alt="" aria-hidden="true" />
      </button>
      <InfoModal isOpen={isInfoModalOpen} handleModalClose={closeInfoModal} />
    </header>
  );
};

export default Header;
