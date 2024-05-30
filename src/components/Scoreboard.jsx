import "../styles/scoreboard.css";

const Scoreboard = ({ currentScore = 0, bestScore = 0 }) => {
  return (
    <div className="scoreboard">
      <div className="scoreboard__wrapper">
        <p className="scoreboard__current">
          Current Score
          <span className="scoreboard__score">{currentScore}</span>
        </p>
        <p className="scoreboard__best">
          Best Score
          <span className="scoreboard__score">{bestScore}</span>
        </p>
      </div>
    </div>
  );
};

export default Scoreboard;
