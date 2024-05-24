import "../styles/scoreboard.css";

const Scoreboard = () => {
  return (
    <div className="scoreboard">
      <p className="scoreboard__current">
        Current Score
        <span className="scoreboard__score">0</span>
      </p>
      <p className="scoreboard__best">
        Best Score
        <span className="scoreboard__score">0</span>
      </p>
    </div>
  );
};

export default Scoreboard;
