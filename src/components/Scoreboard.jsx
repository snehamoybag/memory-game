import "../styles/scoreboard.css";

const Scoreboard = () => {
  return (
    <div className="scoreboard">
      <div className="scoreboard__wrapper">
        <p className="scoreboard__current">
          Current Score
          <span className="scoreboard__score">0</span>
        </p>
        <p className="scoreboard__best">
          Best Score
          <span className="scoreboard__score">0</span>
        </p>
      </div>
    </div>
  );
};

export default Scoreboard;
