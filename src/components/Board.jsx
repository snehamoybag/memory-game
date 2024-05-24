import Card from "./Card";
import "../styles/board.css";

const Board = () => {
  const cards = [];

  for (let i = 0; i < 30; i += 1) {
    cards.push(<Card key={i} />);
  }

  return <div className="board">{cards}</div>;
};

export default Board;
