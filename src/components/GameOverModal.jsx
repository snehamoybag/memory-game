import "../styles/modal.css";
import "../styles/gameover-modal.css";

const GameOverModal = ({
  isOpen = false,
  currentScore = 0,
  bestScore = 0,
  handlePlayAgain,
}) => {
  let subTitleText = "";

  if (currentScore >= 30) {
    subTitleText = "Wow! You're a genius!!";
  }

  if (currentScore < 30 && currentScore >= 20) {
    subTitleText = "Your memory is exceptional!";
  }

  if (currentScore < 20) {
    subTitleText = "Nice try! Better luck next time!";
  }

  return (
    <dialog id="game-over-modal" className="modal gameover-modal" open={isOpen}>
      <h2 className="gameover-modal__title">
        {currentScore < 30 ? "Game Over!" : "You Win!"}
      </h2>
      <p className="gameover-modal__sub-title">{subTitleText}</p>
      <p className="gameover-modal__score">
        Your Score: {currentScore}
        <small>(Best Score: {bestScore})</small>
      </p>
      <button className="gameover-modal__btn" onClick={handlePlayAgain}>
        Play Again
      </button>
    </dialog>
  );
};

export default GameOverModal;
