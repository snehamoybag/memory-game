import "../styles/game-over-modal.css";

const GameOverModal = ({
  isOpen = false,
  currentScore = 0,
  bestScore = 0,
  handlePlayAgain,
}) => {
  return (
    <dialog id="game-over-modal" className="game-over-modal" open={isOpen}>
      <h2 className="game-over-modal__tittle">Game Over!</h2>
      <p className="game-over-modal__paragraph">Your Score: {currentScore}</p>
      <p className="game-over-modal__paragraph">Best Score: {bestScore}</p>
      <button className="game-over-modal__btn" onClick={handlePlayAgain}>
        Play Again
      </button>
    </dialog>
  );
};

export default GameOverModal;
