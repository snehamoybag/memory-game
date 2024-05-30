import Card from "./Card";
import getIdFromPokiUrl from "../scripts/getIdFromPokeUrl";
import uppercasedFirstLetter from "../scripts/uppercasedFirstLetter";
import "../styles/board.css";

const Board = ({ cardsData = [], handleCardClick }) => {
  const cardEls = cardsData.map((cardData) => {
    const { name, url } = cardData;

    return (
      <Card
        key={name}
        name={uppercasedFirstLetter(name)}
        id={getIdFromPokiUrl(url)}
        handleClick={() => handleCardClick(name)}
      />
    );
  });

  return <div className="board">{cardEls}</div>;
};

export default Board;
